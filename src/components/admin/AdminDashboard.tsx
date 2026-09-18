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
  Building2,
  Download,
  Filter,
  RefreshCw,
  Search,
  Check
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { AbdmService } from '../../services/abdmService';

export const AdminDashboard: React.FC = () => {
  const { tokens, emergencyHistory, documents, currentSoap, showToast, t } = useApp();
  const abdmStatus = AbdmService.getGatewayStatus();
  const [filterPriority, setFilterPriority] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [acknowledgedEmergencies, setAcknowledgedEmergencies] = useState<Record<string, boolean>>({});

  const handleAcknowledge = (id: string, patientName: string, token: string, room: string) => {
    setAcknowledgedEmergencies(prev => ({ ...prev, [id]: true }));
    showToast(`Dispatched emergency response nurse to ${room} for patient ${patientName} (${token}).`);
  };

  const handleExportOPD = () => {
    const reportData = {
      hospital: 'Central Hospital Outpatient Operations',
      generatedAt: new Date().toISOString(),
      dhisIncentiveSummary: abdmStatus.dhisIncentives,
      tokensSummary: tokens,
      emergencyEvents: emergencyHistory
    };
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hospital-opd-summary-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast('OPD Operational telemetry report exported.');
  };

  const filteredTokens = tokens.filter(tok => {
    const matchesPriority = filterPriority === 'ALL' || tok.priority === filterPriority;
    const matchesQuery = tok.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tok.tokenNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tok.chiefComplaint.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPriority && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
                Hospital Administration & Emergency Triage Desk
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Real-time outpatient load, deterministic emergency alerts, and ABDM Digital Health Incentive Scheme (DHIS) telemetry.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            onClick={handleExportOPD}
            className="tactile-btn focus-ring px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Export Telemetry
          </button>
          <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            Central OPD Live
          </span>
        </div>
      </div>

      {/* Emergency Flash Feed if active */}
      {emergencyHistory.length > 0 && (
        <div 
          role="alert" 
          aria-live="assertive"
          className="p-5 bg-rose-50/90 dark:bg-rose-950/40 border-2 border-rose-500/80 rounded-3xl space-y-3 backdrop-blur-md shadow-lg"
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-rose-800 dark:text-rose-200 font-bold text-sm">
              <Siren className="w-5 h-5 text-rose-600 dark:text-rose-400 animate-bounce" />
              <span>DETERMINISTIC EMERGENCY TRIAGE OVERRIDES DETECTED ({emergencyHistory.length})</span>
            </div>
            <Badge variant="red">Immediate Resuscitation Required</Badge>
          </div>

          <div className="space-y-2">
            {emergencyHistory.map((em) => {
              const isAck = acknowledgedEmergencies[em.id];
              return (
                <div 
                  key={em.id} 
                  className={`p-3.5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-sm ${
                    isAck 
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/40' 
                      : 'bg-white dark:bg-slate-900/90 border-rose-200 dark:border-rose-500/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-rose-600 dark:text-rose-400 tabular-nums">{em.tokenNumber}</span>
                      <span className="font-bold text-slate-900 dark:text-white">{em.patientName}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
                        {em.category}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-[11px]">
                      Trigger: <span className="font-semibold text-rose-700 dark:text-rose-300">{em.matchedRule}</span> &mdash; "{em.rawSymptom}"
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px]">
                      Routing target: <span className="font-semibold text-slate-700 dark:text-slate-200">{em.destinationDepartment}</span>
                    </p>
                  </div>
                  <div>
                    {isAck ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold text-xs border border-emerald-500/30">
                        <Check className="w-3.5 h-3.5" /> Dispatched
                      </span>
                    ) : (
                      <button
                        onClick={() => handleAcknowledge(em.id, em.patientName, em.tokenNumber, em.destinationDepartment)}
                        className="tactile-btn focus-ring px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition-colors shadow-md flex items-center gap-1.5"
                      >
                        <Siren className="w-3.5 h-3.5" />
                        Acknowledge & Dispatch
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 8 Metric KPI Cards with Tabular Numbers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-teal-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>OPD Visits Today</span>
            <Users className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5 sm:mt-2 tabular-nums">128</div>
          <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold mt-1 tabular-nums">+18% vs yesterday</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-teal-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Digital Intake</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5 sm:mt-2 tabular-nums">104</div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 tabular-nums">81.2% digital</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-teal-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Waiting in Queue</span>
            <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5 sm:mt-2 tabular-nums">
            {tokens.filter(t => t.status === 'WAITING').length}
          </div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 tabular-nums">Avg wait: 8.4 mins</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-teal-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Emergency Triggers</span>
            <Siren className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 mt-1.5 sm:mt-2 tabular-nums">
            {emergencyHistory.length || 1}
          </div>
          <span className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold mt-1">Deterministic override</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-teal-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Documents TrOCR'd</span>
            <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5 sm:mt-2 tabular-nums">48</div>
          <span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold mt-1 tabular-nums">96.4% confidence</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-teal-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>ABHA / Guest Share</span>
            <Share2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5 sm:mt-2 tabular-nums">74% / 26%</div>
          <span className="text-[10px] text-sky-600 dark:text-sky-400 font-semibold mt-1">ABDM M1 compliant</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-teal-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>Vernacular Speech</span>
            <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5 sm:mt-2 tabular-nums">62%</div>
          <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold mt-1">Bhashini AI voice</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-teal-500/15 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-medium">
            <span>DHIS Revenue</span>
            <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1.5 sm:mt-2 tabular-nums">
            ₹{abdmStatus.dhisIncentives.totalIncentiveInr.toLocaleString()}
          </div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">NHA Corrigendum 7</span>
        </div>
      </div>

      {/* Live Queue Table with Search and Filtering */}
      <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 dark:border-teal-500/20 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white font-display">
              Live OPD Outpatient Queue & Consultation Rooms
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Synchronous queue distribution with deterministic priority routing
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patient, token..."
                className="w-full sm:w-56 pl-8 pr-3 py-2 sm:py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus-ring"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none">
              {(['ALL', 'EMERGENCY', 'FAST_TRACK', 'STANDARD'] as const).map(p => (
                <button
                  key={p}
                  onClick={() => setFilterPriority(p)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    filterPriority === p 
                      ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-300 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {p.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full min-w-[650px] text-left text-xs" aria-label="OPD Outpatient Queue Table">
            <thead className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th scope="col" className="px-4 py-3">Token No.</th>
                <th scope="col" className="px-4 py-3">Patient Name</th>
                <th scope="col" className="px-4 py-3">Age/Gender</th>
                <th scope="col" className="px-4 py-3">Chief Complaint</th>
                <th scope="col" className="px-4 py-3">Priority</th>
                <th scope="col" className="px-4 py-3">Assigned Room</th>
                <th scope="col" className="px-4 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredTokens.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-slate-500 dark:text-slate-400 text-xs">
                    No patient tokens matching filter criteria.
                  </td>
                </tr>
              ) : (
                filteredTokens.map((token) => (
                  <tr key={token.tokenNumber} className="hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-colors">
                    <td className="px-4 py-3 font-mono font-bold text-teal-600 dark:text-teal-400 tabular-nums">
                      {token.tokenNumber}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                      {token.patientName}
                    </td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400 tabular-nums">
                      {token.age} / {token.gender}
                    </td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      {token.chiefComplaint}
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={token.priority === 'EMERGENCY' ? 'red' : token.priority === 'FAST_TRACK' ? 'amber' : 'teal'}>
                        {token.priority}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300 font-medium">
                      {token.counterRoom}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Badge variant={token.status === 'IN_CONSULTATION' ? 'green' : token.status === 'CALLING' ? 'amber' : 'slate'}>
                        {token.status}
                      </Badge>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

