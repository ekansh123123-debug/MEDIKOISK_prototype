import React from 'react';
import { Stethoscope, ShieldCheck, HeartHandshake, FileCheck, Building2, Lock, Sliders, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { setRole, toggleSettings } = useApp();

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/90 text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* System Health Status Ribbon */}
        <div className="mb-8 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-slate-200">
              All Clinical & Interoperability Services Operational
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">
              NRCeS FHIR R4 Bundle v1.0 • ABDM M1–M4 Active
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSettings}
              className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1.5 py-0.5 cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Settings (Ctrl+,)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Project Identity */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo size="md" showSubtitle={true} />
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 self-start mt-1">
                Enterprise Clinical
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              AI-Powered Adaptive Patient Case-Taking for Faster, Smarter and Connected Healthcare. 
              Translating multilingual patient complaints into structured, doctor-ready SOAP summaries with verified source provenance before consultation starts.
            </p>
            <div className="flex items-center gap-2 pt-2 text-slate-400 text-[11px]">
              <Building2 className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
              <span className="text-slate-300">Hospital-Grade Outpatient & Inpatient Clinical Infrastructure</span>
            </div>
          </div>

          {/* Col 2: Interoperability Standards */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase">ABDM & Interoperability</h3>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                <span>NRCeS FHIR R4 Document Bundles</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                <span>ABDM Milestones M1, M2, M3 & M4</span>
              </li>
              <li className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                <span>Dual-Coding (ICD-11, NAMASTE, TM2)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
                <span>Fidelius ECDH Curve25519 Encryption</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase">Clinical Navigation</h3>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button 
                  onClick={() => setRole('patient')} 
                  className="hover:text-teal-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded cursor-pointer"
                >
                  Autonomous Patient Kiosk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRole('doctor')} 
                  className="hover:text-teal-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded cursor-pointer"
                >
                  Clinician EHR Workstation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRole('admin')} 
                  className="hover:text-teal-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded cursor-pointer"
                >
                  Emergency Triage & Queue Desk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRole('privacy')} 
                  className="hover:text-teal-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded cursor-pointer"
                >
                  DPDP 2023 Privacy & Audit Ledger
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            © 2025 MEDIKOISK Clinical Systems. Hospital Edition v1.0.4.
          </p>
          <p className="italic text-slate-400">
            Clinical Preparation & Interoperability Tool • Treating Clinician Retains Final Decision-Making
          </p>
        </div>
      </div>
    </footer>
  );
};
