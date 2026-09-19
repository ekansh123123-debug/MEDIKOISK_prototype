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
import { useApp } from '../../context/AppContext';

export const ProblemSolution: React.FC = () => {
  const { t } = useApp();

  const problems = [
    { text: 'Overcrowded waiting halls with 45–90 minute lines', icon: <Clock className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Filling out slow paper forms at crowded reception desks', icon: <FileSpreadsheet className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Repeating your medical story to multiple different staff members', icon: <Repeat className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Old paper prescriptions get lost or torn between doctor visits', icon: <FileWarning className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Language barriers when hospital staff don\'t speak your dialect', icon: <Languages className="w-4 h-4 text-rose-500" aria-hidden="true" /> },
    { text: 'Doctors spend precious visit time typing on computers instead of talking to you', icon: <XCircle className="w-4 h-4 text-rose-500" aria-hidden="true" /> }
  ];

  const solutions = [
    { text: 'Scan reception QR or enter your phone number for instant check-in', icon: <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'Quick 4–6 smart questions that adapt to what hurts, via voice or touch', icon: <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'Snap a photo of past prescriptions with easy 1-tap medicine confirmation', icon: <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'All past clinic visits and medicines remembered in one simple view', icon: <Network className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'Speak and listen comfortably in 6 Indian languages with voice read-aloud', icon: <Languages className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
    { text: 'Doctor receives an organized summary before you enter the consultation room', icon: <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> }
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-white dark:bg-[#0c1017] border-y border-slate-200 dark:border-white/[0.07] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
            {t.probSolTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed text-balance">
            {t.probSolSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* THE PROBLEM CARD */}
          <div className="p-6 sm:p-8 bg-slate-50/90 dark:bg-[#111622] border border-rose-200/80 dark:border-rose-500/25 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider font-mono">
                  {t.probLegacyBadge}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300">
                  {t.probLegacyTag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5 font-display tracking-tight">
                {t.probLegacyTitle}
              </h3>
              <ul className="space-y-2.5">
                {problems.map((prob, i) => (
                  <li key={i} className="p-3 rounded-xl bg-white/90 dark:bg-[#161d2b] border border-rose-100 dark:border-rose-950/40 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-2xs">
                    <span className="mt-0.5 shrink-0 p-1 rounded-lg bg-rose-100 dark:bg-rose-500/15">{prob.icon}</span>
                    <span className="leading-snug">{prob.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-rose-200/80 dark:border-rose-500/20 text-xs font-medium text-rose-700 dark:text-rose-300 flex items-center justify-between">
              <span>{t.probLegacyFooter}</span>
              <span className="font-bold font-mono uppercase tracking-wider">Status Quo</span>
            </div>
          </div>

          {/* THE SOLUTION CARD */}
          <div className="p-6 sm:p-8 bg-slate-50/90 dark:bg-[#111622] border border-teal-200/80 dark:border-teal-500/30 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider font-mono">
                  {t.solArchBadge}
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-teal-100 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-teal-300">
                  {t.solArchTag}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5 font-display tracking-tight">
                {t.solArchTitle}
              </h3>
              <ul className="space-y-2.5">
                {solutions.map((sol, i) => (
                  <li key={i} className="p-3 rounded-xl bg-white/90 dark:bg-[#161d2b] border border-teal-100 dark:border-teal-950/40 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 shadow-2xs">
                    <span className="mt-0.5 shrink-0 p-1 rounded-lg bg-teal-100 dark:bg-teal-500/15">{sol.icon}</span>
                    <span className="leading-snug">{sol.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-teal-200/80 dark:border-teal-500/20 text-xs font-medium text-teal-700 dark:text-teal-300 flex items-center justify-between">
              <span>{t.solArchFooter}</span>
              <span className="font-bold font-mono uppercase tracking-wider">Clinical Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
