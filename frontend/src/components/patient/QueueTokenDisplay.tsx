import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  DoorClosed, 
  ArrowRight, 
  Stethoscope, 
  BellRing, 
  Printer, 
  Wifi, 
  Sparkles 
} from 'lucide-react';
import { Badge } from '../common/Badge';
import confetti from 'canvas-confetti';

export const QueueTokenDisplay: React.FC = () => {
  const { currentToken, currentPatient, setRole, soundEffects, reducedMotion, t } = useApp();
  const [isPrinting, setIsPrinting] = useState(false);
  const [printSuccess, setPrintSuccess] = useState(false);

  useEffect(() => {
    if (!reducedMotion && soundEffects) {
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  }, [reducedMotion, soundEffects]);

  const handleSimulatePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
      setPrintSuccess(true);
      setTimeout(() => setPrintSuccess(false), 4000);
    }, 1200);
  };

  const tokenNum = currentToken?.tokenNumber || 'A-027';
  const isEmergency = currentToken?.priority === 'EMERGENCY';

  return (
    <div className="max-w-xl mx-auto py-2 sm:py-6 px-1 sm:px-2 animate-fade-in space-y-4 sm:space-y-6">
      <div className="glass-card-elevated rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-white/[0.07] dark:bg-[#101114] shadow-xl text-center space-y-5 sm:space-y-6">
        {/* Success Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md border border-emerald-500/20">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <Badge variant={isEmergency ? 'red' : 'green'} pulsing={isEmergency}>
            {isEmergency ? 'EMERGENCY - PLEASE PROCEED TO ROOM 0' : 'READY FOR YOUR DOCTOR'}
          </Badge>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display mt-2">
            {t.tokenTitle}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t.tokenSuccess}
          </p>
        </div>

        {/* Big Token Display Card */}
        <div className={`p-6 rounded-2xl border-2 text-center relative overflow-hidden ${
          isEmergency
            ? 'bg-rose-950/40 border-rose-500'
            : 'bg-slate-50 dark:bg-[#16171b] border-teal-500/40 shadow-lg'
        }`}>
          <span className="text-[11px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-widest font-mono">
            {t.tokenNumber}
          </span>
          <div className={`text-5xl sm:text-6xl font-black font-mono tabular-nums tracking-tight my-2 ${
            isEmergency ? 'text-rose-600 dark:text-rose-400 animate-pulse' : 'text-slate-900 dark:text-white'
          }`}>
            {tokenNum}
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300">
            {t.roomNumber}: <span className="font-bold text-slate-900 dark:text-white">OPD Room 4 (Dr. A. K. Shukla, MD)</span>
          </div>
        </div>

        {/* Queue Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-slate-50 dark:bg-[#16171b] rounded-xl border border-slate-200 dark:border-white/[0.07] shadow-sm">
            <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400 mx-auto mb-1" aria-hidden="true" />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">{t.estimatedWait}</span>
            <div className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white mt-0.5">
              {currentToken?.estimatedWaitMinutes || 8} mins
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-[#16171b] rounded-xl border border-slate-200 dark:border-white/[0.07] shadow-sm">
            <Users className="w-4 h-4 text-sky-600 dark:text-sky-400 mx-auto mb-1" aria-hidden="true" />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Ahead of You</span>
            <div className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white mt-0.5">
              {currentToken?.positionAhead || 2}
            </div>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-[#16171b] rounded-xl border border-slate-200 dark:border-white/[0.07] shadow-sm">
            <DoorClosed className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mx-auto mb-1" aria-hidden="true" />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Now Serving</span>
            <div className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white mt-0.5">
              A-021
            </div>
          </div>
        </div>

        {/* Thermal Receipt Dispenser Simulator */}
        <div className="bg-slate-50 dark:bg-[#16171b] rounded-xl p-4 border border-slate-200 dark:border-white/[0.07] text-left relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Printer className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              <span className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                Paper Token Slip
              </span>
            </div>
            <button
              type="button"
              onClick={handleSimulatePrint}
              disabled={isPrinting}
              className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold shadow transition-all flex items-center gap-1.5 tactile-btn cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{isPrinting ? 'Printing Slip…' : printSuccess ? 'Printed ✓' : 'Print Slip'}</span>
            </button>
          </div>

          {/* Paper Ticket Visualization */}
          <div className={`p-4 bg-white text-slate-900 font-mono text-[11px] rounded-lg border border-slate-300 shadow-inner space-y-2 transition-all ${
            isPrinting ? 'animate-pulse opacity-75' : ''
          }`}>
            <div className="text-center border-b border-dashed border-slate-300 pb-2">
              <div className="font-extrabold text-xs uppercase tracking-wider">AIIMS OPD CLINICAL KIOSK</div>
              <div className="text-[9px] text-slate-500">ABDM Scan & Share Validated • {new Date().toLocaleDateString()}</div>
            </div>
            <div className="flex justify-between font-bold text-sm text-teal-800 pt-1">
              <span>TOKEN: {tokenNum}</span>
              <span>ROOM 4</span>
            </div>
            <div className="text-[10px] text-slate-600 space-y-0.5">
              <div>Patient: <span className="font-semibold text-slate-900">{currentPatient.name || 'Anonymous Guest'}</span></div>
              <div>ABHA: <span className="font-semibold text-slate-900">{currentPatient.abhaNumber || 'GUEST-UNLINKED'}</span></div>
              <div>Dept: <span className="font-semibold text-slate-900">General Medicine & Triage</span></div>
              <div>Est. Wait: <span className="font-semibold text-slate-900 tabular-nums">{currentToken?.estimatedWaitMinutes || 8} minutes</span></div>
            </div>
            <div className="pt-2 border-t border-dashed border-slate-300 flex items-center justify-between">
              {/* Barcode visual */}
              <div className="flex items-center gap-0.5 h-6" aria-hidden="true">
                {[4, 2, 6, 3, 5, 2, 7, 4, 3, 6, 2, 5, 4, 2, 6, 3].map((h, idx) => (
                  <div key={idx} className="bg-slate-900 w-1 rounded-none" style={{ height: `${h * 3}px` }} />
                ))}
              </div>
              <span className="text-[9px] text-slate-500">Kiosk #01 • Offline PWA OK</span>
            </div>
          </div>
        </div>

        {/* SMS Notification Banner & Offline Cache Status */}
        <div className="p-3 bg-slate-50/80 dark:bg-[#121317] rounded-xl border border-slate-200 dark:border-white/[0.07] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-left">
            <BellRing className="w-4 h-4 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">SMS & Audio Alerts Active</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Mobile SMS alert sent to {currentPatient.phone || 'patient mobile'}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-teal-500/10 text-teal-700 dark:text-teal-300 font-bold border border-teal-500/20">
            <Wifi className="w-3 h-3 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <span>PWA Cached</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 space-y-2">
          <button
            type="button"
            onClick={() => setRole('doctor')}
            className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 text-sm transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          >
            <Stethoscope className="w-4 h-4 text-white" aria-hidden="true" />
            <span>Open in Clinician Workstation (EHR)</span>
            <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setRole('admin')}
            className="w-full py-2 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-semibold cursor-pointer"
          >
            Or view Live Triage & OPD Queue Desk &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
