import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  UploadCloud, 
  FileText, 
  Camera, 
  ScanLine, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { OcrService } from '../../services/ocrService';
import { SAMPLE_DOCUMENTS } from '../../data/samplePrescriptions';
import { DocumentRecord } from '../../types';

export const DocumentUploadStep: React.FC = () => {
  const { currentPatient, setPatientStep, addDocument, showToast, t } = useApp();
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
    showToast('Prescription scanned successfully.');
    setPatientStep('medication_verify');
  };

  return (
    <div className="max-w-xl mx-auto py-2 sm:py-6 px-1 sm:px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-white/[0.07] dark:bg-[#111622] shadow-xl space-y-5 sm:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.07] text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">Step: Past Prescriptions & Notes</span>
          <span className="text-slate-500 dark:text-slate-400">Safe & Private</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.docTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            {t.docDesc}
          </p>
        </div>

        {/* Processing Animation */}
        {isProcessing ? (
          <div className="p-8 bg-slate-50 dark:bg-[#161d2b] rounded-2xl border border-teal-500/40 text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 mx-auto border border-teal-500/20">
              <ScanLine className="w-7 h-7 animate-pulse" aria-hidden="true" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                Reading Prescription Photo…
              </h3>
              <p className="text-xs text-teal-600 dark:text-teal-400 capitalize">
                Checking: {currentStage.replace(/_/g, ' ')}
              </p>
            </div>

            {/* Stages Visualizer */}
            <div className="grid grid-cols-5 gap-1 pt-2 max-w-sm mx-auto">
              {[
                { stage: 'uploading', label: 'Upload' },
                { stage: 'preprocessing', label: 'Enhance' },
                { stage: 'layout_analysis', label: 'Layout' },
                { stage: 'trocr_recognition', label: 'Reading' },
                { stage: 'nlp_entity_extraction', label: 'Medicines' }
              ].map((s, idx) => {
                const stages = ['uploading', 'preprocessing', 'layout_analysis', 'trocr_recognition', 'nlp_entity_extraction', 'completed'];
                const isPassed = stages.indexOf(currentStage) >= idx;
                return (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div className={`w-full h-1.5 rounded-full ${isPassed ? 'bg-teal-600' : 'bg-slate-200 dark:bg-[#131926]'}`} />
                    <span className={`text-[9px] font-bold ${isPassed ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400 dark:text-slate-500'}`}>
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Upload Dropzone */}
            <button 
              type="button"
              onClick={() => handleProcessSampleDoc(0)}
              className="w-full p-8 border-2 border-dashed border-teal-500/40 hover:border-teal-500 bg-teal-500/5 hover:bg-teal-500/10 rounded-2xl text-center cursor-pointer transition-all group tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label="Upload or scan handwritten prescription slip"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-105 transition-transform">
                <UploadCloud className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {t.dragDropTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {t.dragDropSub}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 font-semibold">
                <Camera className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.takePhotoBtn}</span>
              </div>
            </button>

            {/* Test Document Presets */}
            <div className="p-4 bg-slate-50 dark:bg-[#161d2b] rounded-xl border border-slate-200 dark:border-white/[0.07] space-y-2">
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider block">
                {t.selectSamplePrescription}:
              </span>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleProcessSampleDoc(0)}
                  className="w-full p-3 bg-white dark:bg-[#131926] hover:bg-slate-100 dark:hover:bg-[#1c2436] rounded-xl border border-slate-200 dark:border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-left transition-colors shadow-sm tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" aria-hidden="true" />
                    <div className="min-w-0">
                      <span className="font-bold text-slate-900 dark:text-slate-200 block truncate">
                        Prescription Slip: Dr. Shukla (KEM Hospital)
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        Pantoprazole (98%) + Sucralfate (89% flagged for review)
                      </span>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto px-2 py-0.5 rounded text-[10px] font-mono tabular-nums bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-bold shrink-0 whitespace-nowrap">
                    &lt;95% Conf Flagged
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleProcessSampleDoc(1)}
                  className="w-full p-3 bg-white dark:bg-[#131926] hover:bg-slate-100 dark:hover:bg-[#1c2436] rounded-xl border border-slate-200 dark:border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-left transition-colors shadow-sm tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" aria-hidden="true" />
                    <div className="min-w-0">
                      <span className="font-bold text-slate-900 dark:text-slate-200 block truncate">
                        Laboratory Panel: Dr. Lal PathLabs
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">
                        HbA1c 7.8% and Fasting Blood Sugar 148 mg/dL
                      </span>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto px-2 py-0.5 rounded text-[10px] bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 font-bold shrink-0 whitespace-nowrap">
                    Biochemistry
                  </span>
                </button>
              </div>
            </div>

            {/* Skip Option */}
            <div className="pt-2 flex justify-between items-center text-xs">
              <button
                type="button"
                onClick={() => setPatientStep('ayush_intake')}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium cursor-pointer"
              >
                Skip Document Step &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
