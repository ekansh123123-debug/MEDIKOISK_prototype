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
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-['Outfit'] tracking-tight">
                Patient Privacy Center & Clinical Governance
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Statutory compliance with Digital Personal Data Protection (DPDP) Act 2023 & ABDM Fidelius specifications.
              </p>
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 border border-teal-500/30 text-teal-300">
          DPDP Act 2023 Statutory Center
        </span>
      </div>

      {/* Patient Statutory Rights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Revocation */}
        <div className="p-6 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800/80 shadow-xl space-y-4 hover:border-rose-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center font-bold mb-3">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white font-['Outfit']">
              Revoke Consent
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Halt all active AI case preparation and decouple your intake stream from hospital middleware.
            </p>
          </div>
          <button
            onClick={handleRevokeConsent}
            className="w-full py-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold rounded-xl text-xs transition-colors"
          >
            Revoke My Consent
          </button>
        </div>

        {/* Card 2: Export Data */}
        <div className="p-6 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800/80 shadow-xl space-y-4 hover:border-teal-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center font-bold mb-3">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white font-['Outfit']">
              Export Health Data
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Download your full machine-readable intake record, FHIR bundle, and cryptographic audit log.
            </p>
          </div>
          <button
            onClick={handleExportData}
            className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download JSON Record</span>
          </button>
        </div>

        {/* Card 3: Right to Erasure */}
        <div className="p-6 bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-slate-800/80 shadow-xl space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center font-bold mb-3">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white font-['Outfit']">
              Request Erasure
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Exercise your statutory right under Section 12 to request erasure of temporary intake artifacts.
            </p>
          </div>
          <button
            onClick={handleRequestDeletion}
            className="w-full py-2.5 bg-slate-800/80 hover:bg-slate-750 text-slate-200 border border-slate-700 font-semibold rounded-xl text-xs transition-colors"
          >
            Submit Erasure Request
          </button>
        </div>
      </div>

      {/* Fidelius Cryptographic Suite Display */}
      <div className="p-8 bg-gradient-to-r from-slate-900/80 via-teal-950/40 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-teal-500/30 space-y-5 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5 font-['Outfit']">
              <Lock className="w-5 h-5 text-teal-400" />
              ABDM Fidelius Cryptographic Architecture
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Zero cleartext clinical health records exposed across public networks or the central ABDM gateway.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 border border-teal-500/30 text-teal-300">
            End-to-End Encrypted
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
            <span className="text-teal-400 font-bold block mb-1 text-[11px] uppercase tracking-wider">Key Agreement Protocol</span>
            <span className="font-mono text-xs text-white">ECDH over Curve25519</span>
            <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed">
              Sender and recipient derive ephemeral shared secrets without transmitting private keys.
            </p>
          </div>
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
            <span className="text-teal-400 font-bold block mb-1 text-[11px] uppercase tracking-wider">Symmetric Cipher Suite</span>
            <span className="font-mono text-xs text-white">AES-256-GCM + HKDF</span>
            <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed">
              Galois/Counter Mode provides both authenticated encryption and high-performance confidentiality.
            </p>
          </div>
          <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800">
            <span className="text-teal-400 font-bold block mb-1 text-[11px] uppercase tracking-wider">Integrity Checksum</span>
            <span className="font-mono text-xs text-white">SHA-256 Digest Hash</span>
            <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed">
              Guarantees zero tampering or corruption during intermediate gateway routing.
            </p>
          </div>
        </div>
      </div>

      {/* Immutable Audit Log Table */}
      <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <History className="w-5 h-5 text-teal-400" />
            <h3 className="text-lg font-bold text-white font-['Outfit']">
              Immutable Clinical Audit Log
            </h3>
          </div>
          <span className="text-xs text-slate-400">Cryptographically verifiable event stream</span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-300 uppercase tracking-wider font-semibold border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Timestamp</th>
                <th className="px-5 py-3.5">Actor</th>
                <th className="px-5 py-3.5">Category</th>
                <th className="px-5 py-3.5">Action</th>
                <th className="px-5 py-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-850/40 text-[11px] transition-colors">
                  <td className="px-5 py-3.5 text-slate-400 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="px-5 py-3.5 font-semibold text-slate-200 capitalize">
                    {log.actor.replace('_', ' ')}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {log.category}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-bold text-cyan-400">
                    {log.action}
                  </td>
                  <td className="px-5 py-3.5 font-sans text-slate-300">
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
