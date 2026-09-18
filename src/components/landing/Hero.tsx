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
    <section className="relative overflow-hidden pt-10 pb-16 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-[#080d1a] dark:via-[#0c1426] dark:to-[#080d1a] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      {/* Precision Clinical Cyan / Emerald Ambient Glow (No generic purple slop) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/5 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Eyebrow Badge (Eyebrow restraint: 1 per hero) */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/25 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <span>{t.heroBadge}</span>
          </div>
        </div>

        {/* Hero Title (max 2 lines) & Concise Subtext (under 20 words) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] font-display text-balance">
            {t.heroTitle1} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-500 dark:from-teal-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
        </div>

        {/* Action CTAs (1 primary + 1 secondary, no text wrapping) */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            type="button"
            onClick={handleStartPatient}
            className="w-full sm:w-auto px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 text-sm transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          >
            <span>{t.beginIntakeBtn}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleViewDoctor}
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-100 font-semibold rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          >
            <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <span>{t.accessClinicianBtn}</span>
          </button>
        </div>

        {/* 6-Step Clinical Pipeline Bento Grid */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="glass-card-elevated rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800/90 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  {t.heroPipelineTitle}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.heroPipelineSub}
                </p>
              </div>
              <span className="self-start sm:self-auto text-[11px] font-mono text-teal-700 dark:text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20 font-semibold">
                {t.heroPipelineBadge}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {[
                { step: '01', title: t.qrTitle.split(' ')[0] + ' QR', desc: t.qrDesc.slice(0, 24) + '…', icon: <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" /> },
                { step: '02', title: t.adaptiveTitle.split(' ')[0] + ' Intake', desc: t.voiceInputPrompt.slice(0, 24) + '…', icon: <Mic className="w-4 h-4 text-sky-600 dark:text-sky-400" /> },
                { step: '03', title: t.docTitle.split(' ')[0] + ' OCR', desc: t.tagTrOcr, icon: <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
                { step: '04', title: t.medVerifyTitle.split(' ')[0] + ' Check', desc: t.dosageLabel + ' & ' + t.frequencyLabel, icon: <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
                { step: '05', title: t.tokenTitle.split(' ')[0] + ' Slip', desc: t.estimatedWait, icon: <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" /> },
                { step: '06', title: t.doctorTitle.split(' ')[0] + ' Review', desc: t.approveSignSummary.slice(0, 24) + '…', icon: <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" /> }
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-3 bg-slate-50/80 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 flex flex-col items-center text-center group transition-all tactile-btn"
                >
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-2 group-hover:scale-105 transition-transform border border-slate-200 dark:border-slate-700/60">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400">
                    STEP {item.step}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 truncate max-w-full">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight line-clamp-2">
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
