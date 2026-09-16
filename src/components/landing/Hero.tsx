import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  Stethoscope, 
  Sparkles, 
  Mic, 
  FileText, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Building2, 
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';
import { Badge } from '../common/Badge';

export const Hero: React.FC = () => {
  const { setRole, setPatientStep } = useApp();

  const handleStartPatient = () => {
    setRole('patient');
    setPatientStep('hospital_qr');
  };

  const handleViewDoctor = () => {
    setRole('doctor');
  };

  return (
    <section className="relative overflow-hidden pt-14 pb-20 bg-gradient-to-b from-[#0a0e1a] via-[#0d1527] to-[#080d1a]">
      {/* Decorative Stitch Frozen-Light Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-teal-500/15 via-cyan-500/15 to-sky-500/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 flex items-center gap-1.5 backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5" />
            Hospital Enterprise Edition
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-300 border border-sky-500/20 flex items-center gap-1.5 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            ABDM M1–M4 & NRCeS FHIR R4 Ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1.5 backdrop-blur-md">
            <Lock className="w-3.5 h-3.5" />
            DPDP Act 2023 Consent First
          </span>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-display">
            From Patient Input to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              Doctor-Ready Clinical Case.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            AI-assisted adaptive patient case-taking for faster, connected, and more inclusive healthcare. 
            Reduces OPD queues and physician clerical fatigue while keeping clinicians in full control.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={handleStartPatient}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 font-bold rounded-2xl shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            <span>Begin Patient Intake</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
          
          <button
            onClick={handleViewDoctor}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-100 font-semibold rounded-2xl border border-slate-700/80 shadow-sm flex items-center justify-center gap-2 transition-colors text-sm backdrop-blur-md"
          >
            <Stethoscope className="w-4 h-4 text-teal-400" />
            <span>Access Clinician Workstation</span>
          </button>
        </div>

        {/* Workflow Chain Visualizer (Stitch Glacier Glassmorphism) */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 border border-teal-500/15">
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">
                End-to-End Clinical Flow
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Streamlined Hospital Case-Preparation Workflow
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
              {[
                { step: '01', title: 'Hospital QR', desc: 'ABDM Scan & Share or Guest', icon: <Activity className="w-5 h-5 text-teal-400" /> },
                { step: '02', title: 'Adaptive Intake', desc: 'Entropy DAG via Voice / Touch', icon: <Mic className="w-5 h-5 text-sky-400" /> },
                { step: '03', title: 'Document OCR', desc: 'TrOCR & BioBERT Extraction', icon: <FileText className="w-5 h-5 text-purple-400" /> },
                { step: '04', title: 'Patient Verify', desc: 'Conf &lt;95% Medication Check', icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> },
                { step: '05', title: 'Queue Token', desc: 'Live tracker with Room Number', icon: <Clock className="w-5 h-5 text-amber-400" /> },
                { step: '06', title: 'Doctor Review', desc: 'SOAP Note with Clickable Provenance', icon: <Stethoscope className="w-5 h-5 text-teal-400" /> }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-3.5 bg-slate-900/50 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 flex flex-col items-center text-center group transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center shadow-sm mb-2 group-hover:scale-105 transition-transform border border-slate-700/50">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-teal-500/80 uppercase tracking-wider">
                    STEP {item.step}
                  </span>
                  <h4 className="text-xs font-bold text-white mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
