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
    { text: 'Overcrowded OPD waiting areas with 45–90 min queues', icon: <Clock className="w-4 h-4 text-rose-500" /> },
    { text: 'Manual clerical registration consuming 60% of visit time', icon: <FileSpreadsheet className="w-4 h-4 text-rose-500" /> },
    { text: 'Repetitive verbal history-taking at every new counter', icon: <Repeat className="w-4 h-4 text-rose-500" /> },
    { text: 'Physical paper prescriptions lost or damaged across visits', icon: <FileWarning className="w-4 h-4 text-rose-500" /> },
    { text: 'Severe language barriers and low digital health literacy', icon: <Languages className="w-4 h-4 text-rose-500" /> },
    { text: 'Physician burnout from manual EHR typing & documentation', icon: <XCircle className="w-4 h-4 text-rose-500" /> }
  ];

  const solutions = [
    { text: 'Instant QR Scan & Share check-in using ABHA or Guest mode', icon: <Zap className="w-4 h-4 text-emerald-500" /> },
    { text: 'Entropy-minimized adaptive DAG questions via voice or touch', icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
    { text: 'TrOCR prescription extraction with mandatory human verification', icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
    { text: 'Longitudinal timeline linking past laboratory & clinical events', icon: <Network className="w-4 h-4 text-emerald-500" /> },
    { text: 'Multilingual speech AI (Bhashini/IndicWav2Vec) in 6 languages', icon: <Languages className="w-4 h-4 text-emerald-500" /> },
    { text: 'Pre-consultation SOAP summary with clickable source provenance', icon: <Stethoscope className="w-4 h-4 text-emerald-500" /> }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
            Clinical Paradigm Shift
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1 font-['Outfit']">
            Solving the OPD Documentation Bottleneck
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            In typical Indian high-volume outpatient clinics, doctors spend just 2.5 minutes per patient — 60% of which is wasted on manual clerical data gathering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* THE PROBLEM CARD */}
          <div className="p-6 sm:p-8 bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-3xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-rose-600 uppercase tracking-widest">
                  THE CURRENT REALITY
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300">
                  Fragmented & Slow
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                More Waiting → Less Doctor Time
              </h3>
              <ul className="space-y-3">
                {problems.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-0.5 shrink-0">{prob.icon}</span>
                    <span>{prob.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-200/60 dark:border-rose-900/40 text-xs font-medium text-rose-800 dark:text-rose-300">
              Outcome: Patient frustration, clerical errors, and delayed clinical care.
            </div>
          </div>

          {/* THE SOLUTION CARD */}
          <div className="p-6 sm:p-8 bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/40 rounded-3xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-teal-600 uppercase tracking-widest">
                  THE MEDIKOISK ADVANTAGE
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300">
                  Connected & Verified
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Structured History Before Consultation
              </h3>
              <ul className="space-y-3">
                {solutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-0.5 shrink-0">{sol.icon}</span>
                    <span>{sol.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-teal-200/60 dark:border-teal-900/40 text-xs font-medium text-teal-800 dark:text-teal-300">
              Outcome: 30–45% history-taking time saved for examination and decision-making.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
