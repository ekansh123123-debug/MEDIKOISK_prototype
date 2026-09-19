import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, User, ArrowRight, KeyRound, CheckCircle2 } from 'lucide-react';

export const AbhaLogin: React.FC = () => {
  const { setPatientStep, setCurrentPatient, patients, showToast, t } = useApp();
  const [authMode, setAuthMode] = useState<'select' | 'abha' | 'guest'>('select');
  const [abhaInput, setAbhaInput] = useState('rohan.kulkarni@abdm');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [guestPhone, setGuestPhone] = useState('+91 98230 44192');
  const [guestName, setGuestName] = useState('Rohan Kulkarni');

  const handleSendOtp = () => {
    setOtpSent(true);
    showToast('6-digit code sent to your mobile phone.');
  };

  const handleVerifyAbha = () => {
    const rohan = patients[0];
    setCurrentPatient(rohan);
    showToast('Welcome back, Rohan Kulkarni!');
    setPatientStep('consent');
  };

  const handleGuestContinue = () => {
    const guestPatient = {
      ...patients[0],
      isGuest: true,
      name: guestName || 'Guest Patient',
      phone: guestPhone,
      abhaNumber: undefined,
      abhaAddress: undefined
    };
    setCurrentPatient(guestPatient);
    showToast('Continuing as guest.');
    setPatientStep('consent');
  };

  return (
    <div className="max-w-xl mx-auto py-2 sm:py-6 px-1 sm:px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-white/[0.07] dark:bg-[#101114] shadow-xl space-y-5 sm:space-y-6">
        {/* Process Breadcrumb Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/[0.07] text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">Step: Login or Guest</span>
          <span className="text-slate-500 dark:text-slate-400">Safe & Private</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.abhaTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t.abhaDesc}
          </p>
        </div>

        {/* Mode Selector */}
        {authMode === 'select' && (
          <div className="space-y-3.5 pt-2">
            <button
              type="button"
              onClick={() => setAuthMode('abha')}
              className="w-full p-4 sm:p-5 bg-teal-50/60 dark:bg-[#16171b] hover:bg-teal-100/50 dark:hover:bg-[#1c1d22] border-2 border-teal-500/30 dark:border-teal-500/40 rounded-xl flex items-center gap-4 text-left transition-all group shadow-sm tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-display">
                    Continue with ABHA
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/15 text-teal-800 dark:text-teal-300 border border-teal-500/30">
                    Recommended
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Enter your mobile number or ABHA ID to quickly bring up past hospital records.
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setAuthMode('guest')}
              className="w-full p-4 sm:p-5 bg-slate-50 dark:bg-[#16171b] hover:bg-slate-100 dark:hover:bg-[#1c1d22] border border-slate-200 dark:border-white/[0.07] rounded-xl flex items-center gap-4 text-left transition-all group shadow-sm tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-[#121317] text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-slate-300 dark:border-white/[0.08]">
                <User className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-display">
                  Continue as Walk-in Guest
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  No login required. Proceed directly with your name and phone number.
                </p>
              </div>
            </button>
          </div>
        )}

        {/* ABHA Flow */}
        {authMode === 'abha' && (
          <div className="space-y-4 pt-2">
            <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 text-xs text-teal-700 dark:text-teal-300 flex items-center gap-2 font-semibold">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              <span>Safe & Connected • Official Health Gateway</span>
            </div>

            <div>
              <label htmlFor="abha-input-field" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.abhaInputLabel}
              </label>
              <input
                id="abha-input-field"
                type="text"
                autoComplete="off"
                value={abhaInput}
                onChange={(e) => setAbhaInput(e.target.value)}
                placeholder="e.g. rohan.kulkarni@abdm…"
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-[#121317] border border-slate-300 dark:border-white/[0.07] rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 font-mono"
              />
            </div>

            {!otpSent ? (
              <button
                type="button"
                onClick={handleSendOtp}
                className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-teal-600/20 transition-all flex items-center justify-center gap-2 tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
              >
                <KeyRound className="w-4 h-4" aria-hidden="true" />
                <span>{t.sendOtpBtn}</span>
              </button>
            ) : (
              <div className="space-y-3 animate-fade-in">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="otp-input-field" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      {t.otpLabel}
                    </label>
                    <button
                      type="button"
                      onClick={() => setOtp('123456')}
                      className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                    >
                      Fill Demo OTP (123456)
                    </button>
                  </div>
                  <input
                    id="otp-input-field"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP…"
                    className="w-full px-4 py-3 text-center tracking-widest text-lg font-mono font-bold bg-slate-50 dark:bg-[#121317] border border-slate-300 dark:border-white/[0.07] rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleVerifyAbha}
                  className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl shadow-xl shadow-teal-600/25 transition-all flex items-center justify-center gap-2 tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                >
                  <span>{t.verifyOtpBtn}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setAuthMode('select')}
              className="w-full text-center text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1 cursor-pointer"
            >
              &larr; {t.backBtn}
            </button>
          </div>
        )}

        {/* Guest Flow */}
        {authMode === 'guest' && (
          <div className="space-y-4 pt-2">
            <div>
              <label htmlFor="guest-name-input" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.fullNameLabel}
              </label>
              <input
                id="guest-name-input"
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Vikram Singh…"
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-[#121317] border border-slate-300 dark:border-white/[0.07] rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="guest-phone-input" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.phoneLabel} (for SMS token tracking)
              </label>
              <input
                id="guest-phone-input"
                type="tel"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="e.g. +91 98230 44192…"
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-[#121317] border border-slate-300 dark:border-white/[0.07] rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 font-mono"
              />
            </div>

            <button
              type="button"
              onClick={handleGuestContinue}
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 dark:bg-[#1c1d22] dark:hover:bg-[#22242a] dark:border dark:border-white/[0.08] text-white text-sm font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
            >
              <span>{t.guestModeBtn}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setAuthMode('select')}
              className="w-full text-center text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1 cursor-pointer"
            >
              &larr; {t.backBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
