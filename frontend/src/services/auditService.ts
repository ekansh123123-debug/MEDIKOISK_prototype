import { AuditLogEntry } from '../types';

export class AuditService {
  private static auditLogs: AuditLogEntry[] = [
    {
      id: 'AUD-01',
      timestamp: '2025-02-14T08:29:40Z',
      actor: 'patient',
      category: 'CONSENT',
      action: 'PATIENT_CONSENT_RECORDED',
      description: 'Patient Rohan Kulkarni granted informed consent for AI clinical preparation under DPDP Act 2023 with audio guidance.',
      patientId: 'PAT-001'
    },
    {
      id: 'AUD-02',
      timestamp: '2025-02-14T08:30:12Z',
      actor: 'system_ai',
      category: 'VOICE_NLP',
      action: 'VOICE_AUDIO_TRANSCRIBED',
      description: 'Bhashini IndicWav2Vec transcribed Hindi speech chunk with 98% confidence (1.42s latency).',
      patientId: 'PAT-001'
    },
    {
      id: 'AUD-03',
      timestamp: '2025-02-14T08:31:05Z',
      actor: 'system_ai',
      category: 'TRIAGE',
      action: 'DETERMINISTIC_SAFETY_CHECK_PASSED',
      description: 'Zero emergency red flags detected across cardiovascular, neurological, respiratory, and surgical categories.',
      patientId: 'PAT-001'
    },
    {
      id: 'AUD-04',
      timestamp: '2025-02-14T08:32:45Z',
      actor: 'system_ai',
      category: 'OCR',
      action: 'PRESCRIPTION_OCR_PROCESSED',
      description: 'TrOCR processed prescription slip DOC-2025-0891. Extracted 4 medications with 2 flagged for patient verification.',
      patientId: 'PAT-001'
    },
    {
      id: 'AUD-05',
      timestamp: '2025-02-14T08:33:50Z',
      actor: 'patient',
      category: 'OCR',
      action: 'PATIENT_MEDICATION_VERIFIED',
      description: 'Patient confirmed Sucralfate Syrup and Domperidone entries with confidence flag.',
      patientId: 'PAT-001'
    }
  ];

  static getLogs(): AuditLogEntry[] {
    return [...this.auditLogs];
  }

  static logEvent(
    actor: AuditLogEntry['actor'],
    category: AuditLogEntry['category'],
    action: string,
    description: string,
    patientId?: string,
    metadata?: Record<string, any>
  ): AuditLogEntry {
    const newEntry: AuditLogEntry = {
      id: `AUD-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toISOString(),
      actor,
      category,
      action,
      description,
      patientId,
      metadata
    };
    this.auditLogs.unshift(newEntry);
    return newEntry;
  }
}
