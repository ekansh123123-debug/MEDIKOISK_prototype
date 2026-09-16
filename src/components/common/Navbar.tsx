import React from 'react';
import { useApp, AppRole } from '../../context/AppContext';
import { IndianLanguage } from '../../types';
import { 
  Stethoscope, 
  User, 
  LayoutDashboard, 
  ShieldCheck, 
  Languages, 
  Siren, 
  Activity,
  RotateCcw
} from 'lucide-react';
import { Badge } from './Badge';

export const Navbar: React.FC = () => {
  const { 
    role, 
    setRole, 
    language, 
    setLanguage, 
    emergencyHistory,
    resetAll 
  } = useApp();

  const navItems: Array<{ id: AppRole; label: string; icon: React.ReactNode }> = [
    { id: 'landing', label: 'Overview', icon: <Activity className="w-4 h-4" /> },
    { id: 'patient', label: 'Patient Kiosk', icon: <User className="w-4 h-4" /> },
    { id: 'doctor', label: 'Clinician Workstation', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'admin', label: 'Triage & Queue Desk', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'privacy', label: 'Privacy & Governance', icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  const languages: Array<{ code: IndianLanguage; label: string; native: string }> = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0a0f1d]/85 backdrop-blur-xl border-b border-teal-500/15 shadow-lg shadow-black/20 transition-all">
      {/* Emergency Global Ticker if emergency triggered */}
      {emergencyHistory.length > 0 && (
        <div className="bg-rose-600/90 text-white px-4 py-1 text-xs font-bold flex items-center justify-between border-b border-rose-500 animate-pulse">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
            <Siren className="w-4 h-4 text-amber-200" />
            <span>CRITICAL TRIAGE ALERT: Patient {emergencyHistory[0].patientName} flagged for immediate Casualty care (Token: {emergencyHistory[0].tokenNumber})</span>
            <button 
              onClick={() => setRole('admin')}
              className="ml-auto underline hover:text-amber-200 text-xs font-semibold"
            >
              View Triage Feed &rarr;
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Product Identity */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setRole('landing')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 via-cyan-500 to-sky-400 flex items-center justify-center text-slate-950 shadow-md shadow-teal-500/20">
              <Stethoscope className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  MEDI<span className="text-teal-400">KOISK</span>
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  NRCeS FHIR R4
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                AI-Powered Clinical Intake & Triage Infrastructure
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800 backdrop-blur-md">
            {navItems.map((item) => {
              const active = role === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setRole(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active 
                      ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/30 shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls: Language Selector & Reset */}
          <div className="flex items-center gap-2.5">
            {/* Language Selector */}
            <div className="relative flex items-center">
              <Languages className="w-4 h-4 text-teal-400 absolute left-2.5 pointer-events-none" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as IndianLanguage)}
                className="pl-8 pr-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                title="Select Interface Language"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-slate-900 text-white">
                    {lang.native} ({lang.label})
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Reset */}
            <button
              onClick={resetAll}
              title="Reset system to default clinical state"
              className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation bar */}
      <div className="md:hidden flex overflow-x-auto gap-1 px-4 py-2 border-t border-slate-800 bg-slate-950/90">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setRole(item.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap font-medium ${
              role === item.id 
                ? 'bg-teal-600 text-white font-bold' 
                : 'text-slate-400 bg-slate-900 border border-slate-800'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
