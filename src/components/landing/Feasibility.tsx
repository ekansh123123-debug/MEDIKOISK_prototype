import React from 'react';
import { ShieldCheck, Check, AlertTriangle, Coins, Database, Wrench } from 'lucide-react';
import { Badge } from '../common/Badge';

export const Feasibility: React.FC = () => {
  const challenges = [
    {
      challenge: 'Weak mobile network connectivity in public hospital basements',
      mitigation: 'Offline-first PWA architecture with local IndexedDB/localStorage queuing. Syncs automatically upon hospital Wi-Fi reconnection.',
      status: 'Engineered'
    },
    {
      challenge: 'Heavy ambient OPD noise (65–85 dB) & diverse regional accents',
      mitigation: 'Multi-stage DSP filtering (Wiener noise suppression + VAD) integrated with Project Bhashini IndicWav2Vec self-supervised phonetic models.',
      status: 'Engineered'
    },
    {
      challenge: 'Reluctance to share OTPs or medical details due to fraud anxiety',
      mitigation: 'Transparent audio-guided consent in patient’s native language under DPDP Act 2023, accompanied by hospital Arogya Mitra physical facilitation.',
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
    <section className="py-24 bg-slate-50 dark:bg-[#080d1a] border-t border-slate-200 dark:border-slate-800/80 relative overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Feasibility Statement */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-850 text-white dark:from-teal-950/60 dark:via-slate-900/80 dark:to-slate-900/90 rounded-3xl p-8 sm:p-12 border border-teal-500/30 backdrop-blur-xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 border border-teal-500/30 text-teal-300">
              Technical Feasibility & Integration Thesis
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] leading-tight">
              &ldquo;All core technologies already exist. <br />
              <span className="text-teal-400">We are integrating, not inventing.</span>&rdquo;
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              India has built world-class digital health infrastructure: <strong>ABDM federated registries</strong>, <strong>Project Bhashini sovereign speech models</strong>, <strong>NRCeS FHIR R4 clinical profiles</strong>, and the <strong>Digital Health Incentive Scheme (DHIS)</strong>. MEDIKOISK connects these existing national assets into an intuitive, high-speed clinical intake platform.
            </p>
          </div>
        </div>

        {/* DHIS Corrigendum 7 Economic Model */}
        <div className="mb-16 bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-teal-700 dark:text-teal-400 tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-500/20">
                National Health Authority Financial Model
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 font-['Outfit']">
                Self-Sustaining via Digital Health Incentive Scheme (DHIS)
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
              <Coins className="w-3.5 h-3.5" />
              <span>Corrigendum 7 Guidelines</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-teal-200 dark:border-teal-500/20">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Base Eligibility</span>
              <div className="text-2xl font-black text-teal-600 dark:text-teal-400 mt-1">100 / mo</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Qualifying digital ABHA transactions to unlock monthly incentives.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-cyan-200 dark:border-cyan-500/20">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">OPD Intake & Rx (M2)</span>
              <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 mt-1">₹5.00</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Per digital outpatient consultation or prescription record created.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-indigo-200 dark:border-indigo-500/20">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Record Exchange (M3)</span>
              <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-1">₹10.00</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Per consent-based longitudinal health record fetch & decryption.
              </p>
            </div>

            <div className="p-5 bg-slate-50 dark:bg-slate-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-500/20">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Software Vendor Tranche</span>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">₹250+</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Direct vendor payments per transaction milestone tier.
              </p>
            </div>
          </div>
        </div>

        {/* Challenges & Mitigations Table */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-teal-700 dark:text-teal-400 tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-500/20">
              Field Realities
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2 font-['Outfit']">
              Operational Challenges & Architectural Mitigations
            </h3>
          </div>

          <div className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-md dark:shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Field Barrier / Challenge</th>
                    <th className="px-6 py-4">Architectural Mitigation</th>
                    <th className="px-6 py-4 text-right">Engineering Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60 font-normal">
                  {challenges.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-850/40 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white max-w-xs">
                        {c.challenge}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
                        {c.mitigation}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-teal-300">
                          <Check className="w-3 h-3 text-teal-600 dark:text-teal-400" />
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
      </div>
    </section>
  );
};
