import React, { useState, useEffect } from 'react';
import { useApp, AccentColor, FontSizeScale, ReadingWidth } from '../../context/AppContext';
import { IndianLanguage } from '../../types';
import { 
  X, 
  Palette, 
  Languages, 
  Volume2, 
  RotateCcw, 
  Download, 
  Check, 
  Sun, 
  Moon, 
  Sliders, 
  Eye, 
  Sparkles, 
  HardDrive,
  Trash2,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { StorageService } from '../../services/storageService';

type SettingsTab = 'appearance' | 'voice' | 'storage';

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
    readingWidth,
    setReadingWidth,
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
    soundEffects,
    setSoundEffects,
    resetSettings,
    resetAll,
    showToast
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

  const languages: Array<{ code: IndianLanguage; label: string; native: string }> = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' }
  ];

  const accentOptions: Array<{ id: AccentColor; label: string; hex: string; desc: string }> = [
    { id: 'teal', label: 'Clinical Emerald', hex: '#0d9488', desc: 'Calm, clear hospital green' },
    { id: 'cyan', label: 'Ocean Cyan', hex: '#0284c7', desc: 'Bright, vibrant digital blue' },
    { id: 'indigo', label: 'Royal Indigo', hex: '#4f46e5', desc: 'Modern high-focus slate blue' },
    { id: 'amber', label: 'Warm Amber', hex: '#d97706', desc: 'Soft, welcoming golden tone' }
  ];

  const fontOptions: Array<{ id: FontSizeScale; label: string; percent: string }> = [
    { id: 'compact', label: 'Small', percent: '90%' },
    { id: 'normal', label: 'Normal', percent: '100%' },
    { id: 'large', label: 'Large', percent: '115%' },
    { id: 'xlarge', label: 'Extra Large', percent: '130%' }
  ];

  const handleExportBackup = () => {
    const patients = StorageService.getPatients();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      exportedAt: new Date().toISOString(),
      patients
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `medikoisk-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Saved a backup copy to your downloads.');
  };

  const handleResetAllVisit = () => {
    if (window.confirm('Clear current visit data and return to the beginning?')) {
      resetAll();
      setIsSettingsOpen(false);
      showToast('Visit cleared. Starting fresh.');
    }
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
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/[0.08] shadow-2xl overflow-hidden transition-all text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-white/[0.07] bg-slate-50/80 dark:bg-[#161d2b]/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-500/20 shrink-0">
              <Sliders className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="settings-dialog-title" className="text-base font-bold text-slate-900 dark:text-white">
                Customize Your Experience
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Adjust text size, colors, sound, and comfort options.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#161d2b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition-colors cursor-pointer"
              aria-label="Close settings"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* 3 Intuitive Tabs */}
        <div className="flex items-center px-4 sm:px-6 border-b border-slate-200 dark:border-white/[0.07] bg-slate-100/50 dark:bg-[#131926] gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('appearance')}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'appearance'
                ? 'border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" aria-hidden="true" />
            <span>Appearance & Size</span>
          </button>

          <button
            onClick={() => setActiveTab('voice')}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'voice'
                ? 'border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Volume2 className="w-4 h-4" aria-hidden="true" />
            <span>Language & Sound</span>
          </button>

          <button
            onClick={() => setActiveTab('storage')}
            className={`flex items-center gap-2 py-3 px-3 text-xs font-bold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'storage'
                ? 'border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <HardDrive className="w-4 h-4" aria-hidden="true" />
            <span>Data on This Device</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* TAB 1: APPEARANCE & SIZE */}
          {activeTab === 'appearance' && (
            <div className="space-y-6 animate-fade-in">
              {/* Theme Mode */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2.5">
                  Screen Mode (Light or Dark)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                      theme === 'light'
                        ? 'border-teal-500 bg-teal-500/10 text-slate-900 dark:text-white shadow-sm ring-1 ring-teal-500'
                        : 'border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b]'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                      <Sun className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold">Light Mode</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Bright daylight display</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'border-teal-500 bg-teal-500/10 text-slate-900 dark:text-white shadow-sm ring-1 ring-teal-500'
                        : 'border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b]'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                      <Moon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold">Dark Mode</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Gentle on tired eyes</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Accent Color Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2.5">
                  Color Accent
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {accentOptions.map((accent) => {
                    const active = accentColor === accent.id;
                    return (
                      <button
                        key={accent.id}
                        type="button"
                        onClick={() => setAccentColor(accent.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          active
                            ? 'border-teal-500 bg-teal-500/10 ring-1 ring-teal-500'
                            : 'border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span 
                            className="w-5 h-5 rounded-full shadow-inner inline-block" 
                            style={{ backgroundColor: accent.hex }}
                            aria-hidden="true"
                          />
                          {active && <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />}
                        </div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{accent.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{accent.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Font Size & Live Preview */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Text Size
                  </label>
                  <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                    {fontOptions.find(f => f.id === fontSize)?.label} ({fontOptions.find(f => f.id === fontSize)?.percent})
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {fontOptions.map((opt) => {
                    const active = fontSize === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFontSize(opt.id)}
                        className={`py-2 px-1 text-center rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                          active
                            ? 'border-teal-500 bg-teal-500/10 text-teal-700 dark:text-teal-300 ring-1 ring-teal-500 shadow-sm'
                            : 'border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b] text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                {/* Live Preview Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-white/[0.07]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Live Preview
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                    &ldquo;Welcome to MEDIKOISK. Your past prescriptions and questions are easy to read.&rdquo;
                  </p>
                </div>
              </div>

              {/* Reading Width */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2.5">
                  Reading Width
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setReadingWidth('comfortable')}
                    className={`p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                      readingWidth === 'comfortable'
                        ? 'border-teal-500 bg-teal-500/10 text-slate-900 dark:text-white shadow-sm ring-1 ring-teal-500'
                        : 'border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b]'
                    }`}
                  >
                    <Minimize2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" aria-hidden="true" />
                    <div className="text-left">
                      <div className="text-xs font-bold">Comfortable Reading</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Centered, optimal line width</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setReadingWidth('expanded')}
                    className={`p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                      readingWidth === 'expanded'
                        ? 'border-teal-500 bg-teal-500/10 text-slate-900 dark:text-white shadow-sm ring-1 ring-teal-500'
                        : 'border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b]'
                    }`}
                  >
                    <Maximize2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" aria-hidden="true" />
                    <div className="text-left">
                      <div className="text-xs font-bold">Expanded Width</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Uses full screen width</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Extra Comfort Toggles */}
              <div className="pt-2 border-t border-slate-200 dark:border-white/[0.07] space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-white/[0.07]">
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">High Contrast Text</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Makes text bolder and outlines clearer</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHighContrast(!highContrast)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                      highContrast ? 'bg-teal-600 justify-end' : 'bg-slate-300 dark:bg-[#161d2b] justify-start'
                    }`}
                    aria-label="Toggle high contrast"
                  >
                    <span className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-white/[0.07]">
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Calm Animations</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Reduces moving effects on screen</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setReducedMotion(!reducedMotion)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                      reducedMotion ? 'bg-teal-600 justify-end' : 'bg-slate-300 dark:bg-[#161d2b] justify-start'
                    }`}
                    aria-label="Toggle calm animations"
                  >
                    <span className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LANGUAGE & SOUND */}
          {activeTab === 'voice' && (
            <div className="space-y-6 animate-fade-in">
              {/* Language Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2.5">
                  Choose Language (भाषा निवडा)
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
                            ? 'border-teal-500 bg-teal-500/10 ring-1 ring-teal-500'
                            : 'border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">{lang.native}</span>
                          {active && <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{lang.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Voice Read-Aloud */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-white/[0.07] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                      <Volume2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Voice Read-Aloud Assistant</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Speaks out health questions automatically</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAudioGuidance(!audioGuidance)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                      audioGuidance ? 'bg-teal-600 justify-end' : 'bg-slate-300 dark:bg-[#161d2b] justify-start'
                    }`}
                    aria-label="Toggle voice guidance"
                  >
                    <span className="bg-white w-4 h-4 rounded-full shadow-md" />
                  </button>
                </div>

                {audioGuidance && (
                  <div className="pt-3 border-t border-slate-200 dark:border-white/[0.07]">
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-2">
                      Voice Speaking Speed
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { speed: 0.8, label: 'Slower (0.8x)' },
                        { speed: 1.0, label: 'Normal (1.0x)' },
                        { speed: 1.2, label: 'Faster (1.2x)' }
                      ].map((item) => (
                        <button
                          key={item.speed}
                          type="button"
                          onClick={() => setSpeechSpeed(item.speed)}
                          className={`py-2 px-2 text-center rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                            speechSpeed === item.speed
                              ? 'border-teal-500 bg-teal-500/10 text-teal-700 dark:text-teal-300 ring-1 ring-teal-500'
                              : 'border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b] text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sound Effects Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-white/[0.07]">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Button Sound Effects</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Plays a gentle chime when tapping buttons</div>
                </div>
                <button
                  type="button"
                  onClick={() => setSoundEffects(!soundEffects)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                    soundEffects ? 'bg-teal-600 justify-end' : 'bg-slate-300 dark:bg-[#161d2b] justify-start'
                  }`}
                  aria-label="Toggle sound effects"
                >
                  <span className="bg-white w-4 h-4 rounded-full shadow-md" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: DATA ON THIS DEVICE */}
          {activeTab === 'storage' && (
            <div className="space-y-5 animate-fade-in">
              <div className="p-4 rounded-2xl bg-teal-50 dark:bg-[#131926] border border-teal-200 dark:border-white/[0.07]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                    <HardDrive className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Your Data Stays on This Device</div>
                    <p className="leading-relaxed">
                      All your display preferences, answers, and temporary notes are stored privately in your web browser&apos;s Local Storage. Nothing is uploaded to public servers without your clear consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={resetSettings}
                  className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b] flex items-center justify-between text-left transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <RotateCcw className="w-4 h-4 text-slate-500" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Reset Appearance & Sound Defaults</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Restores standard colors, text size, and audio</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">Reset</span>
                </button>

                <button
                  type="button"
                  onClick={handleExportBackup}
                  className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-white/[0.07] hover:bg-slate-50 dark:hover:bg-[#161d2b] flex items-center justify-between text-left transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-4 h-4 text-slate-500" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Download Backup File</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Save a copy of your session to your computer</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">Download</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAllVisit}
                  className="w-full p-3.5 rounded-xl border border-rose-200 dark:border-rose-900/40 hover:bg-rose-50 dark:hover:bg-rose-950/20 flex items-center justify-between text-left transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Trash2 className="w-4 h-4 text-rose-500" aria-hidden="true" />
                    <div>
                      <div className="text-xs font-bold text-rose-600 dark:text-rose-400">Clear Visit & Start Fresh</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Erase current intake details and return to Step 1</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">Clear</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-t border-slate-200 dark:border-white/[0.07] bg-slate-50/80 dark:bg-[#161d2b]/80">
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Changes save automatically to Local Storage.
          </span>
          <button
            type="button"
            onClick={() => setIsSettingsOpen(false)}
            className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
