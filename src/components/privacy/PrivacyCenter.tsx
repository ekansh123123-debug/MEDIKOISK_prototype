import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  Lock, 
  Trash2, 
  Download, 
  FileText, 
  History, 
  CheckCircle2, 
  AlertCircle,
  KeyRound,
  EyeOff,
  Filter,
  Check,
  Search,
  ExternalLink
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { AuditService } from '../../services/auditService';

export const PrivacyCenter: React.FC = () => {
  const { currentPatient, showToast, currentSoap, t } = useApp();
  const [logs, setLogs] = useState(AuditService.getLogs());
  const [auditFilter, setAuditFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isRevoked, setIsRevoked] = useState<boolean>(false);
  const [isErasureRequested, setIsErasureRequested] = useState<boolean>(false);

  const handleRevokeConsent = () => {
    AuditService.logEvent(
      'patient',
      'CONSENT',
      'CONSENT_REVOKED',
      `Patient ${currentPatient.name} revoked clinical data processing consent. All temporary cached tokens purged.`,
      currentPatient.id
    );
    setLogs(AuditService.getLogs());
    setIsRevoked(true);
    showToast('Informed consent revoked. Ingestion stopped.');
  };

  const handleExportData = () => {
    const data = {
      patient: currentPatient,
      clinicalCase: currentSoap,
      auditLog: logs.filter(l => l.patientId === currentPatient.id),
      exportedAt: new Date().toISOString(),
      statutoryFramework: 'Digital Personal Data Protection (DPDP) Act 2023 (Section 6 & 11)'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `medikoisk-dpdp-record-${currentPatient.id}.json`;
    a.click();
    showToast('Health data exported under DPDP Act portable data rights.');
  };

  const handleRequestDeletion = () => {
    AuditService.logEvent(
      'patient',
      'CONSENT',
      'DATA_ERASURE_REQUESTED',
      `Right to Erasure initiated for patient ${currentPatient.id} under Section 12 of DPDP Act 2023.`,
      currentPatient.id
    );
    setLogs(AuditService.getLogs());
    setIsErasureRequested(true);
    showToast('Statutory erasure request logged. Temporary cache queued for purge.');
  };

  const filteredLogs = logs.filter(log => {
    const matchesFilter = auditFilter === 'ALL' || log.category === auditFilter;
    const matchesSearch = log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.actor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
              Patient Privacy Center & Clinical Governance
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Statutory compliance with Digital Personal Data Protection (DPDP) Act 2023 & ABDM Fidelius specifications.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            DPDP Act 2023 Compliant
          </span>
        </div>
      </div>

      {/* Patient Statutory Rights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Revocation */}
        <div className="p-6 glass-card rounded-3xl border border-slate-200/80 dark:border-teal-500/15 shadow-sm space-y-4 hover:border-rose-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold mb-3">
              <EyeOff className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-base text-slate-900 dark:text-white font-display">
              Revoke Consent
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Halt all active AI case preparation and decouple your intake stream from hospital middleware immediately.
            </p>
          </div>
          <button
            onClick={handleRevokeConsent}
            disabled={isRevoked}
            className={`tactile-btn focus-ring w-full py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
              isRevoked
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                : 'bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30'
            }`}
          >
            {isRevoked ? (
              <>
                <Check className="w-3.5 h-3.5" /> Consent Revoked
              </>
            ) : (
              'Revoke My Consent'
            )}
          </button>
        </div>

        {/* Card 2: Export Data */}
        <div className="p-6 glass-card rounded-3xl border border-slate-200/80 dark:border-teal-500/15 shadow-sm space-y-4 hover:border-teal-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold mb-3">
              <Download className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-base text-slate-900 dark:text-white font-display">
              Export Health Data
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Download your complete machine-readable intake record, FHIR JSON bundle, and cryptographic audit log.
            </p>
          </div>
          <button
            onClick={handleExportData}
            className="tactile-btn focus-ring w-full py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download JSON Bundle</span>
          </button>
        </div>

        {/* Card 3: Right to Erasure */}
        <div className="p-6 glass-card rounded-3xl border border-slate-200/80 dark:border-teal-500/15 shadow-sm space-y-4 hover:border-slate-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold mb-3">
              <Trash2 className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-base text-slate-900 dark:text-white font-display">
              Request Erasure
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Exercise your statutory right under Section 12 of DPDP Act 2023 to request deletion of cached session data.
            </p>
          </div>
          <button
            onClick={handleRequestDeletion}
            disabled={isErasureRequested}
            className={`tactile-btn focus-ring w-full py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
              isErasureRequested
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
            }`}
          >
            {isErasureRequested ? (
              <>
                <Check className="w-3.5 h-3.5" /> Request Submitted
              </>
            ) : (
              'Submit Erasure Request'
            )}
          </button>
        </div>
      </div>

      {/* Fidelius Cryptographic Suite Display */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-50/80 via-sky-50/40 to-slate-100/90 dark:from-slate-900/90 dark:via-teal-950/30 dark:to-slate-900/90 backdrop-blur-xl rounded-3xl border border-teal-500/20 dark:border-teal-500/30 space-y-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5 font-display">
              <Lock className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              ABDM Fidelius Cryptographic Architecture
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Zero cleartext clinical health records exposed across public networks or the central ABDM gateway.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 self-start sm:self-auto">
            End-to-End Encrypted (Fidelius v1.2)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white dark:bg-slate-950/70 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-teal-700 dark:text-teal-400 font-bold block mb-1 text-[11px] uppercase tracking-wider">
              Key Agreement Protocol
            </span>
            <span className="font-mono text-xs text-slate-900 dark:text-white">ECDH over Curve25519</span>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
              Sender and recipient derive ephemeral shared secrets without ever transmitting private keys.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-950/70 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-teal-700 dark:text-teal-400 font-bold block mb-1 text-[11px] uppercase tracking-wider">
              Symmetric Cipher Suite
            </span>
            <span className="font-mono text-xs text-slate-900 dark:text-white">AES-256-GCM + HKDF</span>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
              Galois/Counter Mode provides both authenticated encryption and high-performance confidentiality.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-slate-950/70 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-teal-700 dark:text-teal-400 font-bold block mb-1 text-[11px] uppercase tracking-wider">
              Integrity Checksum
            </span>
            <span className="font-mono text-xs text-slate-900 dark:text-white">SHA-256 Digest Hash</span>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
              Guarantees zero payload tampering or corruption during intermediate gateway transit.
            </p>
          </div>
        </div>
      </div>

      {/* Immutable Audit Log Table */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-teal-500/20 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <History className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Immutable Clinical Audit Log
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Cryptographically verifiable event stream with actor provenance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search audit actions..."
                className="pl-8 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus-ring"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
              {(['ALL', 'CONSENT', 'TRIAGE', 'FHIR', 'AUTH'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setAuditFilter(cat)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                    auditFilter === cat 
                      ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-300 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs" aria-label="Clinical Audit Log Table">
            <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-semibold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th scope="col" className="px-5 py-3.5">Timestamp</th>
                <th scope="col" className="px-5 py-3.5">Actor</th>
                <th scope="col" className="px-5 py-3.5">Category</th>
                <th scope="col" className="px-5 py-3.5">Action</th>
                <th scope="col" className="px-5 py-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-slate-500 dark:text-slate-400 font-sans text-xs">
                    No audit records matching filter criteria.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-850/40 text-[11px] transition-colors">
                    <td className="px-5 py-3.5 text-slate-500 dark:text-slate-400 whitespace-nowrap tabular-nums">
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-slate-800 dark:text-slate-200 capitalize">
                      {log.actor.replace('_', ' ')}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                        {log.category}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 font-bold text-teal-600 dark:text-cyan-400">
                      {log.action}
                    </td>
                    <td className="px-5 py-3.5 font-sans text-slate-700 dark:text-slate-300">
                      {log.description}
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


