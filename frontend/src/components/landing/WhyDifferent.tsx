import React from 'react';
import { 
  GitBranch, 
  Mic2, 
  Leaf, 
  FileCheck2, 
  Share2, 
  ShieldAlert,
  CheckCircle2,
  Lock,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WhyDifferent: React.FC = () => {
  const { loadDemoScenario, setRole, t } = useApp();

  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-slate-50 dark:bg-[#0c1017] border-b border-slate-200 dark:border-white/[0.07] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
            {t.whyDiffTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed text-balance">
            {t.whyDiffSub}
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Bento Tile 1: (Hero Tile - Col Span 7) Emergency Safety Engine */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-rose-50/70 via-white to-slate-50 dark:from-rose-950/20 dark:via-[#111622] dark:to-[#111622] border border-rose-200/90 dark:border-rose-500/25 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20">
                  <ShieldAlert className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-500/10 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-500/25">
                  Emergency First
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                Instant Emergency Safety Alert
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                When symptoms indicate severe danger (such as sudden chest pain or stroke signs), the system immediately skips questions, sounds an alert for nursing staff, and places the patient at Token #0.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200 dark:border-rose-500/20 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-rose-700 dark:text-rose-300">
                Immediate response for cardiac and emergency warning signs
              </span>
              <button
                type="button"
                onClick={() => loadDemoScenario('emergency')}
                className="text-xs font-bold text-rose-700 dark:text-rose-300 hover:underline flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded px-2 py-1 cursor-pointer shrink-0"
                aria-label="Trigger simulated emergency safety alert demo"
              >
                <span>Test Alert</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Bento Tile 2: (Col Span 5) ABHA Health Card */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-50/70 via-white to-slate-50 dark:from-teal-950/20 dark:via-[#111622] dark:to-[#111622] border border-teal-200/90 dark:border-teal-500/30 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-500/20">
                  <Share2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono font-bold text-teal-700 dark:text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/25">
                  Official Health Card
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                Seamless ABHA Health Card Link
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                Connect your ABHA card or mobile number in seconds to securely retrieve your past hospital visits, prescriptions, and lab tests without carrying paper folders.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-teal-200 dark:border-teal-500/20 flex items-center justify-between text-xs font-mono text-teal-700 dark:text-teal-300 font-semibold">
              <span>Verified & Private</span>
              <span>Paperless OPD</span>
            </div>
          </div>

          {/* Bento Tile 3: (Col Span 4) Smart Questions */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-500/20 mb-4">
                <GitBranch className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                Smart 4 to 6 Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Instead of filling out 30 confusing paperwork fields, the system asks only 4 to 6 questions relevant to what hurts.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/[0.06] text-xs font-mono tabular-nums text-sky-600 dark:text-sky-400 font-semibold">
              Only 4–6 questions vs 30 paper fields
            </div>
          </div>

          {/* Bento Tile 4: (Col Span 4) Prescription Scanner */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 mb-4">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                Prescription Photo Scanner
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Snap a photo of past doctor notes. The system reads medicine names and asks you to confirm them with 1 tap so nothing is missed.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/[0.06] text-xs font-mono tabular-nums text-emerald-600 dark:text-emerald-400 font-semibold">
              You review and confirm every medicine
            </div>
          </div>

          {/* Bento Tile 5: (Col Span 4) Traditional Remedies */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20 mb-4">
                <Leaf className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display">
                Traditional Remedies & Habits
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Tell your doctor about home remedies, ayurvedic herbs, or daily health habits alongside your medical symptoms for complete care.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/[0.06] text-xs font-mono tabular-nums text-amber-600 dark:text-amber-400 font-semibold">
              Holistic care for modern & traditional health
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
