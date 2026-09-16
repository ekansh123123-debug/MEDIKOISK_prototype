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
    showToast,
    t 
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

  const handleSpeakQuestion = () => {
    const text = currentQuestion.translations[language] || currentQuestion.text;
    VoiceService.speak(text, language);
  };

  const handleSelectComplaintCard = (catId: string) => {
    const isEmerg = handleCheckEmergency(catId);
    if (isEmerg) return;

    setSelectedCategory(catId as ComplaintCategory);
    setRawInputText(CHIEF_COMPLAINT_PRESETS.find(p => p.id === catId)?.label || catId);
    const initialQ = AdaptiveEngine.getInitialQuestion(catId as ComplaintCategory);
    setCurrentQuestion(initialQ);
    setStage('adaptive_dag');
  };

  const handleAnswerSubmit = () => {
    let finalAnswer = currentAnswer;
    if (currentQuestion.inputType === 'multi-choice') {
      finalAnswer = multiSelectAnswers.length > 0 ? multiSelectAnswers : ['None of these'];
    }

    const answerStr = Array.isArray(finalAnswer) ? finalAnswer.join(' ') : String(finalAnswer);
    if (handleCheckEmergency(answerStr)) return;

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
      const generatedSoap = AdaptiveEngine.generateSoapSummary(
        currentPatient,
        selectedCategory,
        rawInputText,
        updatedResponses
      );
      setCurrentSoap(generatedSoap);
      showToast('Clinical case summary synthesized.');
      setPatientStep('document_upload');
    }
  };

  const currentQText = currentQuestion.translations[language] || currentQuestion.text;

  return (
    <div className="max-w-2xl mx-auto py-6 px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-teal-500/20 shadow-xl dark:shadow-2xl space-y-6">
        {/* Step Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">
            {stage === 'complaint_selection' ? 'Step: Presenting Chief Complaint' : 'Step: Adaptive Clinical Inquiry'}
          </span>
          <span className="text-slate-500 dark:text-slate-400 font-mono">
            {stage === 'adaptive_dag' ? `${progressInfo.progress}% Traversed` : 'Bhashini Voice & Touch'}
          </span>
        </div>

        {/* STAGE 1: COMPLAINT SELECTION */}
        {stage === 'complaint_selection' && (
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
                {t.adaptiveTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.adaptiveDesc}
              </p>
            </div>

            {/* Voice Microphone Bar */}
            <div className="p-5 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-sky-500/5 dark:from-teal-500/10 dark:via-cyan-500/10 dark:to-sky-500/10 border border-teal-500/20 dark:border-teal-500/30 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 backdrop-blur-md">
              <button
                onClick={handleStartVoice}
                disabled={isListening}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-slate-950 shadow-xl transition-all ${
                  isListening
                    ? 'bg-rose-600 animate-pulse scale-110 shadow-rose-500/50 text-white'
                    : 'bg-gradient-to-tr from-teal-500 to-cyan-400 hover:scale-105 active:scale-95 shadow-teal-500/30 font-bold'
                }`}
                title="Tap to speak your symptoms"
              >
                <Mic className="w-8 h-8" />
              </button>

              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  {isListening ? t.listeningNow : t.clickToSpeak}
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Project Bhashini Multi-dialect Speech Recognition
                </p>
              </div>

              {isListening && (
                <div className="flex items-center gap-1.5 h-6">
                  <span className="w-1.5 bg-teal-500 rounded-full soundwave-bar" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1.5 bg-cyan-500 rounded-full soundwave-bar" style={{ animationDelay: '0.3s' }} />
                  <span className="w-1.5 bg-sky-500 rounded-full soundwave-bar" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1.5 bg-teal-500 rounded-full soundwave-bar" style={{ animationDelay: '0.4s' }} />
                  <span className="w-1.5 bg-cyan-500 rounded-full soundwave-bar" style={{ animationDelay: '0.1s' }} />
                </div>
              )}

              {voiceTranscript && (
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200 w-full animate-fade-in text-left shadow-sm">
                  <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 block uppercase">
                    Transcribed Speech:
                  </span>
                  "{voiceTranscript}"
                  {voiceLatency && (
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-2">
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
                className="flex-1 px-4 py-3 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="px-5 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 disabled:opacity-50 text-slate-950 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Proceed</span>
                <Send className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>

            {/* Symptom Cards Grid */}
            <div>
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block mb-3">
                {t.orSelectComplaint}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CHIEF_COMPLAINT_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectComplaintCard(preset.id)}
                    className="p-3.5 bg-white dark:bg-slate-900/60 hover:bg-teal-50 dark:hover:bg-teal-500/10 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 rounded-2xl text-left transition-all group flex flex-col justify-between backdrop-blur-md shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm mb-2 group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        {preset.label}
                      </h4>
                      <p className="text-[10px] text-teal-600 dark:text-teal-400 font-medium mt-0.5">
                        {preset.hi}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STAGE 2: ADAPTIVE DAG */}
        {stage === 'adaptive_dag' && (
          <div className="space-y-6 animate-fade-in">
            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.questionProgress}
                </span>
                <span>Entropy Score: {currentQuestion.entropyWeight}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-500 shadow-sm shadow-teal-500/50"
                  style={{ width: `${progressInfo.progress}%` }}
                />
              </div>
            </div>

            {/* Current Question */}
            <div className="p-5 bg-slate-50/80 dark:bg-slate-900/70 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 backdrop-blur-md">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-teal-600 dark:text-teal-400">
                    Dimension: {currentQuestion.clinicalDimension.toUpperCase()}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug font-display">
                    {currentQText}
                  </h3>
                </div>
                <button
                  onClick={handleSpeakQuestion}
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 shrink-0 transition-colors"
                  title={t.readAloudBtn}
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
                        className={`w-full p-3.5 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between shadow-sm ${
                          isSelected
                            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold border-teal-400 shadow-lg shadow-teal-500/20'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-teal-500/40'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {opt.isRedFlag && (
                          <span className="px-2 py-0.5 rounded text-[10px] bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-800">
                            Safety Red-Flag
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
                        className={`w-full p-3.5 rounded-xl text-left text-xs font-semibold border transition-all flex items-center justify-between shadow-sm ${
                          isSelected
                            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold border-teal-400 shadow-md'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-teal-500/40'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isSelected ? 'bg-slate-950 text-teal-400 border-slate-950 font-black' : 'border-slate-300 dark:border-slate-600'
                        }`}>
                          {isSelected && '✓'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Scale Input */}
              {currentQuestion.inputType === 'scale' && (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>{currentQuestion.scaleLabels?.min}</span>
                    <span className="text-2xl font-black text-teal-600 dark:text-teal-400 font-mono">
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
                    className="w-full accent-teal-500 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between px-1 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <span key={n} className={currentAnswer === n ? 'font-bold text-teal-600 dark:text-teal-400' : ''}>
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStage('complaint_selection')}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
              >
                &larr; Re-select Complaint
              </button>

              <button
                onClick={handleAnswerSubmit}
                disabled={
                  currentQuestion.inputType === 'single-choice' && !currentAnswer
                }
                className="px-6 py-3.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 disabled:opacity-50 text-slate-950 font-bold rounded-2xl shadow-xl shadow-teal-500/20 flex items-center gap-2 text-xs transition-all"
              >
                <span>Confirm & Next Clinical Branch</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
