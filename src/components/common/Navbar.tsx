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
  RotateCcw, 
  Sun, 
  Moon, 
  Settings 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    role, 
    setRole, 
    language, 
    setLanguage, 
    theme, 
    toggleTheme, 
    toggleSettings,
    t, 
    emergencyHistory, 
    resetAll 
  } = useApp();

  const navItems: Array<{ id: AppRole; label: string; icon: React.ReactNode }> = [
    { id: 'landing', label: t.navOverview, icon: <Activity className="w-4 h-4" aria-hidden="true" strokeWidth={1.8} /> },
    { id: 'patient', label: t.navPatientKiosk, icon: <User className="w-4 h-4" aria-hidden="true" strokeWidth={1.8} /> },
    { id: 'doctor', label: t.navClinicianWorkstation, icon: <Stethoscope className="w-4 h-4" aria-hidden="true" strokeWidth={1.8} /> },
    { id: 'admin', label: t.navTriageDesk, icon: <LayoutDashboard className="w-4 h-4" aria-hidden="true" strokeWidth={1.8} /> },
    { id: 'privacy', label: t.navPrivacyGovernance, icon: <ShieldCheck className="w-4 h-4" aria-hidden="true" strokeWidth={1.8} /> }
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
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#0a0f1d]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-teal-500/15 shadow-sm dark:shadow-lg dark:shadow-black/20 transition-colors duration-200">
      {/* Emergency Global Ticker if emergency triggered */}
      {emergencyHistory.length > 0 && (
        <div 
          role="alert"
          aria-live="assertive"
          className="bg-rose-600 text-white px-4 py-1.5 text-xs font-bold flex items-center justify-between border-b border-rose-700 animate-pulse"
        >
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
            <Siren className="w-4 h-4 text-amber-200 animate-bounce" aria-hidden="true" />
            <span>CRITICAL TRIAGE ALERT: Patient {emergencyHistory[0].patientName} flagged for immediate Casualty care (Token: {emergencyHistory[0].tokenNumber})</span>
            <button 
              onClick={() => setRole('admin')}
              className="ml-auto underline hover:text-amber-200 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded cursor-pointer"
            >
              View Triage Feed &rarr;
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Product Identity */}
          <button 
            type="button"
            className="flex items-center gap-3 select-none text-left rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer" 
            onClick={() => setRole('landing')}
            aria-label="MEDIKOISK Home Overview"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 via-cyan-500 to-sky-400 flex items-center justify-center text-slate-950 shadow-md shadow-teal-500/20">
              <Stethoscope className="w-6 h-6 text-slate-950" aria-hidden="true" strokeWidth={2} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white font-display">
                  MEDI<span className="text-teal-600 dark:text-teal-400">KOISK</span>
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                  NRCeS FHIR R4
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                {t.brandTagline}
              </p>
            </div>
          </button>

          {/* Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-md">
            {navItems.map((item) => {
              const active = role === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setRole(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
                    active 
                      ? 'bg-white dark:bg-gradient-to-r dark:from-teal-500/20 dark:to-cyan-500/20 text-teal-700 dark:text-teal-300 border border-slate-200 dark:border-teal-500/30 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls: Language Selector, Theme Switcher, Settings Panel & Reset */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language Selector */}
            <div className="relative flex items-center">
              <Languages className="w-4 h-4 text-teal-600 dark:text-teal-400 absolute left-2.5 pointer-events-none" aria-hidden="true" />
              <label htmlFor="navbar-lang-select" className="sr-only">Select language</label>
              <select
                id="navbar-lang-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value as IndianLanguage)}
                className="pl-8 pr-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer shadow-sm"
                title={t.selectLanguage}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    {lang.native} ({lang.label})
                  </option>
                ))}
              </select>
            </div>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? t.lightMode : t.darkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
              aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
              )}
            </button>

            {/* Settings Trigger Button */}
            <button
              onClick={toggleSettings}
              title="Platform Settings & Preferences (Ctrl+, / ⌘,)"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer group"
              aria-label="Open settings panel (Shortcut: Ctrl+, or Cmd+,)"
            >
              <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" aria-hidden="true" />
            </button>

            {/* Quick Reset */}
            <button
              onClick={resetAll}
              title="Reset system to default clinical state"
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
              aria-label="Reset platform to defaults"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation bar */}
      <div className="md:hidden flex overflow-x-auto gap-1 px-4 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-950/90">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setRole(item.id)}
            aria-current={role === item.id ? 'page' : undefined}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
              role === item.id 
                ? 'bg-teal-600 text-white font-bold' 
                : 'text-slate-700 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </header>
  );
};
