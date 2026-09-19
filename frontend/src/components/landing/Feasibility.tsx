import React from 'react';
import { Check, Coins } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Feasibility: React.FC = () => {
  const { t } = useApp();

  const challenges = [
    {
      challenge: 'Weak mobile network or spotty Wi-Fi in hospital basements',
      mitigation: 'Works offline: Your answers are saved safely on your device (in Local Storage) and sync automatically when reconnected.',
      status: 'Ready'
    },
    {
      challenge: 'Noisy hospital waiting rooms and diverse regional accents',
      mitigation: 'Smart noise filtering so the microphone hears your voice clearly even in crowded hospital halls.',
      status: 'Ready'
    },
    {
      challenge: 'Hesitation or worry about digital privacy',
      mitigation: "Clear audio guidance in your own language explaining that your answers are private and never sold or shared.",
      status: 'Ready'
    },
    {
      challenge: 'Making sure doctor summaries are 100% accurate',
      mitigation: 'Human review first: Doctors review every note and can see exactly what the patient said before prescribing.',
      status: 'Ready'
    },
    {
      challenge: 'Hard-to-read handwritten doctor prescriptions',
      mitigation: 'Smart photo reader detects medicine names and asks you to tap "Confirm" so nothing is misread.',
      status: 'Ready'
    },
    {
      challenge: 'Patient feels worse while answering questions',
      mitigation: 'Instant emergency safety alert triggers immediately, directing the patient straight to hospital doctors.',
      status: 'Ready'
    }
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-slate-50 dark:bg-[#0c1017] border-t border-slate-200 dark:border-white/[0.07] relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Feasibility Statement */}
        <div className="bg-[#111622] text-white rounded-2xl p-7 sm:p-10 border border-white/[0.08] shadow-xl mb-12 sm:mb-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-3.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono">
              {t.feasBadge}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold font-display leading-tight tracking-tight text-balance">
              {t.feasTitle}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-balance">
              {t.feasDesc}
            </p>
          </div>
        </div>

        {/* DHIS Corrigendum 7 Economic Model */}
        <div className="mb-12 sm:mb-16 bg-white dark:bg-[#111622] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/[0.08] shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-white/[0.06]">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                Self-Sustaining via Digital Health Incentive Scheme (DHIS)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                National Health Authority financial returns under Corrigendum 7 guidelines
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-mono">
              <Coins className="w-3.5 h-3.5" aria-hidden="true" />
              <span>NHA Corrigendum 7</span>
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Base Eligibility</span>
              <div className="text-2xl font-mono tabular-nums font-black text-teal-600 dark:text-teal-400 mt-1.5">100 / mo</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                Qualifying ABHA transactions to unlock monthly payouts.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">OPD Intake & Rx (M2)</span>
              <div className="text-2xl font-mono tabular-nums font-black text-cyan-600 dark:text-cyan-400 mt-1.5">₹5.00</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                Per digital outpatient consultation or prescription published.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Record Exchange (M3)</span>
              <div className="text-2xl font-mono tabular-nums font-black text-indigo-600 dark:text-indigo-400 mt-1.5">₹10.00</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                Per consent-based longitudinal health record fetch.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-[#161d2b] rounded-xl border border-slate-200/90 dark:border-white/[0.06] shadow-2xs">
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Vendor Tranche</span>
              <div className="text-2xl font-mono tabular-nums font-black text-emerald-600 dark:text-emerald-400 mt-1.5">₹250+</div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                Direct vendor payments per transaction milestone tier.
              </p>
            </div>
          </div>
        </div>

        {/* Operational Challenges Table */}
        <div className="bg-white dark:bg-[#111622] rounded-2xl border border-slate-200 dark:border-white/[0.08] overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-[#161d2b]">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display tracking-tight">
              Field Realities & Architectural Safeguards
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Engineering solutions for noise, connectivity, and literacy challenges in Indian public hospitals
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-[#131926] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-white/[0.08]">
                <tr>
                  <th className="px-6 py-3.5">Field Barrier</th>
                  <th className="px-6 py-3.5">Architectural Mitigation</th>
                  <th className="px-6 py-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/[0.06] font-normal">
                {challenges.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 dark:hover:bg-white/[0.03] transition-colors duration-150">
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white max-w-xs">
                      {c.challenge}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
                      {c.mitigation}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 font-mono">
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
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
