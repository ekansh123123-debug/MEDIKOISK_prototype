import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  DoorClosed, 
  ArrowRight, 
  FileText, 
  Stethoscope, 
  Share2, 
  BellRing 
} from 'lucide-react';
import { Badge } from '../common/Badge';
import confetti from 'canvas-confetti';

export const QueueTokenDisplay: React.FC = () => {
  const { currentToken, currentPatient, setRole } = useApp();

  useEffect(() => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }, []);

  const tokenNum = currentToken?.tokenNumber || 'A-027';
  const isEmergency = currentToken?.priority === 'EMERGENCY';

  return (
    <div className="max-w-xl mx-auto py-8 px-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <Badge variant={isEmergency ? 'red' : 'green'} pulsing={isEmergency}>
            {isEmergency ? 'EMERGENCY PRIORITY OVERRIDE' : 'REGISTRATION & INTAKE COMPLETE'}
          </Badge>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit'] mt-2">
            Your Case is Prepared for the Doctor
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            A structured, verified clinical case has been generated and queued for review.
          </p>
        </div>

        {/* Big Token Display Card */}
        <div className={`p-6 rounded-3xl border-2 text-center relative overflow-hidden ${
          isEmergency
            ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500'
            : 'bg-gradient-to-b from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800/80 border-teal-500/50'
        }`}>
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            Your OPD Token Number
          </span>
          <div className={`text-5xl font-black font-mono tracking-tight my-2 ${
            isEmergency ? 'text-rose-600 animate-pulse' : 'text-teal-700 dark:text-teal-400'
          }`}>
            {tokenNum}
          </div>
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Assigned to: <span className="font-bold text-slate-900 dark:text-white">OPD Room 4 (Dr. A. K. Shukla)</span>
          </div>
        </div>

        {/* Queue Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <Clock className="w-4 h-4 text-teal-600 mx-auto mb-1" />
            <span className="text-[10px] text-slate-500 uppercase font-bold">Estimated Wait</span>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {currentToken?.estimatedWaitMinutes || 9} mins
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
            <span className="text-[10px] text-slate-500 uppercase font-bold">Patients Ahead</span>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {currentToken?.positionAhead || 2}
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <DoorClosed className="w-4 h-4 text-purple-600 mx-auto mb-1" />
            <span className="text-[10px] text-slate-500 uppercase font-bold">Currently Serving</span>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              A-021
            </div>
          </div>
        </div>

        {/* Notification Tracker Card */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-left">
            <BellRing className="w-4 h-4 text-teal-600" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">SMS & Audio Chime Alerts</span>
              <span className="text-[11px] text-slate-500">You will be notified when A-026 enters room</span>
            </div>
          </div>
          <Badge variant="teal">Active</Badge>
        </div>

        {/* Transition to Doctor Dashboard CTA */}
        <div className="pt-2 space-y-2">
          <button
            onClick={() => setRole('doctor')}
            className="w-full py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 text-sm transition-all"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Switch to Doctor View to Review Case</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setRole('admin')}
            className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-semibold"
          >
            Or view in Hospital OPD Triage Queue &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
