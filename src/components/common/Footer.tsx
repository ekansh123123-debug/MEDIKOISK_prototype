import React from 'react';
import { Stethoscope, ShieldCheck, HeartHandshake, FileCheck, Building2, Lock } from 'lucide-react';
import { Badge } from './Badge';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060a14] text-slate-400 border-t border-slate-800 text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Project Identity */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-teal-500 to-cyan-400 text-slate-950 flex items-center justify-center font-bold">
                <Stethoscope className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight font-display">
                MEDIKOISK
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                Enterprise Clinical Edition
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              AI-Powered Adaptive Patient Case-Taking for Faster, Smarter and Connected Healthcare. 
              Converting raw multilingual patient intake into structured, verified, doctor-ready clinical summaries before consultation begins.
            </p>
            <div className="flex items-center gap-2 pt-2 text-slate-400 text-[11px]">
              <Building2 className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-slate-300">Hospital-Grade Outpatient & Inpatient Clinical Infrastructure</span>
            </div>
          </div>

          {/* Col 2: Interoperability Standards */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">ABDM & Interoperability</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-teal-400" />
                NRCeS FHIR R4 Document Bundles
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                ABDM Milestones M1, M2, M3 & M4
              </li>
              <li className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-teal-400" />
                Dual-Coding (ICD-11, NAMASTE, TM2)
              </li>
              <li className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-teal-400" />
                Fidelius ECDH Curve25519 Encryption
              </li>
            </ul>
          </div>

          {/* Col 3: Safety & Governance */}
          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Safety & Privacy</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Deterministic Emergency Red-Flag Engine</li>
              <li>Human-In-The-Loop Clinician Sign-off</li>
              <li>Source Provenance Click-to-Verify</li>
              <li>DPDP Act 2023 Consent Lifecycle</li>
              <li>DHIS Corrigendum 7 Incentive Tracker</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            © 2025 MEDIKOISK Clinical Systems. All rights reserved. Enterprise Healthcare Platform.
          </p>
          <p className="italic text-slate-400">
            Clinical Preparation & Interoperability Tool • Treating Clinician Retains Final Decision-Making
          </p>
        </div>
      </div>
    </footer>
  );
};
