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
  const { setRole, setPatientStep, t } = useApp();

  const handleStartPatient = () => {
    setRole('patient');
    setPatientStep('hospital_qr');
  };

  const handleViewDoctor = () => {
    setRole('doctor');
  };

  return (
    <section className="relative overflow-hidden pt-14 pb-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-[#0a0e1a] dark:via-[#0d1527] dark:to-[#080d1a] border-b border-slate-200/60 dark:border-slate-800/80 transition-colors">
      {/* Decorative Frozen-Light Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-sky-500/5 dark:from-teal-500/15 dark:via-cyan-500/15 dark:to-sky-500/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 flex items-center gap-1.5 backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5" />
            {t.heroBadge}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 flex items-center gap-1.5 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t.tagFhirReady}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 flex items-center gap-1.5 backdrop-blur-md">
            <Lock className="w-3.5 h-3.5" />
            {t.tagDpdpCompliant}
          </span>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] font-display">
            {t.heroTitle1} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 dark:from-teal-400 dark:via-cyan-300 dark:to-sky-400 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={handleStartPatient}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 font-bold rounded-2xl shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer"
          >
            <span>{t.beginIntakeBtn}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
          
          <button
            onClick={handleViewDoctor}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-100 font-semibold rounded-2xl border border-slate-300 dark:border-slate-700/80 shadow-md flex items-center justify-center gap-2 transition-colors text-sm backdrop-blur-md cursor-pointer"
          >
            <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>{t.accessClinicianBtn}</span>
          </button>
        </div>

        {/* Workflow Chain Visualizer (Stitch Glacier Glassmorphism) */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-teal-500/15 shadow-xl">
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                End-to-End Clinical Flow
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                Streamlined Hospital Case-Preparation Workflow
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
              {[
                { step: '01', title: 'Hospital QR', desc: 'ABDM Scan & Share or Guest', icon: <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400" /> },
                { step: '02', title: 'Adaptive Intake', desc: 'Entropy DAG via Voice / Touch', icon: <Mic className="w-5 h-5 text-sky-600 dark:text-sky-400" /> },
                { step: '03', title: 'Document OCR', desc: 'TrOCR & BioBERT Extraction', icon: <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" /> },
                { step: '04', title: 'Patient Verify', desc: 'Conf < 95% Medication Check', icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> },
                { step: '05', title: 'Queue Token', desc: 'Live tracker with Room Number', icon: <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" /> },
                { step: '06', title: 'Doctor Review', desc: 'SOAP Note with Clickable Provenance', icon: <Stethoscope className="w-5 h-5 text-teal-600 dark:text-teal-400" /> }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-3.5 bg-slate-50/80 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-teal-500/40 flex flex-col items-center text-center group transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800/80 flex items-center justify-center shadow-sm mb-2 group-hover:scale-105 transition-transform border border-slate-200 dark:border-slate-700/50">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    STEP {item.step}
                  </span>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
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
