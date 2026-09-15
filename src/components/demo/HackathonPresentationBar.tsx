import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sparkles, 
  Play, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  FileText, 
  Mic, 
  Stethoscope, 
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { Badge } from '../common/Badge';

export const HackathonPresentationBar: React.FC = () => {
  const { 
    setRole, 
    setPatientStep, 
    loadDemoScenario, 
    resetAll, 
    role, 
    patientStep 
  } = useApp();

  const steps = [
    { num: 1, label: '1. QR Entry', action: () => { setRole('patient'); setPatientStep('hospital_qr'); } },
    { num: 2, label: '2. ABHA Login', action: () => { setRole('patient'); setPatientStep('abha_login'); } },
    { num: 3, label: '3. Consent Gate', action: () => { setRole('patient'); setPatientStep('consent'); } },
    { num: 4, label: '4. Demographics', action: () => { setRole('patient'); setPatientStep('basic_info'); } },
    { num: 5, label: '5. Complaint & Voice', action: () => { setRole('patient'); setPatientStep('complaint'); } },
    { num: 6, label: '6. Adaptive DAG', action: () => { setRole('patient'); setPatientStep('adaptive_questions'); } },
    { num: 7, label: '7. Document OCR', action: () => { setRole('patient'); setPatientStep('document_upload'); } },
    { num: 8, label: '8. Patient Verify', action: () => { setRole('patient'); setPatientStep('medication_verify'); } },
    { num: 9, label: '9. Queue Token', action: () => { setRole('patient'); setPatientStep('queue_token'); } },
    { num: 10, label: '10. Doctor SOAP', action: () => { setRole('doctor'); } },
    { num: 11, label: '11. FHIR & ABDM', action: () => { setRole('admin'); } }
  ];

  return (
    <div className="bg-slate-900 text-white border-b border-slate-800 px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 text-xs">
        {/* Left: Hackathon Team Tag */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-teal-500/20 text-teal-400 rounded-lg">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <span className="font-extrabold text-white uppercase tracking-wider text-[10px] block">
              HACKATHON EVALUATION CONTROLLER • CTRL Z SQUAD
            </span>
            <span className="text-[11px] text-teal-400">
              MEDIKOISK Interactive Judging Suite (DYPCOE, Akurdi)
            </span>
          </div>
        </div>

        {/* Center: 11-Step Interactive Stepper */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-2xl py-1">
          {steps.map((s) => (
            <button
              key={s.num}
              onClick={s.action}
              className="px-2 py-1 bg-slate-800 hover:bg-teal-600 active:bg-teal-700 text-[11px] font-medium rounded-lg text-slate-200 hover:text-white whitespace-nowrap transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Right: Quick 1-Click Scenario Triggers */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] text-slate-400 font-bold uppercase hidden sm:inline">Scenarios:</span>
          <button
            onClick={() => loadDemoScenario('abdominal')}
            title="Load Abdominal Pain DAG Scenario"
            className="px-2 py-1 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-[10px] flex items-center gap-1"
          >
            A. DAG
          </button>
          <button
            onClick={() => loadDemoScenario('ocr')}
            title="Load Prescription OCR Verification Scenario"
            className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-[10px] flex items-center gap-1"
          >
            B. OCR
          </button>
          <button
            onClick={() => loadDemoScenario('emergency')}
            title="Trigger Deterministic Emergency Stop"
            className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-[10px] flex items-center gap-1 animate-pulse"
          >
            C. Red-Flag
          </button>
          <button
            onClick={() => loadDemoScenario('doctor_approve')}
            title="Load Doctor Sign-off Screen"
            className="px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-[10px] flex items-center gap-1"
          >
            D. Sign-off
          </button>
          <button
            onClick={resetAll}
            title="Reset to clean start"
            className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
