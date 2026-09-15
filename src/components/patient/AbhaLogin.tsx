import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, User, ArrowRight, KeyRound, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from '../common/Badge';

export const AbhaLogin: React.FC = () => {
  const { setPatientStep, setCurrentPatient, patients, showToast } = useApp();
  const [authMode, setAuthMode] = useState<'select' | 'abha' | 'guest'>('select');
  const [abhaInput, setAbhaInput] = useState('rohan.kulkarni@abdm');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [guestPhone, setGuestPhone] = useState('+91 98230 44192');
  const [guestName, setGuestName] = useState('Rohan Kulkarni');

  const handleSendOtp = () => {
    setOtpSent(true);
    showToast('Demo OTP 123456 dispatched via simulated UIDAI/ABDM Gateway');
  };

  const handleVerifyAbha = () => {
    // Select Rohan Kulkarni
    const rohan = patients[0];
    setCurrentPatient(rohan);
    showToast('ABHA Discovery Verified: Rohan Kulkarni');
    setPatientStep('consent');
  };

  const handleGuestContinue = () => {
    // Select Guest patient or update current patient
    const guestPatient = {
      ...patients[0],
      isGuest: true,
      name: guestName || 'Guest Patient',
      phone: guestPhone,
      abhaNumber: undefined,
      abhaAddress: undefined
    };
    setCurrentPatient(guestPatient);
    showToast('Continuing as Guest Patient');
    setPatientStep('consent');
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        {/* Step Indicator */}
        <div className="flex items-center justify-between">
          <Badge variant="teal">STEP 2 of 8</Badge>
          <span className="text-xs text-slate-500 font-medium">Patient Identity Verification</span>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            Patient Check-In
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Choose your preferred authentication mode. Fast-track with ABHA or proceed as Guest.
          </p>
        </div>

        {/* Mode Selector */}
        {authMode === 'select' && (
          <div className="space-y-4 pt-2">
            <button
              onClick={() => setAuthMode('abha')}
              className="w-full p-5 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/40 dark:to-cyan-950/40 hover:from-teal-100 hover:to-cyan-100 border-2 border-teal-500/50 rounded-2xl flex items-center gap-4 text-left transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Continue with ABHA
                  </h3>
                  <Badge variant="teal">Recommended</Badge>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Connect Ayushman Bharat Health Account (14-digit number or ABHA address) for longitudinal record linkage.
                </p>
              </div>
            </button>

            <button
              onClick={() => setAuthMode('guest')}
              className="w-full p-5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center gap-4 text-left transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <User className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  Continue as Guest
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Direct entry without national health account. A temporary hospital token will be generated.
                </p>
              </div>
            </button>
          </div>
        )}

        {/* ABHA Flow */}
        {authMode === 'abha' && (
          <div className="space-y-4 pt-2">
            <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 text-xs text-teal-800 dark:text-teal-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-600" />
              <span>Simulated ABDM Gateway: Demo sandbox credentials active</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                ABHA Number or ABHA Address
              </label>
              <input
                type="text"
                value={abhaInput}
                onChange={(e) => setAbhaInput(e.target.value)}
                placeholder="e.g. rohan.kulkarni@abdm or 91-8842-1209-7731"
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            {!otpSent ? (
              <button
                onClick={handleSendOtp}
                className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <KeyRound className="w-4 h-4" />
                <span>Request Authentication OTP</span>
              </button>
            ) : (
              <div className="space-y-3 animate-fade-in">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Enter 6-Digit OTP
                    </label>
                    <button
                      onClick={() => setOtp('123456')}
                      className="text-xs font-semibold text-teal-600 hover:underline"
                    >
                      Auto-fill Demo OTP (123456)
                    </button>
                  </div>
                  <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    className="w-full px-4 py-3 text-center tracking-widest text-lg font-mono font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <button
                  onClick={handleVerifyAbha}
                  className="w-full py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-sm font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Verify & Discover ABHA Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={() => setAuthMode('select')}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 py-1"
            >
              &larr; Back to login options
            </button>
          </div>
        )}

        {/* Guest Flow */}
        {authMode === 'guest' && (
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter patient full name"
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number (for SMS token tracking)
              </label>
              <input
                type="text"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <button
              onClick={handleGuestContinue}
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Continue with Temporary Guest ID</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setAuthMode('select')}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 py-1"
            >
              &larr; Back to login options
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
