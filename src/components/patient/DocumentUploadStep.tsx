import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  UploadCloud, 
  FileText, 
  Camera, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ScanLine, 
  ShieldCheck 
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { OcrService } from '../../services/ocrService';
import { SAMPLE_DOCUMENTS } from '../../data/samplePrescriptions';
import { DocumentRecord } from '../../types';

export const DocumentUploadStep: React.FC = () => {
  const { currentPatient, setPatientStep, addDocument, showToast } = useApp();
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStage, setCurrentStage] = useState<DocumentRecord['processingStage']>('uploading');

  const handleProcessSampleDoc = async (sampleIndex: number = 0) => {
    setIsProcessing(true);
    const sample = SAMPLE_DOCUMENTS[sampleIndex];

    const result = await OcrService.processDocument(
      { name: sample.fileName, size: 1400000 },
      currentPatient.id,
      (stage) => setCurrentStage(stage)
    );

    addDocument(result);
    setIsProcessing(false);
    showToast('Prescription digitized via TrOCR & BioBERT.');
    setPatientStep('medication_verify');
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Step Indicator */}
        <div className="flex items-center justify-between">
          <Badge variant="teal">STEP 6 of 8</Badge>
          <span className="text-xs text-slate-500 font-medium">Document Intelligence (TrOCR)</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            Previous Medical Records
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Upload previous doctor prescriptions, laboratory reports, or discharge summaries to auto-link your longitudinal history.
          </p>
        </div>

        {/* Processing Animation Modal / Box */}
        {isProcessing ? (
          <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-teal-500/40 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 mx-auto animate-bounce">
              <ScanLine className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Digitizing Clinical Document...
              </h3>
              <p className="text-xs font-mono text-teal-600 dark:text-teal-400 capitalize">
                Pipeline Stage: {currentStage.replace('_', ' ')}
              </p>
            </div>

            {/* Stages Visualizer */}
            <div className="grid grid-cols-5 gap-1 pt-2 max-w-sm mx-auto">
              {[
                { stage: 'uploading', label: 'Upload' },
                { stage: 'preprocessing', label: 'Deskew' },
                { stage: 'layout_analysis', label: 'Layout' },
                { stage: 'trocr_recognition', label: 'TrOCR' },
                { stage: 'nlp_entity_extraction', label: 'BioBERT' }
              ].map((s, idx) => {
                const stages = ['uploading', 'preprocessing', 'layout_analysis', 'trocr_recognition', 'nlp_entity_extraction', 'completed'];
                const isPassed = stages.indexOf(currentStage) >= idx;
                return (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div className={`w-full h-1.5 rounded-full ${isPassed ? 'bg-teal-600' : 'bg-slate-200 dark:bg-slate-700'}`} />
                    <span className={`text-[9px] font-bold ${isPassed ? 'text-teal-600' : 'text-slate-400'}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Upload Area */}
            <div 
              onClick={() => handleProcessSampleDoc(0)}
              className="p-8 border-2 border-dashed border-teal-500/50 hover:border-teal-500 bg-teal-50/40 dark:bg-teal-950/20 hover:bg-teal-50/80 rounded-3xl text-center cursor-pointer transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform">
                <UploadCloud className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Tap to Select File or Take Photo
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                PDF, JPG, PNG from phone camera or gallery (Handwritten Rx supported)
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-teal-700 dark:text-teal-400 font-semibold">
                <Camera className="w-3.5 h-3.5" />
                <span>Simulate Phone Camera Capture</span>
              </div>
            </div>

            {/* Quick Demo Document Presets */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
                Or Load Demo Test Presets:
              </span>
              <div className="space-y-2">
                <button
                  onClick={() => handleProcessSampleDoc(0)}
                  className="w-full p-2.5 bg-white dark:bg-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-left transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-teal-600" />
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">
                        Prescription: Dr. Shukla (KEM Hospital)
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Contains Pantoprazole (98%) + Sucralfate (89% flagged for review)
                      </span>
                    </div>
                  </div>
                  <Badge variant="amber">Contains &lt;95% Conf</Badge>
                </button>

                <button
                  onClick={() => handleProcessSampleDoc(1)}
                  className="w-full p-2.5 bg-white dark:bg-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-left transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">
                        Laboratory Report: Dr. Lal PathLabs
                      </span>
                      <span className="text-[10px] text-slate-400">
                        HbA1c 7.8% and Fasting Blood Sugar 148 mg/dL
                      </span>
                    </div>
                  </div>
                  <Badge variant="blue">Biochemistry</Badge>
                </button>
              </div>
            </div>

            {/* Skip Button */}
            <div className="pt-2 flex justify-between items-center text-xs">
              <button
                onClick={() => setPatientStep('ayush_intake')}
                className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
              >
                Skip Document Upload &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
