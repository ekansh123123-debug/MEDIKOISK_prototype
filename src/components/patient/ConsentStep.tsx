import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Volume2, CheckCircle2, XCircle, FileText, Lock, Eye, Check } from 'lucide-react';
import { AuditService } from '../../services/auditService';
import { VoiceService } from '../../services/voiceService';

export const ConsentStep: React.FC = () => {
  const { setPatientStep, currentPatient, language, showToast, t } = useApp();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [hasCheckedConsent, setHasCheckedConsent] = useState(true);

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    VoiceService.speak(t.consentAudioText, language);
    setTimeout(() => setIsPlayingAudio(false), 5000);
  };

  const handleAgree = () => {
    AuditService.logEvent(
      'patient',
      'CONSENT',
      'CONSENT_GRANTED',
      `Patient ${currentPatient.name} granted informed consent under DPDP Act 2023 for clinical case preparation.`,
      currentPatient.id
    );
    showToast('Informed consent digitally signed and recorded.');
    setPatientStep('basic_info');
  };

  const handleDecline = () => {
    AuditService.logEvent(
      'patient',
      'CONSENT',
      'CONSENT_DECLINED',
      `Patient ${currentPatient.name} declined digital intake consent. Standard manual paper triage route assigned.`,
      currentPatient.id
    );
    alert('You have chosen not to proceed with digital intake. Please collect a physical paper token at Counter 1.');
    setPatientStep('hospital_qr');
  };

  return (
    <div className="max-w-xl mx-auto py-6 px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">Step: Data Sharing & Consent</span>
          <span className="text-slate-500 dark:text-slate-400 font-mono">DPDP Act 2023 Statutory Notice</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto mb-2.5 border border-teal-500/20">
            <ShieldCheck className="w-6 h-6" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.consentTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            {t.consentDesc}
          </p>
        </div>

        {/* Audio Assistance Bar */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Volume2 className="w-5 h-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                {t.consentAudioBtn}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Spoken read-out in {language.toUpperCase()}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handlePlayAudio}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
              isPlayingAudio ? 'bg-teal-700 text-white' : 'bg-teal-600 hover:bg-teal-700 text-white font-bold'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{isPlayingAudio ? t.consentAudioPlaying : 'Read Aloud'}</span>
          </button>
        </div>

        {/* Itemized Terms Cards */}
        <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl flex items-start gap-3 border border-slate-200 dark:border-slate-800">
            <Eye className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-slate-900 dark:text-white">Why information is collected:</strong>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                {t.consentPoint1}
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl flex items-start gap-3 border border-slate-200 dark:border-slate-800">
            <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-slate-900 dark:text-white">What is collected:</strong>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                {t.consentPoint2}
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl flex items-start gap-3 border border-slate-200 dark:border-slate-800">
            <Lock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="text-slate-900 dark:text-white">Your Control & Revocation:</strong>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                {t.consentPoint3}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Consent Checkbox */}
        <label className="flex items-start gap-3 p-3 bg-teal-50/60 dark:bg-teal-950/20 rounded-xl border border-teal-500/30 cursor-pointer">
          <input
            type="checkbox"
            checked={hasCheckedConsent}
            onChange={(e) => setHasCheckedConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus-visible:ring-teal-500"
          />
          <span className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
            I hereby grant informed consent under DPDP Act 2023 for MEDIKOISK to process my health data and prepare an encrypted pre-consultation clinical summary for my consulting doctor.
          </span>
        </label>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            disabled={!hasCheckedConsent}
            onClick={handleAgree}
            className="flex-1 py-3.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 text-sm transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-white" aria-hidden="true" />
            <span>{t.consentAcceptBtn}</span>
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="py-3.5 px-5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          >
            <XCircle className="w-4 h-4" aria-hidden="true" />
            <span>{t.consentDeclineBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
