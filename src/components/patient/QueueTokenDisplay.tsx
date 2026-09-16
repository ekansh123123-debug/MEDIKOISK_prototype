import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  DoorClosed, 
  ArrowRight, 
  Stethoscope, 
  BellRing,
  QrCode
} from 'lucide-react';
import { Badge } from '../common/Badge';
import confetti from 'canvas-confetti';

export const QueueTokenDisplay: React.FC = () => {
  const { currentToken, currentPatient, setRole } = useApp();

  useEffect(() => {
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }, []);

  const tokenNum = currentToken?.tokenNumber || 'A-027';
  const isEmergency = currentToken?.priority === 'EMERGENCY';

  return (
    <div className="max-w-xl mx-auto py-4 px-2 animate-fade-in">
      <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 border border-teal-500/20 shadow-2xl text-center space-y-6">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto shadow-md border border-emerald-500/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <Badge variant={isEmergency ? 'red' : 'green'} pulsing={isEmergency}>
            {isEmergency ? 'EMERGENCY PRIORITY OVERRIDE' : 'CASE PREPARED FOR CLINICIAN'}
          </Badge>
          <h2 className="text-2xl font-bold text-white font-display mt-2">
            Intake Completed & Token Issued
          </h2>
          <p className="text-xs text-slate-400">
            A verified clinical case summary has been transferred to the attending physician.
          </p>
        </div>

        {/* Big Token Display Card */}
        <div className={`p-6 rounded-3xl border-2 text-center relative overflow-hidden backdrop-blur-xl ${
          isEmergency
            ? 'bg-rose-950/40 border-rose-500'
            : 'bg-gradient-to-b from-teal-500/10 via-cyan-500/5 to-slate-900/60 border-teal-500/40 shadow-xl'
        }`}>
          <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest">
            Outpatient Token Number
          </span>
          <div className={`text-6xl font-black font-mono tracking-tight my-2 ${
            isEmergency ? 'text-rose-400 animate-pulse' : 'text-white'
          }`}>
            {tokenNum}
          </div>
          <div className="text-xs text-slate-300">
            Assigned Room: <span className="font-bold text-white">OPD Room 4 (Dr. A. K. Shukla, MD)</span>
          </div>
        </div>

        {/* Queue Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 bg-slate-900/60 rounded-2xl border border-slate-800">
            <Clock className="w-4 h-4 text-teal-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 uppercase font-bold">Est. Wait</span>
            <div className="text-base font-bold text-white">
              {currentToken?.estimatedWaitMinutes || 8} mins
            </div>
          </div>

          <div className="p-3.5 bg-slate-900/60 rounded-2xl border border-slate-800">
            <Users className="w-4 h-4 text-sky-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 uppercase font-bold">Ahead of You</span>
            <div className="text-base font-bold text-white">
              {currentToken?.positionAhead || 2}
            </div>
          </div>

          <div className="p-3.5 bg-slate-900/60 rounded-2xl border border-slate-800">
            <DoorClosed className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <span className="text-[10px] text-slate-400 uppercase font-bold">Now Serving</span>
            <div className="text-base font-bold text-white">
              A-021
            </div>
          </div>
        </div>

        {/* SMS Notification Banner */}
        <div className="p-3.5 bg-slate-900/40 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-left">
            <BellRing className="w-4 h-4 text-teal-400" />
            <div>
              <span className="font-bold text-white block">SMS & Audio Alerts Active</span>
              <span className="text-[11px] text-slate-400">Mobile SMS alert sent to {currentPatient.phone}</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/20">
            Enqueued
          </span>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 space-y-2">
          <button
            onClick={() => setRole('doctor')}
            className="w-full py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 font-bold rounded-2xl shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 text-sm transition-all"
          >
            <Stethoscope className="w-4 h-4 text-slate-950" />
            <span>Open in Clinician Workstation (EHR)</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => setRole('admin')}
            className="w-full py-2.5 text-xs text-slate-400 hover:text-white font-semibold"
          >
            Or view Live Triage & OPD Queue Desk &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
