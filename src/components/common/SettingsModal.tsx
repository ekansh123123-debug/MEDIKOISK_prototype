import React, { useState, useEffect } from 'react';
import { useApp, AccentColor, FontSizeScale, GatewayMode } from '../../context/AppContext';
import { IndianLanguage } from '../../types';
import { 
  X, 
  Palette, 
  Languages, 
  Volume2, 
  MonitorSmartphone, 
  ShieldCheck, 
  FileText, 
  RotateCcw, 
  Download, 
  Check, 
  Sun, 
  Moon, 
  Sliders, 
  Eye, 
  Sparkles, 
  Cpu, 
  Lock, 
  Database,
  Printer,
  Clock,
  Radio,
  Activity
} from 'lucide-react';
import { AuditService } from '../../services/auditService';
import { StorageService } from '../../services/storageService';

type SettingsTab = 'appearance' | 'language' | 'kiosk' | 'abdm' | 'privacy' | 'diagnostics';

export const SettingsModal: React.FC = () => {
  const {
    isSettingsOpen,
    setIsSettingsOpen,
    theme,
    setTheme,
    accentColor,
    setAccentColor,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    reducedMotion,
    setReducedMotion,
    language,
    setLanguage,
    audioGuidance,
    setAudioGuidance,
    speechSpeed,
    setSpeechSpeed,
    kioskTimeoutSec,
    setKioskTimeoutSec,
    gatewayMode,
    setGatewayMode,
    soundEffects,
    setSoundEffects,
    resetSettings,
    loadDemoScenario,
    resetAll,
    showToast,
    t
  } = useApp();

  const [activeTab, setActiveTab] = useState<SettingsTab>('appearance');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSettingsOpen) {
        setIsSettingsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSettingsOpen, setIsSettingsOpen]);

  if (!isSettingsOpen) return null;

  const languages: Array<{ code: IndianLanguage; label: string; native: string; script: string }> = [
    { code: 'en', label: 'English', native: 'English', script: 'Latin' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी', script: 'Devanagari' },
    { code: 'mr', label: 'Marathi', native: 'मराठी', script: 'Devanagari' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்', script: 'Tamil' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা', script: 'Bengali' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు', script: 'Telugu' }
  ];

  const accentOptions: Array<{ id: AccentColor; label: string; hex: string; desc: string }> = [
    { id: 'teal', label: 'Clinical Emerald', hex: '#0d9488', desc: 'AIIMS clinical standard (Default)' },
    { id: 'cyan', label: 'Glacier Cyan', hex: '#0ea5e9', desc: 'High-visibility digital kiosk' },
    { id: 'indigo', label: 'Linear Indigo', hex: '#5E6AD2', desc: 'Modern clinician workstation' },
    { id: 'emerald', label: 'Precision Jade', hex: '#10b981', desc: 'High-contrast accessible theme' }
  ];

  const handleExportAuditLogs = () => {
    const logs = AuditService.getLogs();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `medikoisk-audit-trail-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported DPDP 2023 Audit Trail JSON');
  };

  const handleExportConsentLedger = () => {
    const consents = StorageService.getConsents();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(consents, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `medikoisk-dpdp-consents-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported DPDP 2023 Consent Ledger JSON');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md transition-all animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsSettingsOpen(false);
      }}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-all text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#090f1e]/80">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-500/20 shrink-0">
              <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 id="settings-dialog-title" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 sm:gap-2">
                Platform Preferences
                <span className="text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                  Settings
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                Aesthetics, Bhashini voice, kiosk hardware, and ABDM sandbox.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
              ESC to close
            </span>
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition-colors cursor-pointer"
              aria-label="Close settings panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-[#0a1122]/50 px-3 sm:px-4 overflow-x-auto scrollbar-none gap-1">
          {[
            { id: 'appearance', label: 'Appearance', icon: <Palette className="w-3.5 h-3.5" /> },
            { id: 'language', label: 'Language & Voice', icon: <Languages className="w-3.5 h-3.5" /> },
            { id: 'kiosk', label: 'Kiosk Station', icon: <MonitorSmartphone className="w-3.5 h-3.5" /> },
            { id: 'abdm', label: 'ABDM Sandbox', icon: <Activity className="w-3.5 h-3.5" /> },
            { id: 'privacy', label: 'Data & Privacy', icon: <Lock className="w-3.5 h-3.5" /> },
            { id: 'diagnostics', label: 'Diagnostics', icon: <Cpu className="w-3.5 h-3.5" /> }
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as SettingsTab)}
                className={`flex items-center gap-1.5 py-2.5 sm:py-3 px-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all cursor-pointer shrink-0 ${
                  active
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400 bg-white/70 dark:bg-slate-900/60'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6">
          {/* TAB 1: APPEARANCE */}
          {activeTab === 'appearance' && (
            <div className="space-y-6 animate-fade-in">
              {/* Theme Mode */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Interface Theme
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-md">
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`flex items-center justify-center gap-2.5 p-3 sm:p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      theme === 'light'
                        ? 'border-teal-500 bg-teal-50/50 dark:bg-teal-950/20 text-teal-900 dark:text-teal-200 ring-2 ring-teal-500/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Clean Clinical Light</span>
                    {theme === 'light' && <Check className="w-3.5 h-3.5 ml-auto text-teal-600" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className={`flex items-center justify-center gap-2.5 p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'border-teal-500 bg-teal-50/50 dark:bg-teal-950/20 text-teal-900 dark:text-teal-200 ring-2 ring-teal-500/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <Moon className="w-4 h-4 text-sky-400" />
                    <span>Linear Midnight Dark</span>
                    {theme === 'dark' && <Check className="w-3.5 h-3.5 ml-auto text-teal-400" />}
                  </button>
                </div>
              </div>

              {/* Accent Color Palette */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Primary Clinical Accent
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {accentOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAccentColor(opt.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        accentColor === opt.id
                          ? 'border-teal-500 bg-slate-100 dark:bg-slate-800/80 ring-2 ring-teal-500/20'
                          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: opt.hex }} />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          {opt.label}
                          {accentColor === opt.id && <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold">✓ Active</span>}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{opt.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Size Scaling */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Typography Scale & OPD Legibility
                  </label>
                  <span className="text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                    {fontSize === 'compact' ? 'Compact 90%' : fontSize === 'large' ? 'Large 115% (Senior Accessible)' : 'Standard 100%'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 max-w-md">
                  {(['compact', 'normal', 'large'] as FontSizeScale[]).map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setFontSize(sz)}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                        fontSize === sz
                          ? 'border-teal-500 bg-teal-500/10 text-teal-700 dark:text-teal-300 font-extrabold ring-1 ring-teal-500'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {sz === 'compact' ? 'A (Compact)' : sz === 'normal' ? 'A (Standard)' : 'A+ (Large)'}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Recommended: Use <strong>Large (115%)</strong> for public hospital touch kiosks where elderly patients read without glasses.
                </p>
              </div>

              {/* Accessibility Toggles */}
              <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Accessibility & Visual Guardrails
                </label>

                {/* High Contrast */}
                <div className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      High-Contrast Clinical Display Mode
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Increases card border contrast and text differentiation for low-quality OPD monitors.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={highContrast}
                      onChange={(e) => setHighContrast(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      Force Reduced Motion
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Disables soundwave animations, particle effects, and transitions (WCAG 2.2 AA compliant).
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reducedMotion}
                      onChange={(e) => setReducedMotion(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LANGUAGE & VOICE */}
          {activeTab === 'language' && (
            <div className="space-y-6 animate-fade-in">
              {/* Language Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Primary Patient Intake Language (Bhashini Pipeline)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {languages.map((lang) => {
                    const active = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => setLanguage(lang.code)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          active
                            ? 'border-teal-500 bg-teal-500/10 text-teal-800 dark:text-teal-300 ring-2 ring-teal-500/20'
                            : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="text-sm font-bold text-slate-900 dark:text-white font-display">
                          {lang.native}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between mt-0.5">
                          <span>{lang.label}</span>
                          <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-bold">{lang.script}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Speech & Audio Guidance */}
              <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Spoken Guidance & Audio Engine
                </label>

                {/* Audio Guidance Toggle */}
                <div className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      Automatic Spoken Prompt Audio (TTS)
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Reads out questions in vernacular language for illiterate or low-literacy patients.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={audioGuidance}
                      onChange={(e) => setAudioGuidance(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>

                {/* Speech Playback Speed */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 dark:text-white">Speech Playback Rate</span>
                    <span className="font-mono text-teal-600 dark:text-teal-400 font-bold">{speechSpeed}x</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[0.8, 1.0, 1.2].map((speed) => (
                      <button
                        key={speed}
                        type="button"
                        onClick={() => setSpeechSpeed(speed)}
                        className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all ${
                          speechSpeed === speed
                            ? 'bg-teal-500 text-slate-950 border-teal-500 font-extrabold'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {speed === 0.8 ? 'Slow (0.8x)' : speed === 1.0 ? 'Normal (1.0x)' : 'Fast (1.2x)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sound Effects */}
                <div className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Tactile Audio Chimes & Confetti
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Plays subtle confirmation feedback when ticket is issued or OCR finishes.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={soundEffects}
                      onChange={(e) => setSoundEffects(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: KIOSK & STATION */}
          {activeTab === 'kiosk' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Kiosk Session Auto-Reset Timer
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[30, 60, 120, 0].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => setKioskTimeoutSec(sec)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        kioskTimeoutSec === sec
                          ? 'border-teal-500 bg-teal-500/10 text-teal-800 dark:text-teal-300 font-bold ring-2 ring-teal-500/20'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <Clock className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                      <div className="text-xs font-bold">{sec === 0 ? 'Disabled' : `${sec}s`}</div>
                      <div className="text-[10px] text-slate-500">{sec === 0 ? 'No timeout' : 'Inactivity'}</div>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  In a public hospital waiting hall, kiosk sessions should reset to the Welcome screen after 60 seconds of inactivity to protect patient privacy.
                </p>
              </div>

              {/* Hardware simulation */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Thermal Ticket Printer Emulation</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    ESC/POS Ready
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Configured for standard 80mm thermal receipt roll with QR code payload, room routing, and offline barcode verification.
                </p>
              </div>

              {/* Assigned OPD Room */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white block">Assigned Doctor / OPD Room</span>
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-semibold">Room 4: Dr. A. K. Shukla (General Medicine)</span>
                  <span className="text-teal-600 dark:text-teal-400 font-bold">OPD Block B</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ABDM SANDBOX */}
          {activeTab === 'abdm' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Gateway Integration Environment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'mock_sandbox', label: 'Local Mock Sandbox', desc: 'Instant responses with simulated NRCeS FHIR R4 validators' },
                    { id: 'live_staging', label: 'ABDM Staging v0.5', desc: 'Connected to dev.abdm.gov.in sandbox environment' },
                    { id: 'offline_pwa', label: 'Offline PWA Cache', desc: 'Operates in remote clinics without active internet' }
                  ].map((env) => (
                    <button
                      key={env.id}
                      type="button"
                      onClick={() => setGatewayMode(env.id as GatewayMode)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        gatewayMode === env.id
                          ? 'border-teal-500 bg-teal-500/10 text-teal-800 dark:text-teal-300 font-bold ring-2 ring-teal-500/20'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white mb-1">
                        <Radio className={`w-3 h-3 ${gatewayMode === env.id ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400'}`} />
                        {env.label}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        {env.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Milestone Status Grid */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Active ABDM Milestones
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { m: 'M1', title: 'ABHA Identity', status: 'Active (v2.0)' },
                    { m: 'M2', title: 'HIP Provider', status: 'Active (v1.0)' },
                    { m: 'M3', title: 'HIU User', status: 'Active (v1.0)' },
                    { m: 'M4', title: 'NHCX Claims', status: 'Ready (FHIR)' }
                  ].map((item) => (
                    <div key={item.m} className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                      <span className="text-[10px] font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-widest block">{item.m}</span>
                      <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">{item.title}</div>
                      <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Encryption Module */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Fidelius ECDH Curve25519 Key Module</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">HKDF-SHA256 with hardware-derived ephemeral keypairs</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-teal-700 dark:text-teal-300 bg-teal-500/10 px-2 py-1 rounded-lg border border-teal-500/20">
                  ONLINE
                </span>
              </div>
            </div>
          )}

          {/* TAB 5: DATA & PRIVACY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  DPDP Act 2023 Compliance & Data Portability
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleExportAuditLogs}
                    className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 text-left transition-all cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        Export Audit Trail (JSON)
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Download cryptographically signed audit log.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleExportConsentLedger}
                    className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 text-left transition-all cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        Export Consent Ledger (JSON)
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Download active DPDP consent records.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Demo Scenario Selectors */}
              <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Instant Clinical Test Scenarios
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => { loadDemoScenario('abdominal'); setIsSettingsOpen(false); }}
                    className="p-2.5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 text-left cursor-pointer"
                  >
                    <div className="font-bold text-slate-800 dark:text-slate-200">Scenario A: Abdominal Pain DAG</div>
                    <div className="text-[11px] text-slate-500">Rohan Kulkarni, 28M • Food relationship</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { loadDemoScenario('ocr'); setIsSettingsOpen(false); }}
                    className="p-2.5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 text-left cursor-pointer"
                  >
                    <div className="font-bold text-slate-800 dark:text-slate-200">Scenario B: TrOCR Prescription</div>
                    <div className="text-[11px] text-slate-500">Sunita Deshmukh, 52F • Verify low-conf items</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { loadDemoScenario('emergency'); setIsSettingsOpen(false); }}
                    className="p-2.5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-900/40 hover:border-rose-500 text-left cursor-pointer"
                  >
                    <div className="font-bold text-rose-700 dark:text-rose-300">🚨 Scenario D: Chest Pain Emergency</div>
                    <div className="text-[11px] text-rose-600/80 dark:text-rose-400/80">Deterministic red-flag safety escalation</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { loadDemoScenario('doctor_approve'); setIsSettingsOpen(false); }}
                    className="p-2.5 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 text-left cursor-pointer"
                  >
                    <div className="font-bold text-slate-800 dark:text-slate-200">Scenario E: Clinician Workstation</div>
                    <div className="text-[11px] text-slate-500">Dr. Shukla review, provenance & sign-off</div>
                  </button>
                </div>
              </div>

              {/* Reset to defaults */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Need to restore all clinical demo data?
                </span>
                <button
                  type="button"
                  onClick={() => { resetAll(); setIsSettingsOpen(false); }}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All to Defaults</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: DIAGNOSTICS */}
          {activeTab === 'diagnostics' && (
            <div className="space-y-4 animate-fade-in text-xs">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="font-bold text-slate-900 dark:text-white">Core Clinical Algorithms</span>
                  <span className="text-teal-600 dark:text-teal-400 font-mono font-bold">STATUS</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Entropy DAG Clinical Engine:</span>
                    <span className="font-mono text-slate-900 dark:text-white">v2.4.1 (Shannon Entropy Weighted)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Deterministic Safety Gate:</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE (0% hallucination risk)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">TrOCR Prescription OCR Engine:</span>
                    <span className="font-mono text-slate-900 dark:text-white">Microsoft TrOCR + BioBERT NLP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Bhashini Multilingual ASR/TTS:</span>
                    <span className="font-mono text-slate-900 dark:text-white">Bhashini IndicConformer (6 Languages)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Dual-Coding Ontology:</span>
                    <span className="font-mono text-slate-900 dark:text-white">ICD-11 MMS + NAMASTE + ICD-11 TM2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">FHIR R4 Bundle Profile:</span>
                    <span className="font-mono text-teal-600 dark:text-teal-400">NRCeS OPConsultRecord Profile v1.0</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-teal-50/50 dark:bg-teal-950/20 rounded-xl border border-teal-500/20 text-[11px] text-teal-900 dark:text-teal-200">
                <strong>Platform Build:</strong> MEDIKOISK Enterprise v1.0.4 • Vite 5 • React 18.3 • TailwindCSS • Knowledge Graph verified at <code className="font-mono">graphify-out/graph.json</code>.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#090f1e]/90 text-xs">
          <button
            type="button"
            onClick={resetSettings}
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restore Default Settings</span>
          </button>

          <button
            type="button"
            onClick={() => setIsSettingsOpen(false)}
            className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-md shadow-teal-600/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
