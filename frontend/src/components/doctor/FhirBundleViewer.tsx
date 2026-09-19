import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FhirService } from '../../services/fhirService';
import { Code, Copy, Check, ExternalLink, Layers, FileCheck } from 'lucide-react';
import { Badge } from '../common/Badge';

export const FhirBundleViewer: React.FC = () => {
  const { currentPatient, currentSoap, showToast } = useApp();
  const [copied, setCopied] = useState(false);
  const [activeResourceFilter, setActiveResourceFilter] = useState<'All' | 'Composition' | 'Patient' | 'Condition' | 'Observation' | 'MedicationRequest'>('All');

  if (!currentSoap) return null;

  const bundle = FhirService.generateDocumentBundle(currentPatient, currentSoap);

  const getFilteredJson = () => {
    if (activeResourceFilter === 'All') {
      return bundle;
    }
    const filteredEntries = bundle.entry.filter(
      e => e.resource.resourceType === activeResourceFilter
    );
    return {
      ...bundle,
      entry: filteredEntries
    };
  };

  const jsonString = JSON.stringify(getFilteredJson(), null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    showToast('FHIR R4 Bundle copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Header with Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/[0.07]">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              NRCeS FHIR Release 4 Document Bundle
            </h3>
            <Badge variant="teal" icon={<FileCheck className="w-3.5 h-3.5" />}>
              Composition as entry[0]
            </Badge>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Interoperable clinical document conforming to National Resource Centre for EHR Standards (NRCeS) profile.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm self-start sm:self-auto cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy JSON'}</span>
        </button>
      </div>

      {/* Resource Tab Filter */}
      <div className="flex flex-wrap gap-1.5 text-xs">
        {(['All', 'Composition', 'Patient', 'Condition', 'Observation', 'MedicationRequest'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveResourceFilter(tab)}
            className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
              activeResourceFilter === tab
                ? 'bg-slate-900 text-white dark:bg-teal-600 shadow-sm'
                : 'bg-slate-100 text-slate-600 dark:bg-[#161d2b] dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#202227] border border-transparent dark:border-white/[0.06]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Syntax Highlighted JSON Code Box */}
      <div className="relative rounded-2xl bg-[#0c0d10] text-slate-100 p-4 font-mono text-xs overflow-x-auto max-h-96 border border-white/[0.08] shadow-inner">
        <pre className="leading-relaxed">
          {jsonString}
        </pre>
      </div>

      {/* Technical Conformance Explanations */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 bg-slate-50 dark:bg-[#161d2b] rounded-xl border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400">
          <span className="font-bold text-slate-900 dark:text-white block mb-1">Mandatory entry[0]</span>
          Strict NRCeS hierarchy requires Composition resource at index 0 referencing Patient, HPR author & HFR custodian.
        </div>
        <div className="p-3 bg-slate-50 dark:bg-[#161d2b] rounded-xl border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400">
          <span className="font-bold text-slate-900 dark:text-white block mb-1">Dual-Coded Condition</span>
          Includes ICD-11 core diagnosis alongside AYUSH NAMASTE portal & WHO ICD-11 TM2 traditional medicine codes.
        </div>
        <div className="p-3 bg-slate-50 dark:bg-[#161d2b] rounded-xl border border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400">
          <span className="font-bold text-slate-900 dark:text-white block mb-1">Cryptographic Delivery</span>
          Ready for Fidelius ECDH Curve25519 key exchange & AES-256-GCM symmetric transport across ABDM gateway.
        </div>
      </div>
    </div>
  );
};
