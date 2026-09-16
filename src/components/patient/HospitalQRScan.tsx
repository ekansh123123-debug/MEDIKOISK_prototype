import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { QrCode, Building2, ArrowRight, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { Badge } from '../common/Badge';

export const HospitalQRScan: React.FC = () => {
  const { setPatientStep } = useApp();
  const [hospitalCode, setHospitalCode] = useState('MH-PUN-DYP-01');

  const handleStartCheckIn = () => {
    setPatientStep('abha_login');
  };

  return (
    <div className="max-w-xl mx-auto py-4 px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 border border-teal-500/20 shadow-2xl text-center space-y-6">
        {/* Hospital Kiosk Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-left">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Outpatient Department (OPD)</span>
              <span className="text-[10px] text-slate-400">Self-Service Intake Kiosk</span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
            ABDM V3 Ready
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white font-display">
            Scan Counter QR to Check In
          </h2>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Scan using any ABHA-compatible PHR app (Arogya Setu, ABHA app, Paytm) or begin direct intake.
          </p>
        </div>

        {/* QR Code Frame with Stitch Glacier Glass border */}
        <div className="p-6 bg-slate-950/60 rounded-3xl border-2 border-dashed border-teal-500/30 inline-block relative group">
          <div className="w-52 h-52 mx-auto bg-white rounded-2xl p-4 shadow-xl flex flex-col items-center justify-center relative">
            <QrCode className="w-44 h-44 text-slate-900" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-md border-2 border-white">
                <Building2 className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-teal-300 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>Central Outpatient Wing • Kiosk Station 01</span>
          </div>
        </div>

        {/* Hospital Code Input & Check In Button */}
        <div className="space-y-3 pt-1 max-w-sm mx-auto">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={hospitalCode}
              onChange={(e) => setHospitalCode(e.target.value)}
              className="w-full px-4 py-2.5 text-xs font-mono font-bold text-center uppercase tracking-wider bg-slate-900/80 border border-slate-700/80 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter Facility Code"
            />
          </div>

          <button
            onClick={handleStartCheckIn}
            className="w-full py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 font-bold rounded-2xl shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            <span>Proceed with Patient Intake</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        {/* Security Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
          <span>Synchronous demographic profile exchange via ABDM Milestone 1</span>
        </div>
      </div>
    </div>
  );
};
