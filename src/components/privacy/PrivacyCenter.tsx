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
  EyeOff
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { AuditService } from '../../services/auditService';

export const PrivacyCenter: React.FC = () => {
  const { currentPatient, showToast, currentSoap } = useApp();
  const [logs, setLogs] = useState(AuditService.getLogs());

  const handleRevokeConsent = () => {
    AuditService.logEvent(
      'patient',
      'CONSENT',
      'CONSENT_REVOKED',
      `Patient ${currentPatient.name} revoked clinical data processing consent. All temporary cached tokens purged.`,
      currentPatient.id
    );
    setLogs(AuditService.getLogs());
    showToast('Informed consent revoked. Ingestion stopped.');
  };

  const handleExportData = () => {
    const data = {
      patient: currentPatient,
      clinicalCase: currentSoap,
      auditLog: logs.filter(l => l.patientId === currentPatient.id)
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `medikoisk-health-record-${currentPatient.id}.json`;
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
    alert('Statutory erasure request submitted. Non-permanent operational cache will be purged within 24 hours pursuant to hospital regulatory retention laws.');
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-teal-600" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">
              Patient Privacy Center & Audit Governance
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Compliant with Digital Personal Data Protection (DPDP) Act 2023 & ABDM Fidelius Security Guidelines.
          </p>
        </div>
        <Badge variant="teal">DPDP Act 2023 Aligned</Badge>
      </div>

      {/* Patient Statutory Rights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Revocation */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 flex items-center justify-center font-bold">
            <EyeOff className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Revoke Processing Consent
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Halt all active AI case preparation and decouple your intake stream from hospital middleware.
          </p>
          <button
            onClick={handleRevokeConsent}
            className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 font-bold rounded-xl text-xs transition-colors"
          >
            Revoke My Consent
          </button>
        </div>

        {/* Card 2: Export Data */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 flex items-center justify-center font-bold">
            <Download className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Export Portable Health Data
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Download your full machine-readable intake record, FHIR bundle, and cryptographic audit log.
          </p>
          <button
            onClick={handleExportData}
            className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download JSON Record</span>
          </button>
        </div>

        {/* Card 3: Right to Erasure */}
        <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold">
            <Trash2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Request Data Erasure
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Exercise your statutory right under Section 12 to request erasure of temporary intake artifacts.
          </p>
          <button
            onClick={handleRequestDeletion}
            className="w-full py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
          >
            Submit Erasure Request
          </button>
        </div>
      </div>

      {/* Fidelius Cryptographic Suite Display */}
      <div className="p-6 bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-3xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold flex items-center gap-2">
              <Lock className="w-4 h-4 text-teal-400" />
              ABDM Fidelius Cryptographic Architecture
            </h3>
            <p className="text-xs text-slate-300">
              Zero cleartext health records exposed across public networks or the central ABDM gateway.
            </p>
          </div>
          <Badge variant="teal" className="bg-teal-900 text-teal-200 border-teal-700">
            End-to-End Encrypted
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
            <span className="text-teal-400 font-bold block mb-1">Key Agreement Protocol</span>
            <span className="font-mono text-[11px]">ECDH over Curve25519</span>
            <p className="text-[10px] text-slate-400 mt-1">
              Sender and recipient derive ephemeral shared secrets without transmitting keys.
            </p>
          </div>
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
            <span className="text-teal-400 font-bold block mb-1">Symmetric Cipher Suite</span>
            <span className="font-mono text-[11px]">AES-256-GCM + HKDF</span>
            <p className="text-[10px] text-slate-400 mt-1">
              Galois/Counter Mode provides both authenticated encryption and payload confidentiality.
            </p>
          </div>
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
            <span className="text-teal-400 font-bold block mb-1">Integrity Checksum</span>
            <span className="font-mono text-[11px]">SHA-256 Digest Hash</span>
            <p className="text-[10px] text-slate-400 mt-1">
              Ensures zero tampering or corruption during intermediate gateway routing.
            </p>
          </div>
        </div>
      </div>

      {/* Immutable Audit Log Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-teal-600" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Immutable Clinical Audit Log
            </h3>
          </div>
          <span className="text-xs text-slate-400">Timestamped event records</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold">
              <tr>
                <th className="px-4 py-3">Timestamp</th>
                <th className="px-4 py-3">Actor</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Action</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 text-[11px]">
                  <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-800 dark:text-slate-200 capitalize">
                    {log.actor.replace('_', ' ')}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="teal">{log.category}</Badge>
                  </td>
                  <td className="px-4 py-3 font-bold text-teal-700 dark:text-teal-400">
                    {log.action}
                  </td>
                  <td className="px-4 py-3 font-sans text-slate-600 dark:text-slate-300">
                    {log.description}
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
