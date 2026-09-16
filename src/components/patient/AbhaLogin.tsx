import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, User, ArrowRight, KeyRound, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';

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
    showToast('Authentication OTP dispatched to registered mobile number');
  };

  const handleVerifyAbha = () => {
    const rohan = patients[0];
    setCurrentPatient(rohan);
    showToast('ABHA Profile Discovered: Rohan Kulkarni');
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
    showToast('Registered as Guest Walk-in');
    setPatientStep('consent');
  };

  return (
    <div className="max-w-xl mx-auto py-6 px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-teal-500/20 shadow-xl dark:shadow-2xl space-y-6">
        {/* Process Breadcrumb Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
          <span className="font-bold text-teal-600 dark:text-teal-400">Step: Identity Verification</span>
          <span className="text-slate-500 dark:text-slate-400">ABDM Registry Connector</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
            {t.abhaTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t.abhaDesc}
          </p>
        </div>

        {/* Mode Selector */}
        {authMode === 'select' && (
          <div className="space-y-4 pt-2">
            <button
              onClick={() => setAuthMode('abha')}
              className="w-full p-5 bg-teal-50/50 dark:bg-gradient-to-r dark:from-teal-500/10 dark:via-cyan-500/10 dark:to-sky-500/10 hover:bg-teal-100/50 dark:hover:from-teal-500/20 border-2 border-teal-500/30 dark:border-teal-500/40 rounded-2xl flex items-center gap-4 text-left transition-all group backdrop-blur-md shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-slate-950" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Continue with ABHA
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-800 dark:text-teal-300 border border-teal-500/30">
                    Recommended
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Verify using 14-digit ABHA ID or ABHA address handle for seamless longitudinal health history exchange.
                </p>
              </div>
            </button>

            <button
              onClick={() => setAuthMode('guest')}
              className="w-full p-5 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center gap-4 text-left transition-all group backdrop-blur-md shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-slate-300 dark:border-slate-700">
                <User className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Continue as Walk-in Guest
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Proceed with phone number only. A temporary digital hospital OPD pass will be generated.
                </p>
              </div>
            </button>
          </div>
        )}

        {/* ABHA Flow */}
        {authMode === 'abha' && (
          <div className="space-y-4 pt-2">
            <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 text-xs text-teal-700 dark:text-teal-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-600 dark:text-teal-400" />
              <span>NHA ABDM Gateway Connected</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.abhaInputLabel}
              </label>
              <input
                type="text"
                value={abhaInput}
                onChange={(e) => setAbhaInput(e.target.value)}
                placeholder={t.abhaPlaceholder}
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {!otpSent ? (
              <button
                onClick={handleSendOtp}
                className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-slate-950 text-sm font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <KeyRound className="w-4 h-4" />
                <span>{t.sendOtpBtn}</span>
              </button>
            ) : (
              <div className="space-y-3 animate-fade-in">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      {t.otpLabel}
                    </label>
                    <button
                      onClick={() => setOtp('123456')}
                      className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                    >
                      Fill Test OTP (123456)
                    </button>
                  </div>
                  <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    className="w-full px-4 py-3 text-center tracking-widest text-lg font-mono font-bold bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <button
                  onClick={handleVerifyAbha}
                  className="w-full py-3.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 text-sm font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.verifyOtpBtn}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            )}

            <button
              onClick={() => setAuthMode('select')}
              className="w-full text-center text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1"
            >
              &larr; {t.backBtn}
            </button>
          </div>
        )}

        {/* Guest Flow */}
        {authMode === 'guest' && (
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.fullNameLabel}
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter patient full name"
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {t.phoneLabel} (for SMS token tracking)
              </label>
              <input
                type="text"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <button
              onClick={handleGuestContinue}
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>{t.guestModeBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setAuthMode('select')}
              className="w-full text-center text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1"
            >
              &larr; {t.backBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
