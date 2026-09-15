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
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Feasibility Statement */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <Badge variant="teal" className="bg-teal-800 text-teal-200 border-teal-600">
              Technical Feasibility & Integration Thesis
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] leading-tight">
              "All core technologies already exist. <br />
              <span className="text-teal-400">We are integrating, not inventing.</span>"
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              India has already built world-class digital health rails: <strong>ABDM federated registries</strong>, <strong>Project Bhashini sovereign speech models</strong>, <strong>NRCeS FHIR R4 clinical profiles</strong>, and the <strong>Digital Health Incentive Scheme (DHIS)</strong>. MEDIKOISK harmonizes these pre-existing national assets into an intuitive, frictionless intake platform.
            </p>
          </div>
        </div>

        {/* DHIS Corrigendum 7 Economic Model */}
        <div className="mb-16 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                National Health Authority Financial Model
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Self-Sustaining via Digital Health Incentive Scheme (DHIS)
              </h3>
            </div>
            <Badge variant="green" icon={<Coins className="w-3.5 h-3.5" />}>
              Corrigendum 7 Guidelines
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-teal-50/60 dark:bg-teal-950/30 rounded-2xl border border-teal-200 dark:border-teal-900">
              <span className="text-xs text-slate-500 font-medium">Base Eligibility</span>
              <div className="text-2xl font-black text-teal-700 dark:text-teal-400 mt-1">100 / mo</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                Qualifying digital ABHA transactions to unlock monthly incentives.
              </p>
            </div>

            <div className="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-2xl border border-blue-200 dark:border-blue-900">
              <span className="text-xs text-slate-500 font-medium">OPD Intake & Rx (M2)</span>
              <div className="text-2xl font-black text-blue-700 dark:text-blue-400 mt-1">₹5.00</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                Per digital outpatient consultation or prescription record created.
              </p>
            </div>

            <div className="p-4 bg-purple-50/60 dark:bg-purple-950/30 rounded-2xl border border-purple-200 dark:border-purple-900">
              <span className="text-xs text-slate-500 font-medium">Record Exchange (M3)</span>
              <div className="text-2xl font-black text-purple-700 dark:text-purple-400 mt-1">₹10.00</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                Per consent-based longitudinal health record fetch & decryption.
              </p>
            </div>

            <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-900">
              <span className="text-xs text-slate-500 font-medium">Software Vendor Tranche</span>
              <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1">₹250+</div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                Direct vendor payments per transaction milestone tier.
              </p>
            </div>
          </div>
        </div>

        {/* Challenges & Mitigations Table */}
        <div className="space-y-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
              Field Realities
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Field Challenges & Architectural Mitigations
            </h3>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Field Barrier / Challenge</th>
                    <th className="px-6 py-4">Architectural Mitigation</th>
                    <th className="px-6 py-4 text-right">Engineering Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {challenges.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white max-w-xs">
                        {c.challenge}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
                        {c.mitigation}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Badge variant="teal" icon={<Check className="w-3 h-3" />}>
                          {c.status}
                        </Badge>
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
