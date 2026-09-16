import React from 'react';
import { User, Stethoscope, Building2, Leaf, TrendingUp, Heart, Network } from 'lucide-react';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#080d1a] border-t border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-teal-700 dark:text-teal-400 tracking-wider uppercase px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-500/20">
            Multidimensional ROI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 font-['Outfit'] tracking-tight">
            Impact Across the Healthcare Triad
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Quantifiable social, economic, environmental, and systemic returns across patients, clinical staff, and hospital administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Patient Card */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-xl hover:border-teal-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-5 group-hover:scale-105 transition-transform">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                For the Patient
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
                Inclusive, dignified, and multilingual hospital intake
              </p>

              <div className="space-y-3.5 text-xs">
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-teal-600 dark:text-teal-400 block mb-1 text-[11px] uppercase tracking-wider">Social Dignity</span>
                  <span className="text-slate-600 dark:text-slate-300">Voice-driven intake empowers illiterate and rural attendees; eliminates linguistic intimidation.</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-teal-600 dark:text-teal-400 block mb-1 text-[11px] uppercase tracking-wider">Queue Latency</span>
                  <span className="text-slate-600 dark:text-slate-300">Registration and initial intake wait times reduced from 60+ mins down to 3–5 minutes.</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-teal-600 dark:text-teal-400 block mb-1 text-[11px] uppercase tracking-wider">Continuity of Care</span>
                  <span className="text-slate-600 dark:text-slate-300">Longitudinal health history securely travels with the patient across any ABDM hospital.</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Wait Time Reduction</span>
              <span className="text-lg font-black text-teal-600 dark:text-teal-300">~65%</span>
            </div>
          </div>

          {/* Doctor Card */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-5 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                For the Doctor
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
                Clinical decision time restored; clerical burden eliminated
              </p>

              <div className="space-y-3.5 text-xs">
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 block mb-1 text-[11px] uppercase tracking-wider">Reduced Burnout</span>
                  <span className="text-slate-600 dark:text-slate-300">Eliminates repetitive manual EHR typing; restores eye contact and genuine listening.</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 block mb-1 text-[11px] uppercase tracking-wider">Productivity</span>
                  <span className="text-slate-600 dark:text-slate-300">Reallocates 35–45% of consultation time toward physical examination and differential diagnosis.</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 block mb-1 text-[11px] uppercase tracking-wider">Standardization</span>
                  <span className="text-slate-600 dark:text-slate-300">Clean, structured FHIR R4 records generated automatically upon clinician electronic signature.</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-600 dark:text-cyan-400">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Time Saved / Patient</span>
              <span className="text-lg font-black text-cyan-600 dark:text-cyan-300">1.5 – 2.0 mins</span>
            </div>
          </div>

          {/* Hospital Card */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-xl hover:border-indigo-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5 group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                For the Hospital
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
                Throughput optimization and DHIS cash incentives
              </p>

              <div className="space-y-3.5 text-xs">
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1 text-[11px] uppercase tracking-wider">Facility Throughput</span>
                  <span className="text-slate-600 dark:text-slate-300">Decongests registration lobbies, prevents patient altercations, and flags emergencies early.</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1 text-[11px] uppercase tracking-wider">Financial ROI</span>
                  <span className="text-slate-600 dark:text-slate-300">Earns ₹5/OPD and ₹10/record exchange under National Health Authority DHIS Corrigendum 7.</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-950/60 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 block mb-1 text-[11px] uppercase tracking-wider">Paperless Facility</span>
                  <span className="text-slate-600 dark:text-slate-300">Eliminates tens of thousands of paper registration slips, folder jackets, and lost physical files.</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <span className="text-slate-500 dark:text-slate-400 font-medium">DHIS Incentive Revenue</span>
              <span className="text-lg font-black text-indigo-600 dark:text-indigo-300">₹5 – ₹10 / encounter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
