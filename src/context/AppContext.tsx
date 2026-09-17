import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Patient, 
  IndianLanguage, 
  EmergencyAlert, 
  QueueToken, 
  SoapSummary, 
  DocumentRecord,
  ExtractedMedication
} from '../types';
import { StorageService } from '../services/storageService';
import { DEMO_PATIENTS, DEMO_SOAP_ROHAN, DEMO_TOKENS } from '../data/demoPatients';
import { SAMPLE_DOCUMENTS } from '../data/samplePrescriptions';
import { QueueService } from '../services/queueService';
import { AuditService } from '../services/auditService';
import { TriageEngine } from '../services/triageEngine';
import { getTranslation, TranslationDictionary } from '../data/translations';

export type AppRole = 'landing' | 'patient' | 'doctor' | 'admin' | 'privacy';
export type AppTheme = 'light' | 'dark';
export type AccentColor = 'teal' | 'indigo' | 'cyan' | 'emerald';
export type FontSizeScale = 'compact' | 'normal' | 'large';
export type GatewayMode = 'mock_sandbox' | 'live_staging' | 'offline_pwa';

export type PatientStep = 
  | 'hospital_qr'
  | 'abha_login'
  | 'consent'
  | 'basic_info'
  | 'complaint'
  | 'adaptive_questions'
  | 'document_upload'
  | 'medication_verify'
  | 'ayush_intake'
  | 'queue_token'
  | 'queue_tracking';

interface AppContextType {
  role: AppRole;
  setRole: (role: AppRole) => void;
  patientStep: PatientStep;
  setPatientStep: (step: PatientStep) => void;
  language: IndianLanguage;
  setLanguage: (lang: IndianLanguage) => void;
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  t: TranslationDictionary;
  
  // Settings Panel State
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
  toggleSettings: () => void;
  accentColor: AccentColor;
  setAccentColor: (accent: AccentColor) => void;
  fontSize: FontSizeScale;
  setFontSize: (size: FontSizeScale) => void;
  highContrast: boolean;
  setHighContrast: (high: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
  audioGuidance: boolean;
  setAudioGuidance: (enabled: boolean) => void;
  speechSpeed: number;
  setSpeechSpeed: (speed: number) => void;
  kioskTimeoutSec: number;
  setKioskTimeoutSec: (sec: number) => void;
  gatewayMode: GatewayMode;
  setGatewayMode: (mode: GatewayMode) => void;
  soundEffects: boolean;
  setSoundEffects: (enabled: boolean) => void;
  resetSettings: () => void;

  // Active Entities
  currentPatient: Patient;
  setCurrentPatient: (patient: Patient) => void;
  patients: Patient[];
  currentToken: QueueToken | null;
  setCurrentToken: (token: QueueToken | null) => void;
  tokens: QueueToken[];
  
  // Clinical SOAP & Provenance
  currentSoap: SoapSummary | null;
  setCurrentSoap: (soap: SoapSummary | null) => void;
  approveSoapSummary: (signature: string, doctorNotes?: string) => void;
  updateProvenanceStatus: (assertionId: string, status: 'verified' | 'edited' | 'rejected', editedText?: string) => void;
  
  // Documents & OCR
  documents: DocumentRecord[];
  addDocument: (doc: DocumentRecord) => void;
  updateMedication: (docId: string, medId: string, action: 'verify' | 'edit' | 'reject', editedValues?: any) => void;
  
  // Deterministic Emergency Safety
  emergencyAlert: EmergencyAlert | null;
  triggerEmergency: (alert: EmergencyAlert) => void;
  clearEmergency: () => void;
  emergencyHistory: EmergencyAlert[];
  
  // Demo Mode Helpers
  loadDemoScenario: (scenarioKey: 'abdominal' | 'ocr' | 'voice' | 'emergency' | 'doctor_approve') => void;
  resetAll: () => void;
  
  // Toast notifications
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<AppRole>('landing');
  const [patientStep, setPatientStep] = useState<PatientStep>('hospital_qr');
  
  const [language, setLanguageState] = useState<IndianLanguage>(() => {
    const saved = localStorage.getItem('medikoisk_lang') as IndianLanguage;
    return saved && ['en', 'hi', 'mr', 'ta', 'bn', 'te'].includes(saved) ? saved : 'en';
  });

  const [theme, setThemeState] = useState<AppTheme>(() => {
    const saved = localStorage.getItem('medikoisk_theme') as AppTheme;
    return saved === 'dark' ? 'dark' : 'light';
  });

  // Settings states
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [accentColor, setAccentColorState] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('medikoisk_accent') as AccentColor;
    return saved && ['teal', 'indigo', 'cyan', 'emerald'].includes(saved) ? saved : 'teal';
  });
  const [fontSize, setFontSizeState] = useState<FontSizeScale>(() => {
    const saved = localStorage.getItem('medikoisk_fontsize') as FontSizeScale;
    return saved && ['compact', 'normal', 'large'].includes(saved) ? saved : 'normal';
  });
  const [highContrast, setHighContrastState] = useState<boolean>(() => {
    return localStorage.getItem('medikoisk_contrast') === 'true';
  });
  const [reducedMotion, setReducedMotionState] = useState<boolean>(() => {
    return localStorage.getItem('medikoisk_motion') === 'true';
  });
  const [audioGuidance, setAudioGuidanceState] = useState<boolean>(() => {
    const saved = localStorage.getItem('medikoisk_audioguidance');
    return saved !== null ? saved === 'true' : true;
  });
  const [speechSpeed, setSpeechSpeedState] = useState<number>(() => {
    const saved = localStorage.getItem('medikoisk_speechspeed');
    return saved ? parseFloat(saved) : 1.0;
  });
  const [kioskTimeoutSec, setKioskTimeoutSecState] = useState<number>(() => {
    const saved = localStorage.getItem('medikoisk_kiosktimeout');
    return saved ? parseInt(saved, 10) : 60;
  });
  const [gatewayMode, setGatewayModeState] = useState<GatewayMode>(() => {
    const saved = localStorage.getItem('medikoisk_gateway') as GatewayMode;
    return saved && ['mock_sandbox', 'live_staging', 'offline_pwa'].includes(saved) ? saved : 'mock_sandbox';
  });
  const [soundEffects, setSoundEffectsState] = useState<boolean>(() => {
    return localStorage.getItem('medikoisk_sfx') !== 'false';
  });

  const toggleSettings = () => {
    setIsSettingsOpen(prev => !prev);
  };

  const setAccentColor = (accent: AccentColor) => {
    setAccentColorState(accent);
    localStorage.setItem('medikoisk_accent', accent);
  };

  const setFontSize = (size: FontSizeScale) => {
    setFontSizeState(size);
    localStorage.setItem('medikoisk_fontsize', size);
  };

  const setHighContrast = (val: boolean) => {
    setHighContrastState(val);
    localStorage.setItem('medikoisk_contrast', String(val));
  };

  const setReducedMotion = (val: boolean) => {
    setReducedMotionState(val);
    localStorage.setItem('medikoisk_motion', String(val));
  };

  const setAudioGuidance = (val: boolean) => {
    setAudioGuidanceState(val);
    localStorage.setItem('medikoisk_audioguidance', String(val));
  };

  const setSpeechSpeed = (speed: number) => {
    setSpeechSpeedState(speed);
    localStorage.setItem('medikoisk_speechspeed', String(speed));
  };

  const setKioskTimeoutSec = (sec: number) => {
    setKioskTimeoutSecState(sec);
    localStorage.setItem('medikoisk_kiosktimeout', String(sec));
  };

  const setGatewayMode = (mode: GatewayMode) => {
    setGatewayModeState(mode);
    localStorage.setItem('medikoisk_gateway', mode);
  };

  const setSoundEffects = (val: boolean) => {
    setSoundEffectsState(val);
    localStorage.setItem('medikoisk_sfx', String(val));
  };

  const resetSettings = () => {
    setAccentColor('teal');
    setFontSize('normal');
    setHighContrast(false);
    setReducedMotion(false);
    setAudioGuidance(true);
    setSpeechSpeed(1.0);
    setKioskTimeoutSec(60);
    setGatewayMode('mock_sandbox');
    setSoundEffects(true);
    showToast('Settings restored to clinical standards.');
  };

  const setLanguage = (lang: IndianLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('medikoisk_lang', lang);
  };

  const setTheme = (newTheme: AppTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('medikoisk_theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // DOM Effects for theme, font scale, high contrast, reduced motion
  useEffect(() => {
    const root = document.documentElement;
    
    // Theme
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // High contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Reduced motion
    if (reducedMotion) {
      root.classList.add('force-reduced-motion');
    } else {
      root.classList.remove('force-reduced-motion');
    }

    // Font Scale
    root.classList.remove('font-scale-compact', 'font-scale-normal', 'font-scale-large');
    root.classList.add(`font-scale-${fontSize}`);
  }, [theme, highContrast, reducedMotion, fontSize]);

  // Global keyboard shortcut: Cmd+, or Ctrl+, for Settings
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === ',') {
        e.preventDefault();
        setIsSettingsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const t = getTranslation(language);

  const [patients, setPatients] = useState<Patient[]>(DEMO_PATIENTS);
  const [currentPatient, setCurrentPatient] = useState<Patient>(DEMO_PATIENTS[0]);
  const [tokens, setTokens] = useState<QueueToken[]>(DEMO_TOKENS);
  const [currentToken, setCurrentToken] = useState<QueueToken | null>(DEMO_TOKENS[2]); // Rohan's token A-027
  
  const [currentSoap, setCurrentSoap] = useState<SoapSummary | null>(DEMO_SOAP_ROHAN);
  const [documents, setDocuments] = useState<DocumentRecord[]>(SAMPLE_DOCUMENTS);
  
  const [emergencyAlert, setEmergencyAlert] = useState<EmergencyAlert | null>(null);
  const [emergencyHistory, setEmergencyHistory] = useState<EmergencyAlert[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    StorageService.initStorage();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const triggerEmergency = (alert: EmergencyAlert) => {
    setEmergencyAlert(alert);
    setEmergencyHistory(prev => [alert, ...prev]);
    StorageService.saveEmergencyAlert(alert);
    
    // Add critical emergency queue token immediately at position 0
    const emergencyToken = QueueService.issueToken(
      alert.patientId,
      alert.patientName,
      currentPatient.age,
      currentPatient.gender,
      alert.rawSymptom,
      true
    );
    setCurrentToken(emergencyToken);
    setTokens(QueueService.getTokens());

    AuditService.logEvent(
      'system_ai',
      'TRIAGE',
      'EMERGENCY_RED_FLAG_TRIGGERED',
      `Deterministic rule ${alert.matchedRule} triggered for ${alert.patientName}. Escalated to Casualty.`,
      alert.patientId,
      { alert }
    );

    // Play spoken voice alert in active language
    if (audioGuidance) {
      TriageEngine.playSpokenGuidance(language);
    }
    showToast(`🚨 CRITICAL EMERGENCY ESCALATION: ${alert.matchedRule}`);
  };

  const clearEmergency = () => {
    setEmergencyAlert(null);
  };

  const addDocument = (doc: DocumentRecord) => {
    setDocuments(prev => [doc, ...prev]);
    StorageService.saveDocument(doc);
    AuditService.logEvent('patient', 'OCR', 'DOCUMENT_UPLOADED', `Uploaded ${doc.fileName}`, currentPatient.id);
  };

  const updateMedication = (
    docId: string, 
    medId: string, 
    action: 'verify' | 'edit' | 'reject', 
    editedValues?: any
  ) => {
    setDocuments(prevDocs => {
      return prevDocs.map(doc => {
        if (doc.id !== docId) return doc;
        const updatedMeds = doc.extractedMedications.map(med => {
          if (med.id !== medId) return med;
          if (action === 'verify') {
            return { ...med, verificationStatus: 'verified' as const, verifiedBy: 'patient' as const, verifiedAt: new Date().toISOString() };
          } else if (action === 'reject') {
            return { ...med, verificationStatus: 'rejected' as const, rejectionReason: 'Patient rejected item' };
          } else if (action === 'edit') {
            return { ...med, verificationStatus: 'edited' as const, editedValues, name: editedValues.name || med.name, strength: editedValues.strength || med.strength, verifiedBy: 'patient' as const, verifiedAt: new Date().toISOString() };
          }
          return med;
        });
        return { ...doc, extractedMedications: updatedMeds };
      });
    });

    AuditService.logEvent(
      'patient', 
      'OCR', 
      `MEDICATION_${action.toUpperCase()}`, 
      `Medication ${medId} was ${action}ed by patient.`, 
      currentPatient.id
    );
    showToast(`Medication ${action}ed successfully.`);
  };

  const approveSoapSummary = (signature: string, doctorNotes?: string) => {
    if (!currentSoap) return;
    const updated: SoapSummary = {
      ...currentSoap,
      approvedByDoctor: true,
      doctorDigitalSignature: signature,
      signedAt: new Date().toISOString(),
      doctorNotes
    };
    setCurrentSoap(updated);
    StorageService.saveSoapSummary(updated);
    
    AuditService.logEvent(
      'doctor',
      'DOCTOR_REVIEW',
      'CASE_APPROVED_AND_SIGNED',
      `Dr. A. K. Shukla approved and digitally signed case ${updated.id} for ${currentPatient.name}. Care Context ready for ABDM M2 publishing.`,
      currentPatient.id
    );
    showToast('Case successfully approved and digitally signed!');
  };

  const updateProvenanceStatus = (
    assertionId: string, 
    status: 'verified' | 'edited' | 'rejected', 
    editedText?: string
  ) => {
    if (!currentSoap) return;
    const updatedList = currentSoap.provenanceList.map(item => {
      if (item.id !== assertionId) return item;
      return {
        ...item,
        verificationStatus: status,
        doctorEditedText: editedText
      };
    });
    setCurrentSoap({ ...currentSoap, provenanceList: updatedList });
    showToast(`Assertion ${status}ed by clinician.`);
  };

  const loadDemoScenario = (scenarioKey: 'abdominal' | 'ocr' | 'voice' | 'emergency' | 'doctor_approve') => {
    clearEmergency();
    if (scenarioKey === 'abdominal') {
      setCurrentPatient(DEMO_PATIENTS[0]); // Rohan Kulkarni
      setCurrentSoap(DEMO_SOAP_ROHAN);
      setRole('patient');
      setPatientStep('adaptive_questions');
      showToast('Loaded Scenario A: Adaptive Abdominal Pain DAG Intake');
    } else if (scenarioKey === 'ocr') {
      setCurrentPatient(DEMO_PATIENTS[1]); // Sunita Deshmukh
      setRole('patient');
      setPatientStep('medication_verify');
      showToast('Loaded Scenario B: TrOCR Prescription Extraction & Verification');
    } else if (scenarioKey === 'voice') {
      setCurrentPatient(DEMO_PATIENTS[0]);
      setRole('patient');
      setPatientStep('complaint');
      setLanguage('hi');
      showToast('Loaded Scenario C: Multilingual Hindi Voice Intake (Bhashini)');
    } else if (scenarioKey === 'emergency') {
      const emergencyAlertObj: EmergencyAlert = {
        id: `EMERG-${Date.now()}`,
        patientId: DEMO_PATIENTS[4].id,
        patientName: DEMO_PATIENTS[4].name,
        tokenNumber: 'EMERG-009',
        detectedAt: new Date().toISOString(),
        category: 'cardiovascular',
        matchedRule: 'RED_CARDIO_01',
        rawSymptom: 'Severe crushing chest pain since 20 minutes spreading to left arm with heavy sweating',
        triagePriority: 'CRITICAL_RED',
        status: 'escalated',
        destinationDepartment: 'Hospital Casualty / Emergency Resuscitation Unit (Red Zone)'
      };
      setCurrentPatient(DEMO_PATIENTS[4]);
      triggerEmergency(emergencyAlertObj);
      setRole('patient');
      showToast('🚨 Triggered Scenario D: Deterministic Emergency Red-Flag Triage');
    } else if (scenarioKey === 'doctor_approve') {
      setCurrentPatient(DEMO_PATIENTS[0]);
      setCurrentSoap(DEMO_SOAP_ROHAN);
      setRole('doctor');
      showToast('Loaded Scenario E: Doctor Clinical Review & Digital Sign-off');
    }
  };

  const resetAll = () => {
    StorageService.resetToDefaults();
    setPatients(DEMO_PATIENTS);
    setCurrentPatient(DEMO_PATIENTS[0]);
    setCurrentSoap(DEMO_SOAP_ROHAN);
    setDocuments(SAMPLE_DOCUMENTS);
    setTokens(DEMO_TOKENS);
    setCurrentToken(DEMO_TOKENS[2]);
    clearEmergency();
    setRole('landing');
    setPatientStep('hospital_qr');
    showToast('Platform reset to default clinical state.');
  };

  return (
    <AppContext.Provider value={{
      role,
      setRole,
      patientStep,
      setPatientStep,
      language,
      setLanguage,
      theme,
      setTheme,
      toggleTheme,
      t,
      isSettingsOpen,
      setIsSettingsOpen,
      toggleSettings,
      accentColor,
      setAccentColor,
      fontSize,
      setFontSize,
      highContrast,
      setHighContrast,
      reducedMotion,
      setReducedMotion,
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
      currentPatient,
      setCurrentPatient,
      patients,
      currentToken,
      setCurrentToken,
      tokens,
      currentSoap,
      setCurrentSoap,
      approveSoapSummary,
      updateProvenanceStatus,
      documents,
      addDocument,
      updateMedication,
      emergencyAlert,
      triggerEmergency,
      clearEmergency,
      emergencyHistory,
      loadDemoScenario,
      resetAll,
      toastMessage,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
