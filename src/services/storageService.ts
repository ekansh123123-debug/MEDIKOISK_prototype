import { Patient, SoapSummary, DocumentRecord, QueueToken, EmergencyAlert } from '../types';
import { DEMO_PATIENTS, DEMO_SOAP_ROHAN, DEMO_TOKENS } from '../data/demoPatients';
import { SAMPLE_DOCUMENTS } from '../data/samplePrescriptions';

export class StorageService {
  private static KEYS = {
    PATIENTS: 'medikoisk_patients',
    SOAP_SUMMARIES: 'medikoisk_soap_summaries',
    DOCUMENTS: 'medikoisk_documents',
    TOKENS: 'medikoisk_tokens',
    EMERGENCY_ALERTS: 'medikoisk_emergency_alerts',
    CURRENT_PATIENT_ID: 'medikoisk_current_patient_id'
  };

  static initStorage() {
    if (typeof window === 'undefined') return;
    
    if (!localStorage.getItem(this.KEYS.PATIENTS)) {
      localStorage.setItem(this.KEYS.PATIENTS, JSON.stringify(DEMO_PATIENTS));
    }
    if (!localStorage.getItem(this.KEYS.SOAP_SUMMARIES)) {
      localStorage.setItem(this.KEYS.SOAP_SUMMARIES, JSON.stringify([DEMO_SOAP_ROHAN]));
    }
    if (!localStorage.getItem(this.KEYS.DOCUMENTS)) {
      localStorage.setItem(this.KEYS.DOCUMENTS, JSON.stringify(SAMPLE_DOCUMENTS));
    }
    if (!localStorage.getItem(this.KEYS.TOKENS)) {
      localStorage.setItem(this.KEYS.TOKENS, JSON.stringify(DEMO_TOKENS));
    }
    if (!localStorage.getItem(this.KEYS.EMERGENCY_ALERTS)) {
      localStorage.setItem(this.KEYS.EMERGENCY_ALERTS, JSON.stringify([]));
    }
  }

  static getPatients(): Patient[] {
    const raw = localStorage.getItem(this.KEYS.PATIENTS);
    return raw ? JSON.parse(raw) : DEMO_PATIENTS;
  }

  static savePatient(patient: Patient) {
    const patients = this.getPatients();
    const idx = patients.findIndex(p => p.id === patient.id);
    if (idx >= 0) {
      patients[idx] = patient;
    } else {
      patients.unshift(patient);
    }
    localStorage.setItem(this.KEYS.PATIENTS, JSON.stringify(patients));
  }

  static getSoapSummaries(): SoapSummary[] {
    const raw = localStorage.getItem(this.KEYS.SOAP_SUMMARIES);
    return raw ? JSON.parse(raw) : [DEMO_SOAP_ROHAN];
  }

  static saveSoapSummary(summary: SoapSummary) {
    const list = this.getSoapSummaries();
    const idx = list.findIndex(s => s.id === summary.id);
    if (idx >= 0) {
      list[idx] = summary;
    } else {
      list.unshift(summary);
    }
    localStorage.setItem(this.KEYS.SOAP_SUMMARIES, JSON.stringify(list));
  }

  static getDocuments(): DocumentRecord[] {
    const raw = localStorage.getItem(this.KEYS.DOCUMENTS);
    return raw ? JSON.parse(raw) : SAMPLE_DOCUMENTS;
  }

  static saveDocument(doc: DocumentRecord) {
    const docs = this.getDocuments();
    const idx = docs.findIndex(d => d.id === doc.id);
    if (idx >= 0) {
      docs[idx] = doc;
    } else {
      docs.unshift(doc);
    }
    localStorage.setItem(this.KEYS.DOCUMENTS, JSON.stringify(docs));
  }

  static getEmergencyAlerts(): EmergencyAlert[] {
    const raw = localStorage.getItem(this.KEYS.EMERGENCY_ALERTS);
    return raw ? JSON.parse(raw) : [];
  }

  static saveEmergencyAlert(alert: EmergencyAlert) {
    const alerts = this.getEmergencyAlerts();
    alerts.unshift(alert);
    localStorage.setItem(this.KEYS.EMERGENCY_ALERTS, JSON.stringify(alerts));
  }

  static resetToDefaults() {
    localStorage.setItem(this.KEYS.PATIENTS, JSON.stringify(DEMO_PATIENTS));
    localStorage.setItem(this.KEYS.SOAP_SUMMARIES, JSON.stringify([DEMO_SOAP_ROHAN]));
    localStorage.setItem(this.KEYS.DOCUMENTS, JSON.stringify(SAMPLE_DOCUMENTS));
    localStorage.setItem(this.KEYS.TOKENS, JSON.stringify(DEMO_TOKENS));
    localStorage.setItem(this.KEYS.EMERGENCY_ALERTS, JSON.stringify([]));
  }
}
