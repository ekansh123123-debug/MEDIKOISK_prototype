import React from 'react';
import { useApp, AppRole } from '../../context/AppContext';
import { IndianLanguage } from '../../types';
import { 
  Stethoscope, 
  User, 
  LayoutDashboard, 
  ShieldCheck, 
  Sparkles, 
  Languages, 
  Siren, 
  FileText,
  RotateCcw,
  Activity
} from 'lucide-react';
import { Badge } from './Badge';

export const Navbar: React.FC = () => {
  const { 
    role, 
    setRole, 
    language, 
    setLanguage, 
    currentPatient, 
    emergencyAlert,
    emergencyHistory,
    resetAll 
  } = useApp();

  const navItems: Array<{ id: AppRole; label: string; icon: React.ReactNode }> = [
    { id: 'landing', label: 'Home', icon: <Activity className="w-4 h-4" /> },
    { id: 'patient', label: 'Patient Kiosk / PWA', icon: <User className="w-4 h-4" /> },
    { id: 'doctor', label: 'Doctor Workstation', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'admin', label: 'Hospital Admin & Triage', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'privacy', label: 'Privacy & Audit', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'demo', label: 'Live Demo Mode', icon: <Sparkles className="w-4 h-4" /> }
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
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      {/* Emergency Global Ticker if emergency triggered */}
      {emergencyHistory.length > 0 && (
        <div className="bg-red-600 text-white px-4 py-1 text-xs font-bold flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
            <Siren className="w-4 h-4 text-yellow-300" />
            <span>ACTIVE TRIAGE ESCALATION: Patient {emergencyHistory[0].patientName} flagged for immediate Casualty care (Token: {emergencyHistory[0].tokenNumber})</span>
            <span className="ml-auto underline cursor-pointer" onClick={() => setRole('admin')}>
              View Triage Feed &rarr;
            </span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Product Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setRole('landing')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white font-['Outfit']">
                  MEDI<span className="text-teal-600">KOISK</span>
                </span>
                <Badge variant="teal" className="text-[10px]">FHIR R4 & ABDM</Badge>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                AI-Powered Adaptive Patient Intake • Ctrl Z Squad
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            {navItems.map((item) => {
              const active = role === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setRole(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active 
                      ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls: Language Selector & Reset */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative flex items-center">
              <Languages className="w-4 h-4 text-slate-400 absolute left-2.5 pointer-events-none" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as IndianLanguage)}
                className="pl-8 pr-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                title="Select Patient Interface Language"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.native} ({lang.label})
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Demo Reset */}
            <button
              onClick={resetAll}
              title="Reset to fresh hackathon demo state"
              className="p-2 text-slate-500 hover:text-teal-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation bar */}
      <div className="md:hidden flex overflow-x-auto gap-1 px-4 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setRole(item.id)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap font-medium ${
              role === item.id 
                ? 'bg-teal-600 text-white' 
                : 'text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
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
