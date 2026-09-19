import React from 'react';

import { useApp } from '../../context/AppContext';
import {
  ArrowRight,
  Stethoscope,
  Mic,
  FileText,
  ShieldCheck,
  Activity,
  Clock,
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { setRole, setPatientStep, t } = useApp();

  const handleStartPatient = () => {
    setRole('patient');
    setPatientStep('hospital_qr');
  };

  const handleViewDoctor = () => {
    setRole('doctor');
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-[#0c1017] dark:via-[#111622] dark:to-[#0c1017] border-b border-slate-200/80 dark:border-white/[0.07] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Eyebrow Badge (Eyebrow restraint: 1 per hero) */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/25 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <span>{t.heroBadge}</span>
          </div>
        </div>

        {/* Hero Title (max 2 lines) & Concise Subtext (under 20 words) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] font-display text-balance">
            {t.heroTitle1} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-300 dark:to-teal-400 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed text-balance">
            {t.heroSubtitle}
          </p>
        </div>

        {/* Action CTAs (1 primary + 1 secondary, min 48px touch targets) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={handleStartPatient}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2.5 text-sm transition-colors duration-150 tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0c1017] cursor-pointer"
          >
            <span>{t.beginIntakeBtn}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleViewDoctor}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 dark:bg-[#161d2b] dark:hover:bg-[#1f283b] dark:text-slate-100 font-semibold rounded-xl border border-slate-300 dark:border-white/[0.1] shadow-sm flex items-center justify-center gap-2.5 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0c1017] cursor-pointer"
          >
            <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <span>{t.accessClinicianBtn}</span>
          </button>
        </div>

        {/* 6-Step Clinical Pipeline Bento Grid */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-card-elevated rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/[0.08] shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  {t.heroPipelineTitle}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.heroPipelineSub}
                </p>
              </div>
              <span className="self-start sm:self-auto text-[11px] font-mono tabular-nums text-teal-700 dark:text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 font-semibold">
                {t.heroPipelineBadge}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3.5">
              {[
                { step: '01', title: t.qrTitle, desc: t.qrDesc.slice(0, 30) + '…', icon: <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> },
                { step: '02', title: t.adaptiveTitle, desc: t.voiceInputPrompt.slice(0, 30) + '…', icon: <Mic className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true" /> },
                { step: '03', title: t.docTitle, desc: t.tagTrOcr, icon: <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" /> },
                { step: '04', title: t.medVerifyTitle, desc: t.dosageLabel + ' & ' + t.frequencyLabel, icon: <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" /> },
                { step: '05', title: t.tokenTitle, desc: t.estimatedWait, icon: <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true" /> },
                { step: '06', title: t.doctorTitle, desc: t.roomNumber || 'Room 104', icon: <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" /> }
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-3.5 bg-slate-50/80 dark:bg-[#131926] rounded-xl border border-slate-200/90 dark:border-white/[0.07] hover:border-teal-500/40 dark:hover:border-teal-400/40 flex flex-col items-center text-center group transition-colors duration-150 tactile-btn"
                >
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#161d2b] flex items-center justify-center shadow-sm mb-2.5 group-hover:scale-105 transition-transform duration-150 border border-slate-200 dark:border-white/[0.08]">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono tabular-nums font-bold text-teal-600 dark:text-teal-400 tracking-wider">
                    STEP {item.step}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mt-1 truncate max-w-full">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
