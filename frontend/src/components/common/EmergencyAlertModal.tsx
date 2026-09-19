import React from 'react';
import { useApp } from '../../context/AppContext';
import { AlertTriangle, Siren, Volume2, ArrowRight, ShieldAlert, PhoneCall } from 'lucide-react';
import { TriageEngine } from '../../services/triageEngine';

export const EmergencyAlertModal: React.FC = () => {
  const { emergencyAlert, clearEmergency, language } = useApp();

  if (!emergencyAlert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-red-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border-4 border-red-600 rounded-3xl shadow-2xl overflow-hidden animate-scale-up">
        {/* Flashing Top Alert Banner */}
        <div className="bg-red-600 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full animate-pulse">
              <Siren className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-black text-red-200">
                CRITICAL TRIAGE SAFETY OVERRIDE
              </span>
              <h2 className="text-2xl font-black tracking-tight">
                EMERGENCY DETECTED
              </h2>
            </div>
          </div>
          <span className="px-3 py-1 bg-red-800 text-red-100 text-xs font-black rounded-lg uppercase tracking-wider border border-red-400">
            PRIORITY: RED
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-2xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-900 dark:text-red-200 text-lg">
                  Your symptoms may indicate an acute life-threatening medical event.
                </h3>
                <p className="text-sm text-red-800 dark:text-red-300 mt-1">
                  Routine questionnaire intake has been immediately suspended by the deterministic clinical safety engine.
                </p>
              </div>
            </div>
          </div>

          {/* Trigger Details */}
          <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-slate-500">Patient:</span>
              <span className="font-bold">{emergencyAlert.patientName}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-slate-500">Emergency Token Assigned:</span>
              <span className="font-black text-red-600 text-base">{emergencyAlert.tokenNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-slate-500">Trigger Category:</span>
              <span className="font-semibold uppercase text-red-600">{emergencyAlert.category}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-slate-500">Symptom Detected:</span>
              <span className="font-medium italic text-slate-800 dark:text-slate-200">"{emergencyAlert.rawSymptom}"</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-500">Directive:</span>
              <span className="font-semibold text-red-700 dark:text-red-300">{emergencyAlert.destinationDepartment}</span>
            </div>
          </div>

          {/* Audio Guidance Button */}
          <div className="flex items-center justify-between p-3.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-teal-600" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Spoken instructions available in Hindi / Marathi / English
              </span>
            </div>
            <button
              onClick={() => TriageEngine.playSpokenGuidance(language)}
              className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5" />
              Replay Audio
            </button>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                alert('Triage Nursing Station has been notified with high-priority audio chime. An orderly is being dispatched.');
                clearEmergency();
              }}
              className="flex-1 px-6 py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold rounded-2xl shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 text-base transition-all"
            >
              <span>PROCEED TO EMERGENCY / CASUALTY</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={clearEmergency}
              className="px-4 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-medium rounded-2xl text-xs"
            >
              Dismiss (Demo Testing)
            </button>
          </div>

          {/* Regulatory / Safety Notice */}
          <div className="flex items-center gap-2 justify-center text-xs text-slate-500">
            <ShieldAlert className="w-4 h-4 text-slate-400" />
            <span>DPDP Act 2023 & Clinical Governance: Unconditional Deterministic Override</span>
          </div>
        </div>
      </div>
    </div>
  );
};
