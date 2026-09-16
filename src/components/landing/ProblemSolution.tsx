import React from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  Clock, 
  FileSpreadsheet, 
  Repeat, 
  FileWarning, 
  Languages, 
  Zap, 
  Network, 
  UserCheck, 
  Stethoscope 
} from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const problems = [
    { text: 'Overcrowded OPD waiting areas with 45–90 min queues', icon: <Clock className="w-4 h-4 text-rose-400" /> },
    { text: 'Manual clerical registration consuming 60% of visit time', icon: <FileSpreadsheet className="w-4 h-4 text-rose-400" /> },
    { text: 'Repetitive verbal history-taking at every counter', icon: <Repeat className="w-4 h-4 text-rose-400" /> },
    { text: 'Physical paper prescriptions lost or damaged across visits', icon: <FileWarning className="w-4 h-4 text-rose-400" /> },
    { text: 'Severe language barriers and low digital health literacy', icon: <Languages className="w-4 h-4 text-rose-400" /> },
    { text: 'Physician burnout from manual EHR typing & documentation', icon: <XCircle className="w-4 h-4 text-rose-400" /> }
  ];

  const solutions = [
    { text: 'Instant QR Scan & Share check-in using ABHA or Guest mode', icon: <Zap className="w-4 h-4 text-teal-400" /> },
    { text: 'Entropy-minimized adaptive DAG inquiry via voice or touch', icon: <CheckCircle2 className="w-4 h-4 text-teal-400" /> },
    { text: 'TrOCR prescription extraction with mandatory human verification', icon: <CheckCircle2 className="w-4 h-4 text-teal-400" /> },
    { text: 'Longitudinal timeline linking past laboratory & clinical events', icon: <Network className="w-4 h-4 text-teal-400" /> },
    { text: 'Multilingual speech AI (Project Bhashini) in 6 Indian languages', icon: <Languages className="w-4 h-4 text-teal-400" /> },
    { text: 'Pre-consultation SOAP summary with clickable source provenance', icon: <Stethoscope className="w-4 h-4 text-teal-400" /> }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#080d1a] border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal-700 dark:text-teal-400 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-500/20">
            Clinical Paradigm Shift
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 font-['Outfit'] tracking-tight">
            Solving the High-Volume OPD Bottleneck
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            In typical Indian high-volume outpatient clinics, doctors spend just 2.5 minutes per patient — 60% of which is consumed by repetitive clerical administrative intake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* THE PROBLEM CARD */}
          <div className="p-8 bg-gradient-to-b from-rose-50/70 to-slate-50 dark:from-rose-950/20 dark:to-slate-900/40 border border-rose-200 dark:border-rose-500/20 rounded-3xl flex flex-col justify-between backdrop-blur-xl shadow-lg hover:border-rose-400 dark:hover:border-rose-500/30 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-rose-600 dark:text-rose-400 uppercase tracking-widest">
                  Current Practice Reality
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300">
                  Fragmented & High Latency
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 font-['Outfit']">
                Waiting Time Displaces Clinical Care
              </h3>
              <ul className="space-y-3.5">
                {problems.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-0.5 shrink-0 p-1 rounded-lg bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20">{prob.icon}</span>
                    <span>{prob.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-rose-200 dark:border-rose-500/20 text-xs font-medium text-rose-700 dark:text-rose-300 flex items-center justify-between">
              <span>Impact: Diagnostic fatigue, patient friction, and delayed care</span>
              <span className="text-rose-600 dark:text-rose-400 font-bold">Status Quo</span>
            </div>
          </div>

          {/* THE SOLUTION CARD */}
          <div className="p-8 bg-gradient-to-b from-teal-50/70 to-slate-50 dark:from-teal-950/30 dark:to-slate-900/60 border border-teal-200 dark:border-teal-500/30 rounded-3xl flex flex-col justify-between backdrop-blur-xl shadow-lg hover:border-teal-400 dark:hover:border-teal-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-teal-700 dark:text-teal-400 uppercase tracking-widest">
                  MEDIKOISK Enterprise Architecture
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-teal-300">
                  Automated & Clinically Verified
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 font-['Outfit']">
                Structured Clinical Case Intake
              </h3>
              <ul className="space-y-3.5">
                {solutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm text-slate-700 dark:text-slate-200">
                    <span className="mt-0.5 shrink-0 p-1 rounded-lg bg-teal-100 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20">{sol.icon}</span>
                    <span>{sol.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-teal-200 dark:border-teal-500/20 text-xs font-medium text-teal-700 dark:text-teal-300 flex items-center justify-between">
              <span>Result: 35–45% consultation time reallocated to physician examination</span>
              <span className="text-teal-700 dark:text-teal-400 font-bold">Standard of Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
