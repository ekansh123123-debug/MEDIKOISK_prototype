import React from 'react';
import { useApp, PatientStep } from '../../context/AppContext';
import { ChevronLeft, RotateCcw, ShieldCheck, Check } from 'lucide-react';

export const PatientMobileHeader: React.FC = () => {
  const { patientStep, setPatientStep, currentPatient, resetAll } = useApp();

  const steps: Array<{ id: PatientStep; title: string; num: number }> = [
    { id: 'hospital_qr', title: 'Hospital QR', num: 1 },
    { id: 'abha_login', title: 'Identity', num: 2 },
    { id: 'consent', title: 'Consent', num: 3 },
    { id: 'basic_info', title: 'Demographics', num: 4 },
    { id: 'complaint', title: 'Adaptive Intake', num: 5 },
    { id: 'adaptive_questions', title: 'Adaptive Intake', num: 5 },
    { id: 'document_upload', title: 'Document OCR', num: 6 },
    { id: 'medication_verify', title: 'Verify Meds', num: 7 },
    { id: 'ayush_intake', title: 'Traditional Med', num: 8 },
    { id: 'queue_token', title: 'OPD Token', num: 9 },
    { id: 'queue_tracking', title: 'OPD Token', num: 9 }
  ];

  const currentStepObj = steps.find(s => s.id === patientStep) || steps[0];
  const currentStepNum = currentStepObj.num;
  const totalSteps = 9;
  const progressPercent = Math.round((currentStepNum / totalSteps) * 100);

  const handleBack = () => {
    switch (patientStep) {
      case 'abha_login':
        setPatientStep('hospital_qr');
        break;
      case 'consent':
        setPatientStep('abha_login');
        break;
      case 'basic_info':
        setPatientStep('consent');
        break;
      case 'complaint':
      case 'adaptive_questions':
        setPatientStep('basic_info');
        break;
      case 'document_upload':
        setPatientStep('complaint');
        break;
      case 'medication_verify':
        setPatientStep('document_upload');
        break;
      case 'ayush_intake':
        setPatientStep('medication_verify');
        break;
      case 'queue_token':
      case 'queue_tracking':
        setPatientStep('ayush_intake');
        break;
      default:
        setPatientStep('hospital_qr');
        break;
    }
  };

  return (
    <div className="md:hidden mb-4 p-3 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-teal-500/20 shadow-sm animate-fade-in">
      <div className="flex items-center justify-between gap-2">
        {patientStep !== 'hospital_qr' ? (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-1 text-xs font-bold text-teal-700 dark:text-teal-400 py-1 px-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-colors cursor-pointer tactile-btn"
            aria-label="Go back to previous intake step"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        ) : (
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-700 dark:text-teal-400 px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ABDM Kiosk #01</span>
          </div>
        )}

        <div className="text-center flex-1 min-w-0 px-1">
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
            Step {currentStepNum} of {totalSteps}
          </span>
          <h2 className="text-xs font-bold text-slate-900 dark:text-white truncate">
            {currentStepObj.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => {
            if (window.confirm('Reset patient intake session to beginning?')) {
              setPatientStep('hospital_qr');
            }
          }}
          className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Restart Kiosk Session"
          aria-label="Restart patient intake"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-2.5 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-300 shadow-sm"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
