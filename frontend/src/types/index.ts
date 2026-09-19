// ==========================================
// PATIENT & IDENTITY TYPES
// ==========================================
export type IndianLanguage = 'en' | 'hi' | 'mr' | 'ta' | 'bn' | 'te';

export interface Patient {
  id: string;
  abhaNumber?: string;
  abhaAddress?: string;
  isGuest: boolean;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  phone: string;
  language: IndianLanguage;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  existingConditions: string[];
  allergies: string[];
  currentMedications: string[];
  registeredAt: string;
  hospitalCode: string;
}

export interface ConsentRecord {
  id: string;
  patientId: string;
  consentedAt: string;
  purpose: string;
  dataTypes: string[];
  sharingPolicy: string;
  revoked: boolean;
  digitalSignature: string;
  dpdpComplianceRef: string;
  audioGuidanceUsed: boolean;
}

// ==========================================
// ADAPTIVE INTAKE & CLINICAL GRAPH TYPES
// ==========================================
export type ComplaintCategory = 
  | 'abdominal_pain'
  | 'chest_pain'
  | 'fever'
  | 'cough_breathing'
  | 'headache'
  | 'injury_trauma'
  | 'skin_rash'
  | 'vomiting_diarrhea'
  | 'other';

export interface ChiefComplaint {
  category: ComplaintCategory;
  rawInput: string;
  inputMode: 'voice' | 'text' | 'tap';
  language: IndianLanguage;
  detectedKeywords: string[];
  onsetEstimate: string;
}

export interface QuestionOption {
  id: string;
  label: string;
  translations?: Record<IndianLanguage, string>;
  isRedFlag?: boolean;
  redFlagReason?: string;
  nextQuestionId?: string;
  clinicalImpactWeight?: number;
  hi?: string;
  mr?: string;
  ta?: string;
  bn?: string;
  te?: string;
  [key: string]: any;
}

export interface QuestionNode {
  id: string;
  category: ComplaintCategory;
  clinicalDimension: 'onset' | 'duration' | 'location' | 'character' | 'radiation' | 'severity' | 'aggravating' | 'relieving' | 'temporal' | 'associated_symptoms';
  text: string;
  translations: Record<IndianLanguage, string>;
  audioPromptUrl?: string;
  inputType: 'single-choice' | 'multi-choice' | 'scale' | 'text' | 'voice';
  options?: QuestionOption[];
  minScale?: number;
  maxScale?: number;
  scaleLabels?: { min: string; max: string };
  entropyWeight: number; // For prioritizing clinical utility
  required: boolean;
}

export interface IntakeResponse {
  questionId: string;
  questionText: string;
  clinicalDimension: string;
  answer: string | string[] | number;
  sourceText: string;
  inputMode: 'voice' | 'text' | 'tap';
  timestamp: string;
  confidence: number;
}

// ==========================================
// CLINICAL SAFETY & DETERMINISTIC RED-FLAGS
// ==========================================
export type EmergencyCategory = 
  | 'cardiovascular'
  | 'neurological'
  | 'respiratory'
  | 'obstetric_surgical';

export interface EmergencyRedFlagRule {
  id: string;
  category: EmergencyCategory;
  triggerPhrases: string[];
  triggerKeywords: string[];
  severityLevel: 'CRITICAL_RED';
  emergencyDirectives: string;
  spokenGuidance: Record<IndianLanguage, string>;
}

export interface EmergencyAlert {
  id: string;
  patientId: string;
  patientName: string;
  tokenNumber: string;
  detectedAt: string;
  category: EmergencyCategory;
  matchedRule: string;
  rawSymptom: string;
  triagePriority: 'CRITICAL_RED';
  status: 'escalated' | 'acknowledged' | 'in_emergency_dept';
  destinationDepartment: string;
  alertAcknowledgedBy?: string;
}

// ==========================================
// DOCUMENT INTELLIGENCE & OCR TYPES
// ==========================================
export interface ExtractedMedication {
  id: string;
  documentId: string;
  name: string;
  genericName?: string;
  strength: string;
  route: string;
  frequency: string;
  duration: string;
  confidence: number; // e.g., 0.98 or 0.88 (<0.95 requires verification)
  verificationStatus: 'pending' | 'verified' | 'edited' | 'rejected';
  editedValues?: {
    name?: string;
    strength?: string;
    frequency?: string;
    duration?: string;
  };
  rejectionReason?: string;
  verifiedBy?: 'patient' | 'doctor';
  verifiedAt?: string;
  boundingBox?: { x: number; y: number; width: number; height: number };
}

export interface DocumentRecord {
  id: string;
  patientId: string;
  fileName: string;
  fileType: 'prescription' | 'lab_report' | 'discharge_summary' | 'imaging';
  fileSize: string;
  uploadTimestamp: string;
  thumbnailUrl?: string;
  processingStage: 'uploading' | 'preprocessing' | 'layout_analysis' | 'trocr_recognition' | 'nlp_entity_extraction' | 'completed';
  confidenceScore: number;
  extractedMedications: ExtractedMedication[];
  extractedDiagnosis?: string[];
  rawOcrText: string;
  isVerified: boolean;
}

// ==========================================
// AYUSH TRADITIONAL MEDICINE & DUAL CODING
// ==========================================
export interface AyushRecord {
  hasAyushHistory: boolean;
  prakriti: 'Vata' | 'Pitta' | 'Kapha' | 'Vata-Pitta' | 'Pitta-Kapha' | 'Vata-Kapha' | 'Tridosha' | 'Not Assessed';
  agni: 'Sama (Balanced)' | 'Vishama (Irregular)' | 'Tikshna (Intense)' | 'Manda (Sluggish)' | 'Not Assessed';
  ama: 'Nirama (Absent)' | 'Saama (Toxic Accumulation)' | 'Not Assessed';
  dhatuBalance: string[];
  traditionalDiagnosis: string;
  traditionalFormulations: string[];
  lifestyleDiet: string;
}

export interface DualCodingEntry {
  conditionName: string;
  icd11Mms: {
    system: string;
    code: string;
    display: string;
  };
  namastePortal: {
    system: string;
    code: string;
    display: string;
  };
  icd11Tm2: {
    system: string;
    code: string;
    display: string;
  };
}

// ==========================================
// PROVENANCE & SOAP SUMMARY TYPES
// ==========================================
export interface ProvenanceAssertion {
  id: string;
  assertionText: string;
  section: 'subjective' | 'objective' | 'assessment' | 'medication' | 'ayush';
  sourceSnippet: string;
  sourceType: 'voice_transcript' | 'patient_questionnaire' | 'ocr_prescription' | 'previous_record';
  sourceDetail: string; // e.g. "Question 4: Food relationship" or "Prescription scan 12-Jan-2025"
  confidence: number;
  verificationStatus: 'unverified' | 'verified' | 'edited' | 'rejected';
  doctorEditedText?: string;
}

export interface SoapSummary {
  id: string;
  patientId: string;
  encounterId: string;
  subjective: {
    chiefComplaint: string;
    historyOfPresentIllness: string;
    duration: string;
    associatedSymptoms: string[];
    pastMedicalHistory: string[];
    medicationHistory: string[];
    familyHistory: string;
    lifestyleDiet: string;
    ayushNarrative?: string;
  };
  objective: {
    reportedVitals: {
      temperature?: string;
      pulse?: string;
      bloodPressure?: string;
      spO2?: string;
    };
    physicalObservationsNote: string;
  };
  assessment: {
    aiPatterns: string[];
    differentialConsiderations: string[];
    clinicalDisclaimer: string;
    dualCodes: DualCodingEntry[];
  };
  plan: {
    preliminaryRecommendations: string[];
    clinicianSignOffPrompt: string;
  };
  provenanceList: ProvenanceAssertion[];
  generatedAt: string;
  approvedByDoctor: boolean;
  doctorDigitalSignature?: string;
  signedAt?: string;
  doctorNotes?: string;
}

// ==========================================
// QUEUE & TOKEN SYSTEM
// ==========================================
export interface QueueToken {
  tokenNumber: string; // e.g., "A-027" or "EMERG-001"
  patientId: string;
  patientName: string;
  age: number;
  gender: string;
  chiefComplaint: string;
  priority: 'EMERGENCY' | 'STANDARD' | 'FAST_TRACK';
  counterRoom: string;
  status: 'WAITING' | 'CALLING' | 'IN_CONSULTATION' | 'COMPLETED';
  positionAhead: number;
  estimatedWaitMinutes: number;
  issuedAt: string;
  calledAt?: string;
}

// ==========================================
// FHIR R4 RESOURCE TYPES
// ==========================================
export interface FhirResource {
  resourceType: string;
  id: string;
  [key: string]: any;
}

export interface FhirDocumentBundle {
  resourceType: 'Bundle';
  id: string;
  type: 'document';
  timestamp: string;
  identifier: {
    system: string;
    value: string;
  };
  entry: Array<{
    fullUrl: string;
    resource: FhirResource;
  }>;
}

// ==========================================
// ABDM MILESTONES & DHIS INCENTIVES
// ==========================================
export interface AbdmGatewayStatus {
  milestone1: {
    name: 'M1: Patient Identity & ABHA';
    status: 'ACTIVE_DEMO';
    abhaCount: number;
    scanShareCount: number;
  };
  milestone2: {
    name: 'M2: Health Information Provider (HIP)';
    status: 'ACTIVE_DEMO';
    careContextsLinked: number;
    bundlesPublished: number;
  };
  milestone3: {
    name: 'M3: Health Information User (HIU)';
    status: 'ACTIVE_DEMO';
    consentsRequested: number;
    longitudinalFetches: number;
  };
  milestone4: {
    name: 'M4: NHCX Claims Exchange';
    status: 'ARCHITECTURE_READY';
    claimsPreAuthCount: number;
  };
  dhisIncentives: {
    qualifyingMonthlyTransactions: number;
    baseThreshold: number; // 100
    opdConsultationEarnings: number; // ₹5 per M2
    consentExchangeEarnings: number; // ₹10 per M3
    totalIncentiveInr: number;
  };
  security: {
    cipherSuite: 'ECDH-Curve25519-AES-256-GCM';
    keyDerivation: 'HKDF-SHA256';
    checksumAlgorithm: 'SHA-256';
    hsmVaultStatus: 'OPERATIONAL_DEMO';
  };
}

// ==========================================
// AUDIT LOG
// ==========================================
export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: 'patient' | 'system_ai' | 'doctor' | 'admin' | 'triage_nurse';
  action: string;
  category: 'CONSENT' | 'VOICE_NLP' | 'OCR' | 'TRIAGE' | 'DOCTOR_REVIEW' | 'ABDM_EXCHANGE';
  description: string;
  patientId?: string;
  metadata?: Record<string, any>;
}
