import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Stethoscope, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  AlertTriangle, 
  Sparkles, 
  Pill, 
  Leaf, 
  Layers, 
  Clock, 
  Check, 
  Share2, 
  PenTool
} from 'lucide-react';
import { Badge } from '../common/Badge';
import { ProvenancePopover } from './ProvenancePopover';
import { LongitudinalTimeline } from './LongitudinalTimeline';
import { FhirBundleViewer } from './FhirBundleViewer';
import { AbdmService } from '../../services/abdmService';

export const DoctorDashboard: React.FC = () => {
  const { 
    currentPatient, 
    currentToken, 
    currentSoap, 
    documents, 
    approveSoapSummary,
    showToast,
    t 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'soap' | 'timeline' | 'medications' | 'ayush' | 'fhir'>('soap');
  const [hasReviewed, setHasReviewed] = useState(false);
  const [doctorNotes, setDoctorNotes] = useState('Patient examined. Mild epigastric tenderness noted on deep palpation; no rebound tenderness or guarding. Advised Pantoprazole 40mg OD AC x 14 days and dietary regulation.');

  if (!currentSoap) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <p className="text-slate-500 dark:text-slate-400">No active patient case loaded. Please complete patient intake or select a patient from the OPD queue.</p>
      </div>
    );
  }

  const handleApproveCase = () => {
    if (!hasReviewed) {
      alert('Please check the verification acknowledgement box before signing.');
      return;
    }
    const signature = `SIG-HPR-148892-${Date.now()}`;
    approveSoapSummary(signature, doctorNotes);

    // Auto link Care Context under ABDM Milestone 2
    AbdmService.linkCareContext(
      currentPatient.id, 
      currentSoap.encounterId, 
      `OPD Consultation - ${currentSoap.subjective.chiefComplaint}`
    );
  };

  const isEmergency = currentToken?.priority === 'EMERGENCY';

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-6">
      {/* 1. TOP CLINICAL HEADER BAR */}
      <div className="glass-card-elevated rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-md font-display">
            {currentPatient.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                {currentPatient.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono tabular-nums bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
                {currentPatient.age} yrs • {currentPatient.gender.toUpperCase()}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/20 font-mono">
                {currentPatient.abhaAddress || 'Walk-in Guest'}
              </span>
              <Badge variant={isEmergency ? 'red' : 'green'} pulsing={isEmergency}>
                {isEmergency ? 'CRITICAL TRIAGE RED' : 'STANDARD OPD'}
              </Badge>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Token: <span className="font-bold font-mono tabular-nums text-teal-700 dark:text-teal-300">{currentToken?.tokenNumber || 'A-027'}</span> • 
              Encounter: <span className="font-mono text-slate-600 dark:text-slate-300">{currentSoap.encounterId}</span> • 
              Phone: <span className="font-mono tabular-nums">{currentPatient.phone}</span>
            </p>
          </div>
        </div>

        {/* Doctor Status & Sign-off State */}
        <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-200 dark:border-slate-800">
          <div className="text-right">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Attending Clinician</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              Dr. A. K. Shukla, MD (HPR: 14-8892-0012)
            </span>
          </div>
          <div className="p-2.5 bg-teal-500/10 text-teal-700 dark:text-teal-300 rounded-xl border border-teal-500/20">
            <Stethoscope className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION TABS */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        {[
          { id: 'soap', label: 'Clinical SOAP Summary', icon: <FileText className="w-4 h-4" /> },
          { id: 'timeline', label: 'Longitudinal Timeline', icon: <Clock className="w-4 h-4" /> },
          { id: 'medications', label: 'Medications & OCR', icon: <Pill className="w-4 h-4" /> },
          { id: 'ayush', label: 'AYUSH & Dual-Coding', icon: <Leaf className="w-4 h-4" /> },
          { id: 'fhir', label: 'FHIR R4 Bundle', icon: <Layers className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 3. TAB CONTENT */}
      <div className="glass-card-elevated rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        
        {/* TAB 1: SOAP SUMMARY */}
        {activeTab === 'soap' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 font-display">
                  <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                  Pre-Consultation Clinical Intake Summary
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Synthesized from multimodal adaptive DAG input. Interactive provenance links indicate raw patient inputs.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20 self-start sm:self-auto">
                AI Clinical Preparation • Human Sign-Off Required
              </span>
            </div>

            {/* SUBJECTIVE SECTION */}
            <div className="p-5 bg-slate-50 dark:bg-slate-900/70 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  I. SUBJECTIVE NARRATIVE
                </h4>
                <span className="text-[11px] text-slate-500">Patient-reported assertions</span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-slate-900 dark:text-white">Chief Complaint: </strong>
                  <span className="text-slate-700 dark:text-slate-300">
                    {currentSoap.subjective.chiefComplaint}
                  </span>
                  {currentSoap.provenanceList[0] && (
                    <ProvenancePopover assertion={currentSoap.provenanceList[0]} />
                  )}
                </div>

                <div>
                  <strong className="text-slate-900 dark:text-white">History of Present Illness: </strong>
                  <p className="text-slate-700 dark:text-slate-300 mt-1 leading-relaxed inline">
                    {currentSoap.subjective.historyOfPresentIllness}
                  </p>
                  {currentSoap.provenanceList[1] && (
                    <ProvenancePopover assertion={currentSoap.provenanceList[1]} />
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <strong className="text-slate-900 dark:text-white">Associated Symptoms: </strong>
                    <span className="text-slate-700 dark:text-slate-300">
                      {currentSoap.subjective.associatedSymptoms.join(', ')}
                    </span>
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Prior Interventions: </strong>
                    <span className="text-slate-700 dark:text-slate-300">
                      {currentSoap.subjective.medicationHistory.join(', ')}
                    </span>
                    {currentSoap.provenanceList[3] && (
                      <ProvenancePopover assertion={currentSoap.provenanceList[3]} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* OBJECTIVE SECTION */}
            <div className="p-5 bg-slate-50 dark:bg-slate-900/70 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  II. OBJECTIVE VITALS & OBSERVATIONS
                </h4>
                <span className="text-[11px] text-slate-500">Self-reported / Kiosk Sensors</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Pulse Rate</span>
                  <span className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white">
                    {currentSoap.objective.reportedVitals.pulse || '76 bpm'}
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Blood Pressure</span>
                  <span className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white">
                    {currentSoap.objective.reportedVitals.bloodPressure || '122/80 mmHg'}
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Body Temperature</span>
                  <span className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white">
                    {currentSoap.objective.reportedVitals.temperature || '98.4 °F'}
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">SpO2 Oxygen</span>
                  <span className="text-sm font-bold font-mono tabular-nums text-slate-900 dark:text-white">
                    {currentSoap.objective.reportedVitals.spO2 || '99%'}
                  </span>
                </div>
              </div>
            </div>

            {/* ASSESSMENT SECTION WITH DUAL CODES */}
            <div className="p-5 bg-slate-50 dark:bg-slate-900/70 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  III. CLINICAL ASSESSMENT & DUAL CODES
                </h4>
                <span className="text-[11px] text-slate-500 font-mono">ICD-11 + NAMASTE + TM2</span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-slate-900 dark:text-white">AI Pattern Differential: </strong>
                  <span className="text-slate-700 dark:text-slate-300">
                    {currentSoap.assessment.differentialConsiderations.join(', ')}
                  </span>
                </div>

                {/* Dual Coding Cards */}
                <div className="pt-2 space-y-2">
                  {currentSoap.assessment.dualCodes.map((code, idx) => (
                    <div key={idx} className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">{code.conditionName}</span>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          ICD-11 MMS: <span className="text-teal-600 dark:text-teal-400 font-bold">{code.icd11Mms.code}</span> ({code.icd11Mms.display})
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                          NAMASTE: {code.namastePortal.code}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                          TM2: {code.icd11Tm2.code}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PLAN SECTION */}
            <div className="p-5 bg-slate-50 dark:bg-slate-900/70 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                IV. PRELIMINARY PLAN & ORDERS
              </h4>
              <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                {currentSoap.plan.preliminaryRecommendations.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: TIMELINE */}
        {activeTab === 'timeline' && <LongitudinalTimeline />}

        {/* TAB 3: MEDICATIONS & OCR */}
        {activeTab === 'medications' && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              Prescription Extractions & Past Medications
            </h4>
            <div className="space-y-2 text-xs">
              {documents.map((doc) => (
                <div key={doc.id} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                    <span>{doc.fileName}</span>
                    <span className="text-teal-600 dark:text-teal-400 font-mono tabular-nums">Confidence: {(doc.confidenceScore * 100).toFixed(0)}%</span>
                  </div>
                  <div className="space-y-1">
                    {doc.extractedMedications.map(med => (
                      <div key={med.id} className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400">
                        <span>• {med.name} {med.strength} ({med.frequency})</span>
                        <span className="font-mono">{med.verificationStatus.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: AYUSH */}
        {activeTab === 'ayush' && (
          <div className="space-y-4 text-xs">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              Traditional Medicine Assessment
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="font-bold text-amber-600 dark:text-amber-300 block mb-1">Prakriti Profile</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Pitta Dominant</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Metabolically intense with tendency towards hyperacidity and reflux.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="font-bold text-amber-600 dark:text-amber-300 block mb-1">Agni Status</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Tikshna (Intense)</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Hyper-active digestive fire requiring cooling herbal palliatives.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className="font-bold text-amber-600 dark:text-amber-300 block mb-1">Ama Accumulation</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Saama (Mild)</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Indicates dietary endotoxins from irregular meal schedules.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: FHIR VIEWER */}
        {activeTab === 'fhir' && <FhirBundleViewer />}
      </div>

      {/* 4. DOCTOR APPROVAL & DIGITAL SIGN-OFF BAR */}
      <div className="glass-card-elevated rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PenTool className="w-5 h-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base font-display">
              Physician Final Review & Digital Sign-off
            </h3>
          </div>
          {currentSoap.approvedByDoctor && (
            <Badge variant="green" icon={<CheckCircle2 className="w-3.5 h-3.5" />}>
              Case Finalized & Signed
            </Badge>
          )}
        </div>

        {/* Doctor Clinical Notes */}
        <div>
          <label htmlFor="doctor-clinical-notes" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Doctor Physical Findings & Prescription Orders
          </label>
          <textarea
            id="doctor-clinical-notes"
            rows={2}
            value={doctorNotes}
            onChange={(e) => setDoctorNotes(e.target.value)}
            disabled={currentSoap.approvedByDoctor}
            className="w-full p-3 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:opacity-75"
          />
        </div>

        {/* Acknowledgment Checkbox */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="doctorReviewCheck"
            checked={hasReviewed || currentSoap.approvedByDoctor}
            onChange={(e) => setHasReviewed(e.target.checked)}
            disabled={currentSoap.approvedByDoctor}
            className="mt-0.5 accent-teal-600 w-4 h-4 cursor-pointer"
          />
          <label htmlFor="doctorReviewCheck" className="text-xs text-slate-700 dark:text-slate-300 cursor-pointer font-medium">
            I have personally examined the patient, reviewed the AI-assisted intake summary, inspected source provenance, and verified all medications.
          </label>
        </div>

        {/* Sign Button */}
        {!currentSoap.approvedByDoctor ? (
          <button
            type="button"
            onClick={handleApproveCase}
            className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 text-sm transition-all tactile-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4 text-white" aria-hidden="true" />
            <span>Approve & Sign Clinical Case (Publish to ABDM M2)</span>
          </button>
        ) : (
          <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-200 flex items-center justify-between">
            <div>
              <span className="font-bold block">Digitally Signed by Dr. A. K. Shukla, MD</span>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-300 font-mono">
                Signature Ref: {currentSoap.doctorDigitalSignature} • Care Context CC-{currentPatient.id} Linked
              </span>
            </div>
            <Badge variant="green">ABDM M2 Published</Badge>
          </div>
        )}
      </div>
    </div>
  );
};
