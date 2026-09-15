import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Volume2, CheckCircle2, XCircle, FileText, Lock, Eye } from 'lucide-react';
import { Badge } from '../common/Badge';
import { AuditService } from '../../services/auditService';
import { VoiceService } from '../../services/voiceService';

export const ConsentStep: React.FC = () => {
  const { setPatientStep, currentPatient, language, showToast } = useApp();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const consentAudioText = {
    en: "Welcome to MEDIKOISK. Your health details will be collected solely to help your doctor prepare for your consultation today. Your data will not be shared without your explicit permission and you may revoke consent at any time.",
    hi: "मेडीकोइस्क में आपका स्वागत है। आपकी स्वास्थ्य जानकारी केवल आज डॉक्टर के परामर्श की तैयारी के लिए ली जा रही है। आपकी अनुमति के बिना इसे किसी के साथ साझा नहीं किया जाएगा।",
    mr: "मेडीकॉईस्क मध्ये आपले स्वागत आहे. तुमची माहिती केवळ आजच्या डॉक्टरांच्या तपासणीच्या तयारीसाठी गोळा केली जात आहे. तुमच्या संमतीशिवाय ती शेअर केली जाणार नाही."
  };

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    const text = consentAudioText[language as keyof typeof consentAudioText] || consentAudioText.en;
    VoiceService.speak(text, language);
    setTimeout(() => setIsPlayingAudio(false), 5000);
  };

  const handleAgree = () => {
    AuditService.logEvent(
      'patient',
      'CONSENT',
      'CONSENT_GRANTED',
      `Patient ${currentPatient.name} granted informed consent under DPDP Act 2023 for AI clinical preparation.`,
      currentPatient.id
    );
    showToast('Informed consent digitally recorded.');
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
    <div className="max-w-xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Step Indicator */}
        <div className="flex items-center justify-between">
          <Badge variant="teal">STEP 3 of 8</Badge>
          <span className="text-xs text-slate-500 font-medium">DPDP Act 2023 Consent Gate</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            Consent & Data Privacy Notice
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Under India's Digital Personal Data Protection Act 2023, your informed consent is legally required before collecting clinical symptoms.
          </p>
        </div>

        {/* Audio Assistance Bar */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Volume2 className="w-5 h-5 text-teal-600" />
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Listen in your language
              </span>
              <span className="text-[11px] text-slate-500">
                Audio explanation available
              </span>
            </div>
          </div>
          <button
            onClick={handlePlayAudio}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isPlayingAudio ? 'bg-teal-700 text-white' : 'bg-teal-600 hover:bg-teal-700 text-white'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{isPlayingAudio ? 'Playing...' : 'Read Aloud'}</span>
          </button>
        </div>

        {/* Itemized Terms Cards */}
        <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl flex items-start gap-3">
            <Eye className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white">Why information is collected:</strong>
              <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                To streamline your case history so your treating doctor can spend more time examining and consulting you.
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl flex items-start gap-3">
            <FileText className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white">What is collected:</strong>
              <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                Presenting symptoms, duration, prior medication slips, and relevant lifestyle or traditional medicine history.
              </p>
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl flex items-start gap-3">
            <Lock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white">Your Control & Revocation:</strong>
              <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                Your data is strictly purpose-limited to this OPD visit. You retain the right to review, edit, or delete any record at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAgree}
            className="flex-1 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 text-sm transition-all"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>I Agree & Continue</span>
          </button>
          <button
            onClick={handleDecline}
            className="py-4 px-6 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-2xl text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <XCircle className="w-4 h-4" />
            <span>Decline</span>
          </button>
        </div>
      </div>
    </div>
  );
};
