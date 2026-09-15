import React from 'react';
import { User, Stethoscope, Building2, Leaf, TrendingUp, Heart, Network } from 'lucide-react';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
            Multidimensional ROI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 font-['Outfit']">
            Impact Across the Healthcare Triad
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Measurable social, economic, environmental, and systemic benefits for patients, physicians, and health facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Patient Card */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                For the Patient
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
                Inclusive, dignified, and multilingual access
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-teal-700 dark:text-teal-400 block mb-1">Social Impact</span>
                  Voice-driven intake empowers illiterate and rural attendees; zero linguistic intimidation.
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-teal-700 dark:text-teal-400 block mb-1">Economic Impact</span>
                  Registration and triage wait times slashed from 60+ mins down to 3–5 minutes.
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-teal-700 dark:text-teal-400 block mb-1">Systemic Impact</span>
                  Longitudinal history securely follows the patient across any ABDM-empanelled hospital.
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
              <span>Wait Reduction</span>
              <span className="text-base">~65%</span>
            </div>
          </div>

          {/* Doctor Card */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                For the Doctor
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
                Clinical decision time restored; clerical burden eliminated
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-blue-700 dark:text-blue-400 block mb-1">Social Impact</span>
                  Reduces doctor burnout from mechanical form-filling; enables genuine empathy and listening.
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-blue-700 dark:text-blue-400 block mb-1">Economic Impact</span>
                  Reallocates 35–45% of consultation time towards thorough examination and shared decision-making.
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-blue-700 dark:text-blue-400 block mb-1">Systemic Impact</span>
                  Clean, structured FHIR R4 records generated automatically upon clinician sign-off.
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>Time Saved / Patient</span>
              <span className="text-base">1.5 – 2.0 mins</span>
            </div>
          </div>

          {/* Hospital Card */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                For the Hospital
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
                Throughput optimization and DHIS cash incentives
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-purple-700 dark:text-purple-400 block mb-1">Social Impact</span>
                  Decongests registration lobbies, prevents patient altercations, and catches red flags early.
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-purple-700 dark:text-purple-400 block mb-1">Economic Impact</span>
                  Earns ₹5/OPD and ₹10/record exchange under National Health Authority DHIS Corrigendum 7.
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <span className="font-bold text-purple-700 dark:text-purple-400 block mb-1">Environmental Impact</span>
                  Eliminates tens of thousands of paper registration slips and duplicate file folders.
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400">
              <span>DHIS Revenue</span>
              <span className="text-base">₹5 - ₹10 / encounter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
