import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { QrCode, Building, ArrowRight, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { Badge } from '../common/Badge';

export const HospitalQRScan: React.FC = () => {
  const { setPatientStep } = useApp();
  const [hospitalCode, setHospitalCode] = useState('MH-PUN-DYP-01');

  const handleStartDemo = () => {
    setPatientStep('abha_login');
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
        {/* Step Indicator */}
        <div className="flex items-center justify-between">
          <Badge variant="teal">STEP 1 of 8</Badge>
          <span className="text-xs text-slate-500 font-medium">ABDM Scan & Share</span>
        </div>

        {/* QR Code Frame */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
            Scan Hospital QR
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Scan the counter QR or tap below to begin your digital case-taking intake.
          </p>
        </div>

        {/* Realistic Hospital QR Visual */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800/80 rounded-3xl border-2 border-dashed border-teal-500/40 inline-block relative group">
          <div className="w-56 h-56 mx-auto bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col items-center justify-center relative">
            <QrCode className="w-44 h-44 text-slate-800 dark:text-teal-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-md border-2 border-white dark:border-slate-900">
                <Building className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-teal-700 dark:text-teal-400 font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>DYP Hospital & Research Centre, Akurdi</span>
          </div>
        </div>

        {/* Hospital Code Input & Demo Shortcut */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 max-w-sm mx-auto">
            <input
              type="text"
              value={hospitalCode}
              onChange={(e) => setHospitalCode(e.target.value)}
              className="flex-1 px-4 py-2.5 text-xs font-mono font-semibold text-center uppercase tracking-wider bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter Hospital Code"
            />
          </div>

          <button
            onClick={handleStartDemo}
            className="w-full py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start Demo at Hospital</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
          <span>Compliant with ABDM Milestone 1 V3 Scan and Share standard</span>
        </div>
      </div>
    </div>
  );
};
