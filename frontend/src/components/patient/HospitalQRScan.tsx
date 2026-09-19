import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { QrCode, Building2, ArrowRight, MapPin, ShieldCheck, User, Sparkles } from 'lucide-react';
import { DEMO_PATIENTS } from '../../data/demoPatients';

export const HospitalQRScan: React.FC = () => {
  const { setPatientStep, setCurrentPatient, showToast, t } = useApp();
  const [hospitalCode, setHospitalCode] = useState('MH-PUN-OPD-01');

  const handleStartCheckIn = () => {
    setPatientStep('abha_login');
  };

  const handleGuestCheckIn = () => {
    setCurrentPatient(DEMO_PATIENTS[2]); // Vikram Singh (Guest)
    setPatientStep('consent');
    showToast('Continuing in Anonymous Guest Mode (ABDM unlinked).');
  };

  const handleSelectDemoPatient = (patientIndex: number) => {
    setCurrentPatient(DEMO_PATIENTS[patientIndex]);
    setPatientStep('abha_login');
    showToast(`Loaded demo profile: ${DEMO_PATIENTS[patientIndex].name}`);
  };

  return (
    <div className="max-w-xl mx-auto py-2 sm:py-6 px-1 sm:px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-white/[0.07] dark:bg-[#101114] shadow-xl text-center space-y-5 sm:space-y-6">
        {/* Hospital Kiosk Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.07] gap-2">
          <div className="flex items-center gap-2.5 text-left min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 border border-teal-500/20 shrink-0">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">{t.hospitalName}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">{t.hospitalId}</span>
            </div>
          </div>
          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 whitespace-nowrap shrink-0">
            {t.liveAbdmVerified}
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.qrTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            {t.qrDesc}
          </p>
        </div>

        {/* QR Code Frame with laser scan simulation */}
        <div className="p-4 sm:p-6 bg-slate-100/70 dark:bg-[#121317] rounded-2xl border-2 border-dashed border-teal-500/30 inline-block relative group max-w-full">
          <div className="w-40 h-40 sm:w-52 sm:h-52 mx-auto bg-white rounded-xl p-3 sm:p-4 shadow-md flex flex-col items-center justify-center relative overflow-hidden">
            <QrCode className="w-32 h-32 sm:w-44 sm:h-44 text-slate-900" aria-hidden="true" />
            
            {/* Ambient scanning line */}
            <div 
              className="absolute left-0 right-0 h-0.5 bg-teal-500 shadow-[0_0_8px_#14b8a6] animate-[pulse_2s_infinite]" 
              style={{ top: '45%' }} 
              aria-hidden="true"
            />
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-md border-2 border-white">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-teal-700 dark:text-teal-300 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs">Central Outpatient Wing • Kiosk Station 01</span>
          </div>
        </div>

        {/* Quick Demo Profile Presets for instant testing */}
        <div className="space-y-2 pt-1 text-left">
          <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Quick Demo Profiles (One-Tap Check-In):
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleSelectDemoPatient(0)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-slate-50 dark:bg-[#16171b] hover:border-teal-500 text-left transition-all tactile-btn cursor-pointer"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white">Rohan Kulkarni (28M)</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">ABHA Linked • Abdominal Pain</div>
            </button>
            <button
              type="button"
              onClick={() => handleSelectDemoPatient(1)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-slate-50 dark:bg-[#16171b] hover:border-teal-500 text-left transition-all tactile-btn cursor-pointer"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white">Sunita Deshmukh (52F)</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">ABHA Linked • Hypertension</div>
            </button>
          </div>
        </div>

        {/* Hospital Code Input & Check In Button */}
        <div className="space-y-3 pt-1 max-w-sm mx-auto">
          <div>
            <label htmlFor="hospital-kiosk-code" className="sr-only">Hospital Kiosk Terminal Code</label>
            <input
              id="hospital-kiosk-code"
              type="text"
              value={hospitalCode}
              onChange={(e) => setHospitalCode(e.target.value)}
              className="w-full px-4 py-2.5 text-xs font-mono font-bold text-center uppercase tracking-wider bg-slate-50 dark:bg-[#121317] border border-slate-300 dark:border-white/[0.07] rounded-xl text-slate-900 dark:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              placeholder={t.manualCodePlaceholder}
            />
          </div>

          <button
            type="button"
            onClick={handleStartCheckIn}
            className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 transition-all tactile-btn text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          >
            <span>{t.proceedBtn}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleGuestCheckIn}
            className="w-full py-2 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold cursor-pointer underline"
          >
            Or continue as Guest without login &rarr;
          </button>
        </div>

        {/* Security Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
          <span>Safe & Private • Stored securely on this device</span>
        </div>
      </div>
    </div>
  );
};
