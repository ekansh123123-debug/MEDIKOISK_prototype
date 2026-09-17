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
  const { loadDemoScenario, setRole } = useApp();

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#080d1a] border-b border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
            Engineered for Clinical Governance, Not Generic Chat
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
            Generic LLMs hallucinate diagnoses and create unacceptable medical malpractice liability. MEDIKOISK combines deterministic safety rules, verified OCR, and NRCeS FHIR R4 interoperability.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Bento Tile 1: (Hero Tile - Col Span 7) Deterministic Emergency Engine */}
          <div className="md:col-span-7 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-rose-50/70 via-white to-slate-50 dark:from-rose-950/20 dark:via-[#0d1527] dark:to-[#090f1e] border border-rose-200 dark:border-rose-900/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-500/20">
                  <ShieldAlert className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-500/25">
                  Deterministic Hard Stop
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                Non-Probabilistic Emergency Safety Engine
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Medical emergencies must never depend on probabilistic AI. When symptoms indicate acute myocardial infarction, ischemic stroke, or surgical abdomen, intake instantly freezes, alerts hospital casualty, and issues an override token at queue position 0.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200 dark:border-rose-900/40 flex items-center justify-between">
              <span className="text-xs font-semibold text-rose-700 dark:text-rose-300">
                0% hallucination risk on cardiac & neuro emergencies
              </span>
              <button
                type="button"
                onClick={() => loadDemoScenario('emergency')}
                className="text-xs font-bold text-rose-700 dark:text-rose-300 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Test Alert</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Bento Tile 2: (Col Span 5) ABDM Milestones M1 to M4 */}
          <div className="md:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-teal-50/70 via-white to-slate-50 dark:from-teal-950/20 dark:via-[#0d1527] dark:to-[#090f1e] border border-teal-200 dark:border-teal-500/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-500/20">
                  <Share2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono font-bold text-teal-700 dark:text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/25">
                  ABDM Certified
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                Full-Spectrum ABDM M1–M4
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Scan & Share ABHA token generation (M1), FHIR Document publishing (M2), longitudinal consent fetch (M3), and NHCX cashless claims pre-authorization (M4) with DHIS Corrigendum 7 financial incentive tracking.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-200 dark:border-teal-500/30 flex items-center justify-between text-xs font-mono text-teal-700 dark:text-teal-300 font-semibold">
              <span>NRCeS Profile Validated</span>
              <span>₹5 / OPD Consultation</span>
            </div>
          </div>

          {/* Bento Tile 3: (Col Span 4) Entropy-Minimization DAG */}
          <div className="md:col-span-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center border border-sky-500/20 mb-3">
                <GitBranch className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                Adaptive Questioning DAG
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Shannon entropy-weighted decision trees select the single most clinically discriminating question next, reducing intake questions from 30 down to 4–6.
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-sky-600 dark:text-sky-400 font-semibold">
              4–6 focused questions vs 30 static fields
            </div>
          </div>

          {/* Bento Tile 4: (Col Span 4) TrOCR Prescription Scanner */}
          <div className="md:col-span-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 mb-3">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                Patient-Verified TrOCR
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Handwritten prescriptions are recognized via Transformer OCR. Medications with confidence &lt;95% require mandatory patient tactile verification before clinician viewing.
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
              Human-in-the-loop safety guarantee
            </div>
          </div>

          {/* Bento Tile 5: (Col Span 4) AYUSH Dual-Coding */}
          <div className="md:col-span-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20 mb-3">
                <Leaf className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                AYUSH Dual-Coding
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Bridges conventional biomedicine and Indian traditional systems. Maps complaints simultaneously to ICD-11 MMS, NAMASTE Portal, and ICD-11 Traditional Medicine (TM2).
              </p>
            </div>
            <div className="mt-4 text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
              ICD-11 + NAMASTE + TM2 Unified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
