import React from 'react';
import { Stethoscope, ShieldCheck, HeartHandshake, FileCheck, Building2, Lock, Sliders, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { setRole, toggleSettings } = useApp();

  return (
    <footer className="bg-[#0c1017] text-slate-400 border-t border-white/[0.07] text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* System Health Status Ribbon */}
        <div className="mb-10 p-4 rounded-2xl bg-[#111622] border border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-slate-200">
              System Ready & Operational
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">
              Private, Safe & Available Offline
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSettings}
              className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg px-2.5 py-1 transition-colors duration-150 cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Settings</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Col 1: Project Identity */}
          <div className="space-y-3.5 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo size="md" showSubtitle={true} />
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20 self-start mt-1 font-mono">
                Hospital Edition
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              Fast, friendly, and private patient check-in. Prepares your visit information in your native language so your doctor can spend more time examining and caring for you.
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-400 text-[11px]">
              <Building2 className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
              <span className="text-slate-300">Designed for Patient Comfort & Hospital Efficiency</span>
            </div>
          </div>

          {/* Col 2: Key Features */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase font-mono">Features & Safety</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
                <span>Paperless Doctor Sharing</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
                <span>ABHA Health Card Integration</span>
              </li>
              <li className="flex items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
                <span>Ayurvedic & Traditional Remedies</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
                <span>Strict Device-Level Privacy</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-xs tracking-wider uppercase font-mono">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => setRole('patient')} 
                  className="hover:text-teal-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1 py-0.5 cursor-pointer text-left"
                >
                  Patient Check-in (Self-Service)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRole('doctor')} 
                  className="hover:text-teal-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1 py-0.5 cursor-pointer text-left"
                >
                  Doctor&apos;s Workstation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRole('admin')} 
                  className="hover:text-teal-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1 py-0.5 cursor-pointer text-left"
                >
                  Hospital Queue & Triage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRole('privacy')} 
                  className="hover:text-teal-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1 py-0.5 cursor-pointer text-left"
                >
                  Privacy & Data Safety
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p className="tabular-nums">
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
