import React from 'react';
import { useApp, AppRole } from '../../context/AppContext';
import { IndianLanguage } from '../../types';
import { Logo } from './Logo';
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
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#08090a]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.07] shadow-sm dark:shadow-black/40 transition-colors duration-200">
      {/* Emergency Global Ticker if emergency triggered */}
      {emergencyHistory.length > 0 && (
        <div 
          role="alert"
          aria-live="assertive"
          className="bg-rose-600 text-white px-3 sm:px-4 py-1.5 text-xs font-bold border-b border-rose-700 animate-pulse"
        >
          <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto w-full flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-2 min-w-0">
              <Siren className="w-4 h-4 text-amber-200 animate-bounce shrink-0" aria-hidden="true" />
              <span className="truncate text-[11px] sm:text-xs">
                CRITICAL TRIAGE: {emergencyHistory[0].patientName} (Token: {emergencyHistory[0].tokenNumber})
              </span>
            </div>
            <button 
              onClick={() => setRole('admin')}
              className="ml-auto underline hover:text-amber-200 text-[11px] sm:text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded cursor-pointer whitespace-nowrap"
            >
              View Triage &rarr;
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo & Product Identity */}
          <button 
            type="button"
            className="flex items-center gap-2 select-none text-left rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer min-w-0" 
            onClick={() => setRole('landing')}
            aria-label="MEDIKOISK Home Overview"
          >
            <Logo size="md" showSubtitle={false} className="hidden sm:flex" />
            <Logo size="sm" showSubtitle={false} className="flex sm:hidden" />
          </button>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-[#101114] p-1.5 rounded-xl border border-slate-200 dark:border-white/[0.07] backdrop-blur-md">
            {navItems.map((item) => {
              const active = role === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setRole(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
                    active 
                      ? 'bg-white dark:bg-[#16171b] text-teal-700 dark:text-teal-300 border border-slate-200 dark:border-white/[0.1] shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#16171b]/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls: Language Selector, Theme Switcher, Settings Panel & Reset */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Selector */}
            <div className="relative flex items-center shrink-0">
              <Languages className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 absolute left-2 pointer-events-none z-10" aria-hidden="true" />
              <label htmlFor="navbar-lang-select" className="sr-only">Select language</label>
              <select
                id="navbar-lang-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value as IndianLanguage)}
                className="pl-6 sm:pl-8 pr-2 sm:pr-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-lg bg-slate-100 dark:bg-[#101114] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer shadow-sm"
                title={t.selectLanguage}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-white dark:bg-[#16171b] text-slate-900 dark:text-white">
                    {lang.code.toUpperCase()} ({lang.native})
                  </option>
                ))}
              </select>
            </div>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? t.lightMode : t.darkMode}
              className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-100 dark:bg-[#16171b] hover:bg-slate-200 dark:hover:bg-[#202227] rounded-lg transition-colors border border-slate-200 dark:border-white/[0.08] shadow-sm flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer shrink-0"
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
              className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-100 dark:bg-[#16171b] hover:bg-slate-200 dark:hover:bg-[#202227] rounded-lg transition-colors border border-slate-200 dark:border-white/[0.08] shadow-sm flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer group shrink-0"
              aria-label="Open settings panel (Shortcut: Ctrl+, or Cmd+,)"
            >
              <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" aria-hidden="true" />
            </button>

            {/* Quick Reset */}
            <button
              onClick={resetAll}
              title="Reset system to default clinical state"
              className="p-1.5 sm:p-2 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-100 dark:bg-[#16171b] hover:bg-slate-200 dark:hover:bg-[#202227] rounded-lg transition-colors border border-slate-200 dark:border-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer shrink-0"
              aria-label="Reset platform to defaults"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
