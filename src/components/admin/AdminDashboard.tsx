import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  Siren, 
  Coins, 
  Share2, 
  FileText, 
  Clock, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { AbdmService } from '../../services/abdmService';

export const AdminDashboard: React.FC = () => {
  const { tokens, emergencyHistory, documents, currentSoap, showToast, t } = useApp();
  const abdmStatus = AbdmService.getGatewayStatus();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
            Hospital Administration & Emergency Triage Desk
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Real-time outpatient load, deterministic emergency alerts, and ABDM Digital Health Incentive Scheme (DHIS) tracking.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 flex items-center gap-1.5 self-start sm:self-auto">
          <Building2 className="w-3.5 h-3.5" />
          Central Hospital Outpatient Operations
        </span>
      </div>

      {/* Emergency Flash Feed if active */}
      {emergencyHistory.length > 0 && (
        <div className="p-5 bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-500 rounded-3xl space-y-3 animate-pulse backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold text-sm">
              <Siren className="w-5 h-5 text-rose-600 dark:text-rose-400 animate-bounce" />
              <span>DETERMINISTIC EMERGENCY TRIAGE OVERRIDES DETECTED ({emergencyHistory.length})</span>
            </div>
            <Badge variant="red">Casualty Dispatch Required</Badge>
          </div>

          <div className="space-y-2">
            {emergencyHistory.map((em) => (
              <div key={em.id} className="p-3.5 bg-white dark:bg-slate-900/90 rounded-xl border border-rose-200 dark:border-rose-500/40 flex items-center justify-between text-xs shadow-sm">
                <div>
                  <span className="font-bold text-rose-600 dark:text-rose-400 mr-2">{em.tokenNumber}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{em.patientName}</span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">Trigger: {em.matchedRule} ({em.category})</span>
                  <p className="text-slate-600 dark:text-slate-300 italic text-[11px] mt-0.5">"{em.rawSymptom}"</p>
                </div>
                <button
                  onClick={() => alert(`Nurse dispatched to patient ${em.patientName} (Token ${em.tokenNumber}). Destination: ${em.destinationDepartment}`)}
                  className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-xs transition-colors shadow-md"
                >
                  Acknowledge & Dispatch
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 8 Metric KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 glass-card rounded-2xl border border-slate-200/80 dark:border-teal-500/15">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>OPD Visits Today</span>
            <Users className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">128</div>
          <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">+18% vs yesterday</span>
        </div>

        <div className="p-4 glass-card rounded-2xl border border-slate-200/80 dark:border-teal-500/15">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Digital Intake Completed</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">104</div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">81.2% digital adoption</span>
        </div>

        <div className="p-4 glass-card rounded-2xl border border-slate-200/80 dark:border-teal-500/15">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Waiting in Queue</span>
            <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {tokens.filter(t => t.status === 'WAITING').length}
          </div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400">Avg wait: 8.4 mins</span>
        </div>

        <div className="p-4 glass-card rounded-2xl border border-slate-200/80 dark:border-teal-500/15">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Emergency Triggers</span>
            <Siren className="w-4 h-4 text-rose-600 dark:text-rose-400" />
          </div>
          <div className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-1">
            {emergencyHistory.length || 1}
          </div>
          <span className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold">Immediate hard-stop</span>
        </div>

        <div className="p-4 glass-card rounded-2xl border border-slate-200/80 dark:border-teal-500/15">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Documents TrOCR'd</span>
            <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">48</div>
          <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold">96.4% verification rate</span>
        </div>

        <div className="p-4 glass-card rounded-2xl border border-slate-200/80 dark:border-teal-500/15">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>ABHA / Guest Share</span>
            <Share2 className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">74% / 26%</div>
          <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold">ABDM M1 compliant</span>
        </div>

        <div className="p-4 glass-card rounded-2xl border border-slate-200/80 dark:border-teal-500/15">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Vernacular Speech</span>
            <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">62%</div>
          <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">Hindi & Marathi voice</span>
        </div>

        <div className="p-4 glass-card rounded-2xl border border-slate-200/80 dark:border-teal-500/15">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>DHIS Revenue Earned</span>
            <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
            ₹{abdmStatus.dhisIncentives.totalIncentiveInr.toLocaleString()}
          </div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">NHA Corrigendum 7</span>
        </div>
      </div>

      {/* Live Queue Table */}
      <div className="glass-card-elevated rounded-3xl p-6 border border-slate-200/80 dark:border-teal-500/20 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
            Live OPD Outpatient Queue & Consultation Rooms
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">Synchronous real-time updates</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-4 py-3">Token No.</th>
                <th className="px-4 py-3">Patient Name</th>
                <th className="px-4 py-3">Age/Gender</th>
                <th className="px-4 py-3">Chief Complaint</th>
                <th className="px-4 py-3">Priority</th>
                <th className="px-4 py-3">Assigned Room</th>
                <th className="px-4 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {tokens.map((token) => (
                <tr key={token.tokenNumber} className="hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400">{token.tokenNumber}</td>
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{token.patientName}</td>
                  <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{token.age} / {token.gender}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{token.chiefComplaint}</td>
                  <td className="px-4 py-3">
                    <Badge variant={token.priority === 'EMERGENCY' ? 'red' : 'teal'}>
                      {token.priority}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{token.counterRoom}</td>
                  <td className="px-4 py-3 text-right">
                    <Badge variant={token.status === 'IN_CONSULTATION' ? 'green' : token.status === 'CALLING' ? 'amber' : 'slate'}>
                      {token.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
