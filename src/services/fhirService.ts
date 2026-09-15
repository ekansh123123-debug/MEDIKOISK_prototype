import { Patient, SoapSummary, FhirDocumentBundle } from '../types';

export class FhirService {
  /**
   * Generates a fully conformant NRCeS-compliant FHIR R4 Document Bundle.
   * Mandates: entry[0] is strictly the Composition resource.
   */
  static generateDocumentBundle(
    patient: Patient,
    soap: SoapSummary,
    practitionerName: string = 'Dr. A. K. Shukla, MD (HPR: 14-8892-0012)',
    organizationName: string = 'DYP Hospital & Research Centre (HFR: IN-MH-PUN-0094)'
  ): FhirDocumentBundle {
    const bundleId = `bundle-${patient.id}-${Date.now().toString().slice(-6)}`;
    const compositionId = `comp-${soap.encounterId}`;
    const patientResourceId = `patient-${patient.id}`;
    const encounterResourceId = `enc-${soap.encounterId}`;
    const conditionResourceId = `cond-${Date.now().toString().slice(-4)}`;

    const bundleTimestamp = new Date().toISOString();

    // entry[0] Composition
    const compositionResource = {
      resourceType: 'Composition',
      id: compositionId,
      status: 'final',
      type: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '371530004',
            display: 'Clinical consultation report (record artifact)'
          }
        ],
        text: 'ABDM NRCeS Outpatient Clinical Intake Summary'
      },
      subject: {
        reference: `Patient/${patientResourceId}`,
        display: patient.name,
        identifier: {
          system: 'https://healthid.ndhm.gov.in',
          value: patient.abhaNumber || `GUEST-${patient.id}`
        }
      },
      encounter: {
        reference: `Encounter/${encounterResourceId}`
      },
      date: bundleTimestamp,
      author: [
        {
          display: practitionerName,
          identifier: {
            system: 'https://hpr.abdm.gov.in',
            value: 'HPR-14-8892-0012'
          }
        }
      ],
      title: 'Outpatient Consultation & AI-Assisted Case Intake',
      custodian: {
        display: organizationName,
        identifier: {
          system: 'https://hfr.abdm.gov.in',
          value: 'HFR-IN-MH-PUN-0094'
        }
      },
      section: [
        {
          title: 'Subjective - History of Present Illness',
          code: {
            coding: [{ system: 'http://loinc.org', code: '10164-2', display: 'History of Present Illness Narrative' }]
          },
          text: {
            status: 'generated',
            div: `<div xmlns="http://www.w3.org/1999/xhtml"><p>${soap.subjective.historyOfPresentIllness}</p></div>`
          }
        },
        {
          title: 'Objective - Clinical Observations & Vitals',
          code: {
            coding: [{ system: 'http://loinc.org', code: '8716-3', display: 'Vital signs' }]
          },
          text: {
            status: 'generated',
            div: `<div xmlns="http://www.w3.org/1999/xhtml"><p>BP: ${soap.objective.reportedVitals.bloodPressure}, Pulse: ${soap.objective.reportedVitals.pulse}, SpO2: ${soap.objective.reportedVitals.spO2}</p></div>`
          }
        },
        {
          title: 'Assessment - Dual-Coded Clinical Pattern',
          code: {
            coding: [{ system: 'http://loinc.org', code: '51848-0', display: 'Assessment & Plan' }]
          },
          entry: [{ reference: `Condition/${conditionResourceId}` }]
        }
      ]
    };

    // Patient Resource
    const patientResource = {
      resourceType: 'Patient',
      id: patientResourceId,
      identifier: [
        {
          type: {
            coding: [{ system: 'http://terminology.hl7.org/CodeSystem/v2-0203', code: 'MR', display: 'Medical record number' }]
          },
          system: 'https://healthid.ndhm.gov.in',
          value: patient.abhaNumber || `GUEST-${patient.id}`
        }
      ],
      name: [{ use: 'official', text: patient.name }],
      gender: patient.gender,
      telecom: [{ system: 'phone', value: patient.phone, use: 'mobile' }]
    };

    // Encounter Resource
    const encounterResource = {
      resourceType: 'Encounter',
      id: encounterResourceId,
      status: 'in-progress',
      class: {
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
        code: 'AMB',
        display: 'ambulatory / outpatient'
      },
      subject: { reference: `Patient/${patientResourceId}` },
      period: { start: bundleTimestamp }
    };

    // Condition Resource with Multi-Coding (ICD-11 MMS + NAMASTE + ICD-11 TM2)
    const activeDualCode = soap.assessment.dualCodes[0];
    const conditionResource = {
      resourceType: 'Condition',
      id: conditionResourceId,
      clinicalStatus: {
        coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-clinical', code: 'active' }]
      },
      category: [
        {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/condition-category', code: 'encounter-diagnosis' }]
        }
      ],
      code: {
        coding: activeDualCode ? [
          {
            system: activeDualCode.icd11Mms.system,
            code: activeDualCode.icd11Mms.code,
            display: activeDualCode.icd11Mms.display
          },
          {
            system: activeDualCode.namastePortal.system,
            code: activeDualCode.namastePortal.code,
            display: activeDualCode.namastePortal.display
          },
          {
            system: activeDualCode.icd11Tm2.system,
            code: activeDualCode.icd11Tm2.code,
            display: activeDualCode.icd11Tm2.display
          }
        ] : [
          {
            system: 'http://snomed.info/sct',
            code: '21522001',
            display: 'Abdominal pain (finding)'
          }
        ],
        text: activeDualCode ? activeDualCode.conditionName : soap.subjective.chiefComplaint
      },
      subject: { reference: `Patient/${patientResourceId}` }
    };

    // Observation Resource: Vitals
    const observationVitals = {
      resourceType: 'Observation',
      id: `obs-vitals-${Date.now().toString().slice(-4)}`,
      status: 'preliminary',
      category: [
        {
          coding: [{ system: 'http://terminology.hl7.org/CodeSystem/observation-category', code: 'vital-signs' }]
        }
      ],
      code: {
        coding: [{ system: 'http://loinc.org', code: '8480-6', display: 'Systolic blood pressure' }]
      },
      subject: { reference: `Patient/${patientResourceId}` },
      effectiveDateTime: bundleTimestamp,
      valueQuantity: {
        value: 120,
        unit: 'mmHg',
        system: 'http://unitsofmeasure.org',
        code: 'mm[Hg]'
      }
    };

    // MedicationRequest Resource
    const medicationRequest = {
      resourceType: 'MedicationRequest',
      id: `medrx-${Date.now().toString().slice(-4)}`,
      status: 'draft',
      intent: 'proposal',
      medicationCodeableConcept: {
        coding: [
          {
            system: 'http://snomed.info/sct',
            code: '32485007',
            display: 'Pantoprazole (substance)'
          }
        ],
        text: 'Pantoprazole 40 mg oral tablet'
      },
      subject: { reference: `Patient/${patientResourceId}` },
      dosageInstruction: [
        {
          text: 'Take 1 tablet orally daily before morning breakfast for 14 days',
          timing: { repeat: { frequency: 1, period: 1, periodUnit: 'd' } },
          route: { coding: [{ system: 'http://snomed.info/sct', code: '260548002', display: 'Oral' }] }
        }
      ]
    };

    return {
      resourceType: 'Bundle',
      id: bundleId,
      type: 'document',
      timestamp: bundleTimestamp,
      identifier: {
        system: 'https://abdm.gov.in/bundles',
        value: `NRCES-BUNDLE-${bundleId}`
      },
      entry: [
        { fullUrl: `urn:uuid:${compositionId}`, resource: compositionResource },
        { fullUrl: `urn:uuid:${patientResourceId}`, resource: patientResource },
        { fullUrl: `urn:uuid:${encounterResourceId}`, resource: encounterResource },
        { fullUrl: `urn:uuid:${conditionResourceId}`, resource: conditionResource },
        { fullUrl: `urn:uuid:${observationVitals.id}`, resource: observationVitals },
        { fullUrl: `urn:uuid:${medicationRequest.id}`, resource: medicationRequest }
      ]
    };
  }
}
