import React from 'react';
import { User, Stethoscope, Building2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ImpactMetrics: React.FC = () => {
  const { t } = useApp();

  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-white dark:bg-[#0c1017] border-t border-slate-200 dark:border-white/[0.07] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight text-balance">
            {t.impactTitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed text-balance">
            {t.impactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Patient Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/90 dark:bg-[#111622] border border-slate-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-5">
                <User className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                For the Patient
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6 leading-relaxed">
                Inclusive, dignified, and multilingual hospital intake
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-teal-700 dark:text-teal-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">Social Dignity</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Voice-driven intake empowers non-literate and rural attendees; eliminates clerical intimidation.</span>
                </div>
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-teal-700 dark:text-teal-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">Queue Latency</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Registration and initial intake wait times reduced from <span className="font-mono tabular-nums font-semibold">60+</span> mins down to <span className="font-mono tabular-nums font-semibold">3–5</span> minutes.</span>
                </div>
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-teal-700 dark:text-teal-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">Continuity of Care</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Longitudinal health history securely travels with the patient across any ABDM hospital network.</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-bold text-teal-700 dark:text-teal-400">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Wait Time Reduction</span>
              <span className="text-xl font-mono tabular-nums font-black text-teal-700 dark:text-teal-300">~65%</span>
            </div>
          </div>

          {/* Doctor Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/90 dark:bg-[#111622] border border-slate-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-5">
                <Stethoscope className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                For the Clinician
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6 leading-relaxed">
                Clinical decision time restored; typing burden eliminated
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">Burnout Reduction</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Eliminates repetitive manual EHR typing; restores eye contact and genuine diagnostic listening.</span>
                </div>
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">Productivity</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Reallocates <span className="font-mono tabular-nums font-semibold">35–45%</span> of consultation time toward physical examination and differential diagnosis.</span>
                </div>
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">Standardization</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Clean, structured FHIR R4 records generated automatically upon clinician electronic signature.</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-bold text-cyan-700 dark:text-cyan-400">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Time Saved / Patient</span>
              <span className="text-xl font-mono tabular-nums font-black text-cyan-700 dark:text-cyan-300">1.5 – 2.0 mins</span>
            </div>
          </div>

          {/* Hospital Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/90 dark:bg-[#111622] border border-slate-200 dark:border-white/[0.08] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5">
                <Building2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                For the Hospital
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6 leading-relaxed">
                Throughput optimization and DHIS cash incentives
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">Facility Throughput</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Decongests registration lobbies, prevents patient altercations, and flags emergencies early.</span>
                </div>
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">DHIS Cash Incentives</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Earns <span className="font-mono tabular-nums font-semibold">₹5</span>/OPD and <span className="font-mono tabular-nums font-semibold">₹10</span>/record exchange under National Health Authority Corrigendum 7.</span>
                </div>
                <div className="p-3.5 sm:p-4 bg-white dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 block mb-1 uppercase text-[10px] tracking-wider font-mono">Paperless Operation</span>
                  <span className="text-slate-600 dark:text-slate-300 leading-relaxed">Eliminates tens of thousands of paper registration slips, folder jackets, and lost physical files.</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs font-bold text-indigo-700 dark:text-indigo-400">
              <span className="text-slate-500 dark:text-slate-400 font-medium">DHIS Incentive Revenue</span>
              <span className="text-xl font-mono tabular-nums font-black text-indigo-700 dark:text-indigo-300">₹5 – ₹10 / visit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
