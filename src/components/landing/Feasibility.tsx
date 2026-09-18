import React from 'react';
import { Check, Coins } from 'lucide-react';

export const Feasibility: React.FC = () => {
  const challenges = [
    {
      challenge: 'Weak mobile network connectivity in public hospital basements',
      mitigation: 'Offline-first PWA architecture with local IndexedDB/localStorage queuing. Syncs automatically upon hospital Wi-Fi reconnection.',
      status: 'Engineered'
    },
    {
      challenge: 'Heavy ambient OPD noise (65–85 dB) & diverse regional accents',
      mitigation: 'Multi-stage DSP filtering (Wiener noise suppression + VAD) integrated with Project Bhashini IndicConformer phonetic models.',
      status: 'Engineered'
    },
    {
      challenge: 'Reluctance to share OTPs or medical details due to fraud anxiety',
      mitigation: "Transparent audio-guided consent in patient's native language under DPDP Act 2023, accompanied by hospital Arogya Mitra assistance.",
      status: 'Engineered'
    },
    {
      challenge: 'Risk of AI hallucination or premature diagnostic anchoring',
      mitigation: 'Strict human-in-the-loop: Every assertion displays clickable source provenance. Doctors must verify and digitally sign before EHR commitment.',
      status: 'Engineered'
    },
    {
      challenge: 'Illegible handwritten prescription slips with atypical handwriting',
      mitigation: 'Hybrid TrOCR + BioBERT sequence modeling with mandatory confidence thresholding: Any drug with confidence <95% triggers patient verification.',
      status: 'Engineered'
    },
    {
      challenge: 'Emergency deterioration during unsupervised digital intake',
      mitigation: 'Deterministic rule engine (cardio, neuro, respiratory, obstetric) operates in parallel with AI. Bypasses questionnaire to trigger immediate Red alert.',
      status: 'Engineered'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-[#080d1a] border-t border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Feasibility Statement */}
        <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-slate-900 text-white rounded-2xl p-7 sm:p-10 border border-teal-500/30 shadow-xl mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/10 border border-teal-500/30 text-teal-300">
              Technical Feasibility & Integration Thesis
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold font-display leading-tight">
              Integrating Proven National Digital Health Infrastructure
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              India has established sovereign health protocols: <strong>ABDM federated registries</strong>, <strong>Project Bhashini speech models</strong>, <strong>NRCeS FHIR R4 clinical profiles</strong>, and the <strong>Digital Health Incentive Scheme (DHIS)</strong>. MEDIKOISK unites these national assets into a high-speed pre-encounter intake platform.
            </p>
          </div>
        </div>

        {/* DHIS Corrigendum 7 Economic Model */}
        <div className="mb-12 bg-white dark:bg-[#0d1527] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Self-Sustaining via Digital Health Incentive Scheme (DHIS)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                National Health Authority financial returns under Corrigendum 7 guidelines
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
              <Coins className="w-3.5 h-3.5" aria-hidden="true" />
              <span>NHA Corrigendum 7</span>
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Base Eligibility</span>
              <div className="text-xl font-mono tabular-nums font-black text-teal-600 dark:text-teal-400 mt-1">100 / mo</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Qualifying ABHA transactions to unlock monthly payouts.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">OPD Intake & Rx (M2)</span>
              <div className="text-xl font-mono tabular-nums font-black text-cyan-600 dark:text-cyan-400 mt-1">₹5.00</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Per digital outpatient consultation or prescription published.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Record Exchange (M3)</span>
              <div className="text-xl font-mono tabular-nums font-black text-indigo-600 dark:text-indigo-400 mt-1">₹10.00</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Per consent-based longitudinal health record fetch.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Vendor Tranche</span>
              <div className="text-xl font-mono tabular-nums font-black text-emerald-600 dark:text-emerald-400 mt-1">₹250+</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Direct vendor payments per transaction milestone tier.
              </p>
            </div>
          </div>
        </div>

        {/* Operational Challenges Table */}
        <div className="bg-white dark:bg-[#0d1527] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              Field Realities & Architectural Safeguards
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Engineering solutions for noise, connectivity, and literacy challenges in Indian public hospitals
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-950/80 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-5 py-3">Field Barrier</th>
                  <th className="px-5 py-3">Architectural Mitigation</th>
                  <th className="px-5 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-normal">
                {challenges.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-850/40 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-slate-900 dark:text-white max-w-xs">
                      {c.challenge}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
                      {c.mitigation}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300">
                        <Check className="w-3 h-3 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                        <span>{c.status}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
