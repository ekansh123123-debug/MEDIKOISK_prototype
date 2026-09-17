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
  Stethoscope 
} from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const problems = [
    { text: 'Overcrowded OPD waiting areas with 45–90 min queues', icon: <Clock className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Manual clerical registration consuming 60% of visit time', icon: <FileSpreadsheet className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Repetitive verbal history-taking at every hospital counter', icon: <Repeat className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Physical paper prescriptions lost or damaged across visits', icon: <FileWarning className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Severe vernacular language barriers in metropolitan hospitals', icon: <Languages className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Physician burnout from manual EHR typing during consultations', icon: <XCircle className="w-4 h-4 text-rose-500" aria-hidden="true" /> }
  ];

  const solutions = [
    { text: 'Instant QR Scan & Share check-in using ABHA or Guest mode', icon: <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'Entropy-weighted adaptive DAG inquiry via voice or touch', icon: <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'TrOCR prescription extraction with human-in-the-loop review', icon: <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'Longitudinal timeline linking past laboratory and clinical events', icon: <Network className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'Multilingual speech AI (Project Bhashini) in 6 Indian languages', icon: <Languages className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'Pre-consultation SOAP summary with clickable source provenance', icon: <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#080d1a] border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
            Solving the High-Volume OPD Bottleneck
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
            In typical Indian high-volume outpatient clinics, doctors spend just <span className="font-mono tabular-nums font-semibold text-slate-800 dark:text-slate-200">2.5</span> minutes per patient — <span className="font-mono tabular-nums font-semibold text-slate-800 dark:text-slate-200">60%</span> of which is consumed by clerical data entry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* THE PROBLEM CARD */}
          <div className="p-6 sm:p-7 bg-slate-50 dark:bg-[#0d1527] border border-rose-200 dark:border-rose-900/40 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider font-mono">
                  Legacy Reality
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300">
                  Fragmented & High Latency
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                Administrative Load Displaces Clinical Care
              </h3>
              <ul className="space-y-3">
                {problems.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-0.5 shrink-0 p-1 rounded-lg bg-rose-100 dark:bg-rose-500/15">{prob.icon}</span>
                    <span className="leading-snug">{prob.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-200 dark:border-rose-900/40 text-xs font-medium text-rose-700 dark:text-rose-300 flex items-center justify-between">
              <span>Impact: Diagnostic fatigue and rushed prescriptions</span>
              <span className="font-bold font-mono">Status Quo</span>
            </div>
          </div>

          {/* THE SOLUTION CARD */}
          <div className="p-6 sm:p-7 bg-slate-50 dark:bg-[#0d1527] border border-teal-200 dark:border-teal-500/30 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider font-mono">
                  MEDIKOISK Architecture
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-100 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-teal-300">
                  Automated & Clinically Verified
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                Structured Pre-Encounter Preparation
              </h3>
              <ul className="space-y-3">
                {solutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <span className="mt-0.5 shrink-0 p-1 rounded-lg bg-teal-100 dark:bg-teal-500/15">{sol.icon}</span>
                    <span className="leading-snug">{sol.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-teal-200 dark:border-teal-500/30 text-xs font-medium text-teal-700 dark:text-teal-300 flex items-center justify-between">
              <span>Result: <span className="font-mono tabular-nums font-semibold">35–45%</span> consultation time returned to physical examination</span>
              <span className="font-bold font-mono">Clinical Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
