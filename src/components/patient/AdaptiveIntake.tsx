import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Mic, 
  Send, 
  Volume2, 
  ArrowRight, 
  Activity, 
  Sparkles, 
  HeartPulse, 
  AlertCircle, 
  CheckCircle2, 
  Radio, 
  CornerDownRight, 
  Layers 
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { CHIEF_COMPLAINT_PRESETS, ADAPTIVE_QUESTION_REGISTRY } from '../../data/adaptiveQuestions';
import { AdaptiveEngine } from '../../services/adaptiveEngine';
import { TriageEngine } from '../../services/triageEngine';
import { VoiceService } from '../../services/voiceService';
import { ComplaintCategory, QuestionNode, IntakeResponse } from '../../types';

export const AdaptiveIntake: React.FC = () => {
  const { 
    currentPatient, 
    setPatientStep, 
    language, 
    setCurrentSoap, 
    triggerEmergency, 
    showToast 
  } = useApp();

  // Intake State
  const [stage, setStage] = useState<'complaint_selection' | 'adaptive_dag'>('complaint_selection');
  const [selectedCategory, setSelectedCategory] = useState<ComplaintCategory>('abdominal_pain');
  const [rawInputText, setRawInputText] = useState('');
  
  // Voice listening state
  const [isListening, setIsListening] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [voiceLatency, setVoiceLatency] = useState<number | null>(null);

  // DAG Traversal State
  const [currentQuestion, setCurrentQuestion] = useState<QuestionNode>(
    AdaptiveEngine.getInitialQuestion('abdominal_pain')
  );
  const [currentAnswer, setCurrentAnswer] = useState<any>('');
  const [multiSelectAnswers, setMultiSelectAnswers] = useState<string[]>([]);
  const [responses, setResponses] = useState<IntakeResponse[]>([]);
  const [progressInfo, setProgressInfo] = useState({ progress: 10, totalEstimated: 10 });

  // Evaluate raw input for emergency on every change
  const handleCheckEmergency = (text: string) => {
    const emergency = TriageEngine.evaluateInput(
      text, 
      currentPatient.id, 
      currentPatient.name
    );
    if (emergency) {
      triggerEmergency(emergency);
      return true;
    }
    return false;
  };

  // Start voice recognition
  const handleStartVoice = () => {
    setIsListening(true);
    setVoiceTranscript('');
    setVoiceLatency(null);

    const controller = VoiceService.startListening(
      language,
      (result) => {
        setIsListening(false);
        setVoiceTranscript(result.transcript);
        setVoiceLatency(result.processingLatencyMs);
        setRawInputText(result.transcript);
        showToast(`Voice transcribed via ${result.engineUsed} in ${(result.processingLatencyMs / 1000).toFixed(2)}s`);
        
        // Immediate safety check
        if (handleCheckEmergency(result.transcript)) {
          return;
        }

        // Check if complaint can be categorized
        const lower = result.transcript.toLowerCase();
        if (lower.includes('chest') || lower.includes('chhati') || lower.includes('छाती')) {
          setSelectedCategory('chest_pain');
        } else {
          setSelectedCategory('abdominal_pain');
        }
      },
      (err) => {
        setIsListening(false);
        console.warn(err);
      }
    );
  };

  // Speak current question text
  const handleSpeakQuestion = () => {
    const text = currentQuestion.translations[language] || currentQuestion.text;
    VoiceService.speak(text, language);
  };

  // Select complaint preset card
  const handleSelectComplaintCard = (catId: string) => {
    const isEmerg = handleCheckEmergency(catId);
    if (isEmerg) return;

    setSelectedCategory(catId as ComplaintCategory);
    setRawInputText(CHIEF_COMPLAINT_PRESETS.find(p => p.id === catId)?.label || catId);
    const initialQ = AdaptiveEngine.getInitialQuestion(catId as ComplaintCategory);
    setCurrentQuestion(initialQ);
    setStage('adaptive_dag');
  };

  // Handle DAG answer submission
  const handleAnswerSubmit = () => {
    let finalAnswer = currentAnswer;
    if (currentQuestion.inputType === 'multi-choice') {
      finalAnswer = multiSelectAnswers.length > 0 ? multiSelectAnswers : ['None of these'];
    }

    // Safety check on answer text
    const answerStr = Array.isArray(finalAnswer) ? finalAnswer.join(' ') : String(finalAnswer);
    if (handleCheckEmergency(answerStr)) return;

    // Check if the selected option was marked as a red flag
    if (currentQuestion.options) {
      const selectedOpt = currentQuestion.options.find(o => o.label === finalAnswer || o.id === finalAnswer);
      if (selectedOpt?.isRedFlag) {
        const emergency = TriageEngine.evaluateInput(
          selectedOpt.redFlagReason || 'Emergency clinical trigger selected in adaptive questionnaire',
          currentPatient.id,
          currentPatient.name
        );
        if (emergency) {
          triggerEmergency(emergency);
          return;
        }
      }
    }

    const newResponse: IntakeResponse = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.text,
      clinicalDimension: currentQuestion.clinicalDimension,
      answer: finalAnswer,
      sourceText: answerStr,
      inputMode: 'tap',
      timestamp: new Date().toISOString(),
      confidence: 1.0
    };

    const updatedResponses = [...responses, newResponse];
    setResponses(updatedResponses);

    // Compute next best question via Entropy Engine
    const nextResult = AdaptiveEngine.getNextQuestion(
      selectedCategory,
      currentQuestion.id,
      updatedResponses
    );

    if (nextResult.nextQuestion) {
      setCurrentQuestion(nextResult.nextQuestion);
      setCurrentAnswer('');
      setMultiSelectAnswers([]);
      setProgressInfo({
        progress: nextResult.progress,
        totalEstimated: nextResult.totalEstimated
      });
    } else {
      // Completed! Generate SOAP summary
      const generatedSoap = AdaptiveEngine.generateSoapSummary(
        currentPatient,
        selectedCategory,
        rawInputText,
        updatedResponses
      );
      setCurrentSoap(generatedSoap);
      showToast('AI Clinical Summary synthesized from adaptive DAG responses.');
      setPatientStep('document_upload');
    }
  };

  const currentQText = currentQuestion.translations[language] || currentQuestion.text;

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Step Header */}
        <div className="flex items-center justify-between">
          <Badge variant="teal">
            {stage === 'complaint_selection' ? 'STEP 5 of 8' : 'ADAPTIVE CLINICAL INTAKE'}
          </Badge>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400">
              {stage === 'adaptive_dag' ? `${progressInfo.progress}% Complete` : 'Initial Complaint'}
            </span>
          </div>
        </div>

        {/* ========================================================== */}
        {/* STAGE 1: INITIAL CHIEF COMPLAINT (VOICE / TEXT / TAP) */}
        {/* ========================================================== */}
        {stage === 'complaint_selection' && (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                What brings you to the hospital today?
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                You can speak in your language, type your symptom, or tap one of the common complaints below.
              </p>
            </div>

            {/* Voice Microphone Bar */}
            <div className="p-4 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 border border-teal-500/30 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
              <button
                onClick={handleStartVoice}
                disabled={isListening}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
                  isListening
                    ? 'bg-rose-600 animate-pulse scale-110 shadow-rose-500/40'
                    : 'bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-teal-500/30'
                }`}
                title="Tap to speak your symptoms"
              >
                <Mic className="w-8 h-8" />
              </button>

              <div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {isListening ? 'Listening via Project Bhashini ASR...' : 'Tap to Speak (Voice AI)'}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Supports Hindi, Marathi, English, Tamil, Bengali & Telugu
                </p>
              </div>

              {/* Live Waveform Indicator if listening */}
              {isListening && (
                <div className="flex items-center gap-1 h-6">
                  <span className="w-1.5 bg-teal-600 rounded-full soundwave-bar" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1.5 bg-teal-600 rounded-full soundwave-bar" style={{ animationDelay: '0.3s' }} />
                  <span className="w-1.5 bg-teal-600 rounded-full soundwave-bar" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1.5 bg-teal-600 rounded-full soundwave-bar" style={{ animationDelay: '0.4s' }} />
                  <span className="w-1.5 bg-teal-600 rounded-full soundwave-bar" style={{ animationDelay: '0.1s' }} />
                </div>
              )}

              {voiceTranscript && (
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 w-full animate-fade-in">
                  <span className="text-[10px] font-bold text-teal-600 block uppercase">
                    Understood Speech:
                  </span>
                  "{voiceTranscript}"
                  {voiceLatency && (
                    <span className="text-[10px] text-slate-400 ml-2">
                      ({(voiceLatency / 1000).toFixed(2)}s latency)
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Quick Text Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={rawInputText}
                onChange={(e) => setRawInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && rawInputText.trim()) {
                    if (!handleCheckEmergency(rawInputText)) {
                      setStage('adaptive_dag');
                    }
                  }
                }}
                placeholder="Or describe symptoms here (e.g. stomach pain for 3 days)..."
                className="flex-1 px-4 py-3 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={() => {
                  if (rawInputText.trim()) {
                    if (!handleCheckEmergency(rawInputText)) {
                      setStage('adaptive_dag');
                    }
                  }
                }}
                disabled={!rawInputText.trim()}
                className="px-5 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>Start</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Symptom Cards Grid */}
            <div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-3">
                Common Outpatient Presentations
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CHIEF_COMPLAINT_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectComplaintCard(preset.id)}
                    className="p-3 bg-slate-50 hover:bg-teal-50 dark:bg-slate-800 dark:hover:bg-teal-950/40 border border-slate-200 dark:border-slate-700 hover:border-teal-500/60 rounded-2xl text-left transition-all group flex flex-col justify-between"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-teal-600 shadow-sm mb-2 group-hover:scale-110 transition-transform">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        {preset.label}
                      </h4>
                      <p className="text-[10px] text-teal-700 dark:text-teal-400 font-medium mt-0.5">
                        {preset.hi}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* STAGE 2: ADAPTIVE DAG QUESTION TRAVERSAL */}
        {/* ========================================================== */}
        {stage === 'adaptive_dag' && (
          <div className="space-y-6 animate-fade-in">
            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-teal-600 dark:text-teal-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Adaptive Inquiry Tree
                </span>
                <span>Entropy Optimization Weight: {currentQuestion.entropyWeight}</span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressInfo.progress}%` }}
                />
              </div>
            </div>

            {/* Current Adaptive Question */}
            <div className="p-5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-teal-600 dark:text-teal-400">
                    Clinical Dimension: {currentQuestion.clinicalDimension.toUpperCase()}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {currentQText}
                  </h3>
                </div>
                <button
                  onClick={handleSpeakQuestion}
                  className="p-2 text-slate-500 hover:text-teal-600 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600 shrink-0 transition-colors"
                  title="Read question aloud in chosen language"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Single-Choice Options */}
              {currentQuestion.inputType === 'single-choice' && currentQuestion.options && (
                <div className="space-y-2 pt-2">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = currentAnswer === opt.label || currentAnswer === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setCurrentAnswer(opt.label)}
                        className={`w-full p-3.5 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-500/50'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {opt.isRedFlag && (
                          <span className="px-2 py-0.5 rounded text-[10px] bg-rose-100 text-rose-700 font-bold">
                            Safety Flag
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Multi-Choice Options */}
              {currentQuestion.inputType === 'multi-choice' && currentQuestion.options && (
                <div className="space-y-2 pt-2">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = multiSelectAnswers.includes(opt.label);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => {
                          if (isSelected) {
                            setMultiSelectAnswers(multiSelectAnswers.filter(a => a !== opt.label));
                          } else {
                            setMultiSelectAnswers([...multiSelectAnswers, opt.label]);
                          }
                        }}
                        className={`w-full p-3.5 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-500/50'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isSelected ? 'bg-white text-teal-600 border-white' : 'border-slate-400'
                        }`}>
                          {isSelected && '✓'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Scale Input (e.g. Pain 1 to 10) */}
              {currentQuestion.inputType === 'scale' && (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{currentQuestion.scaleLabels?.min}</span>
                    <span className="text-xl font-extrabold text-teal-600">
                      {currentAnswer || 6} / 10
                    </span>
                    <span>{currentQuestion.scaleLabels?.max}</span>
                  </div>
                  <input
                    type="range"
                    min={currentQuestion.minScale || 1}
                    max={currentQuestion.maxScale || 10}
                    value={currentAnswer || 6}
                    onChange={(e) => setCurrentAnswer(Number(e.target.value))}
                    className="w-full accent-teal-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between px-1 text-[11px] font-mono text-slate-400">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <span key={n} className={currentAnswer === n ? 'font-bold text-teal-600' : ''}>
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Answer & Advance Button */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStage('complaint_selection')}
                className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
              >
                &larr; Re-select Complaint
              </button>

              <button
                onClick={handleAnswerSubmit}
                disabled={
                  currentQuestion.inputType === 'single-choice' && !currentAnswer
                }
                className="px-6 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 disabled:opacity-50 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/25 flex items-center gap-2 text-xs transition-all"
              >
                <span>Confirm & Next Clinical Branch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
