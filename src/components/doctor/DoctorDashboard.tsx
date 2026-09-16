import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Stethoscope, 
  User, 
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
  ShieldCheck, 
  PenTool,
  Activity
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
    showToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'soap' | 'timeline' | 'medications' | 'ayush' | 'fhir'>('soap');
  const [hasReviewed, setHasReviewed] = useState(false);
  const [doctorNotes, setDoctorNotes] = useState('Patient examined. Mild epigastric tenderness noted on deep palpation; no rebound tenderness or guarding. Advised Pantoprazole 40mg OD AC x 14 days and dietary regulation.');

  if (!currentSoap) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <p className="text-slate-400">No active patient case loaded. Please complete patient intake or select a patient from the OPD queue.</p>
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
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in space-y-6">
      {/* 1. TOP CLINICAL HEADER BAR */}
      <div className="glass-card-elevated rounded-3xl p-6 border border-teal-500/20 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xl shadow-lg">
            {currentPatient.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl font-bold text-white font-display">
                {currentPatient.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                {currentPatient.age} yrs • {currentPatient.gender.toUpperCase()}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/10 text-sky-300 border border-sky-500/20">
                {currentPatient.abhaAddress || 'Walk-in Guest'}
              </span>
              <Badge variant={isEmergency ? 'red' : 'green'} pulsing={isEmergency}>
                {isEmergency ? 'CRITICAL TRIAGE RED' : 'STANDARD OPD'}
              </Badge>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Token: <span className="font-bold text-teal-300">{currentToken?.tokenNumber || 'A-027'}</span> • 
              Encounter: <span className="font-mono text-slate-300">{currentSoap.encounterId}</span> • 
              Phone: {currentPatient.phone}
            </p>
          </div>
        </div>

        {/* Doctor Status & Sign-off State */}
        <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
          <div className="text-right">
            <span className="text-[11px] text-slate-400 block font-medium">Attending Clinician</span>
            <span className="text-xs font-bold text-white">
              Dr. A. K. Shukla, MD (HPR: 14-8892-0012)
            </span>
          </div>
          <div className="p-2.5 bg-teal-500/10 text-teal-300 rounded-xl border border-teal-500/20">
            <Stethoscope className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION TABS */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-800 pb-2">
        {[
          { id: 'soap', label: 'Clinical SOAP Summary', icon: <FileText className="w-4 h-4" /> },
          { id: 'timeline', label: 'Longitudinal Timeline', icon: <Clock className="w-4 h-4" /> },
          { id: 'medications', label: 'Medications & OCR', icon: <Pill className="w-4 h-4" /> },
          { id: 'ayush', label: 'AYUSH & Dual-Coding', icon: <Leaf className="w-4 h-4" /> },
          { id: 'fhir', label: 'FHIR R4 Bundle', icon: <Layers className="w-4 h-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. TAB CONTENT */}
      <div className="glass-card-elevated rounded-3xl p-6 sm:p-8 border border-teal-500/20 shadow-xl space-y-6">
        
        {/* TAB 1: SOAP SUMMARY */}
        {activeTab === 'soap' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                  <Sparkles className="w-5 h-5 text-teal-400" />
                  Pre-Consultation Clinical Intake Summary
                </h3>
                <p className="text-xs text-slate-400">
                  Synthesized from multimodal adaptive DAG input. Interactive provenance links indicate raw patient inputs.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                AI Clinical Preparation • Human Sign-Off Required
              </span>
            </div>

            {/* SUBJECTIVE SECTION */}
            <div className="p-5 bg-slate-900/70 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-teal-400">
                  I. SUBJECTIVE NARRATIVE
                </h4>
                <span className="text-[11px] text-slate-500">Patient-reported assertions</span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-white">Chief Complaint: </strong>
                  <span className="text-slate-300">
                    {currentSoap.subjective.chiefComplaint}
                  </span>
                  {currentSoap.provenanceList[0] && (
                    <ProvenancePopover assertion={currentSoap.provenanceList[0]} />
                  )}
                </div>

                <div>
                  <strong className="text-white">History of Present Illness: </strong>
                  <p className="text-slate-300 mt-1 leading-relaxed inline">
                    {currentSoap.subjective.historyOfPresentIllness}
                  </p>
                  {currentSoap.provenanceList[1] && (
                    <ProvenancePopover assertion={currentSoap.provenanceList[1]} />
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <div>
                    <strong className="text-white">Associated Symptoms: </strong>
                    <span className="text-slate-300">
                      {currentSoap.subjective.associatedSymptoms.join(', ')}
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Prior Interventions: </strong>
                    <span className="text-slate-300">
                      {currentSoap.subjective.medicationHistory.join(', ')}
                    </span>
                    {currentSoap.provenanceList[3] && (
                      <ProvenancePopover assertion={currentSoap.provenanceList[3]} />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <div>
                    <strong className="text-white">Lifestyle & Diet: </strong>
                    <span className="text-slate-300">
                      {currentSoap.subjective.lifestyleDiet}
                    </span>
                  </div>
                  <div>
                    <strong className="text-white">Traditional Medicine / AYUSH: </strong>
                    <span className="text-slate-300">
                      {currentSoap.subjective.ayushNarrative}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* OBJECTIVE SECTION */}
            <div className="p-5 bg-slate-900/70 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400">
                  II. OBJECTIVE OBSERVATIONS & VITALS
                </h4>
                <span className="text-[11px] text-slate-500">Clinical baseline measurements</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold block">Body Temperature</span>
                  <span className="font-bold text-white text-sm">
                    {currentSoap.objective.reportedVitals.temperature || '98.4 °F'}
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold block">Pulse Rate</span>
                  <span className="font-bold text-white text-sm">
                    {currentSoap.objective.reportedVitals.pulse || '76 bpm'}
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold block">Blood Pressure</span>
                  <span className="font-bold text-white text-sm">
                    {currentSoap.objective.reportedVitals.bloodPressure || '120/80 mmHg'}
                  </span>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-bold block">SpO2 Oxygen Saturation</span>
                  <span className="font-bold text-white text-sm">
                    {currentSoap.objective.reportedVitals.spO2 || '98%'}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic">
                Note: {currentSoap.objective.physicalObservationsNote}
              </p>
            </div>

            {/* ASSESSMENT SECTION */}
            <div className="p-5 bg-slate-900/70 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-400">
                  III. AI CLINICAL PATTERNS & DIFFERENTIAL CONSIDERATIONS
                </h4>
                <Badge variant="purple">Assistive Pattern Recognition</Badge>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-300">
                {currentSoap.assessment.aiPatterns.map((pat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{pat}</span>
                  </li>
                ))}
              </ul>

              {/* Dual-Coded Diagnosis Card */}
              {currentSoap.assessment.dualCodes.length > 0 && (
                <div className="mt-3 p-3.5 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Harmonized Dual-Coding Mapping:
                  </span>
                  {currentSoap.assessment.dualCodes.map((dc, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2 bg-slate-800/80 rounded-lg border border-slate-700">
                        <span className="text-[10px] font-bold text-sky-400 block">ICD-11 MMS</span>
                        <span className="font-mono font-bold text-white">{dc.icd11Mms.code}</span>
                        <span className="text-[11px] text-slate-400 block truncate">{dc.icd11Mms.display}</span>
                      </div>
                      <div className="p-2 bg-slate-800/80 rounded-lg border border-slate-700">
                        <span className="text-[10px] font-bold text-amber-400 block">NAMASTE Portal</span>
                        <span className="font-mono font-bold text-white">{dc.namastePortal.code}</span>
                        <span className="text-[11px] text-slate-400 block truncate">{dc.namastePortal.display}</span>
                      </div>
                      <div className="p-2 bg-slate-800/80 rounded-lg border border-slate-700">
                        <span className="text-[10px] font-bold text-teal-400 block">ICD-11 TM2</span>
                        <span className="font-mono font-bold text-white">{dc.icd11Tm2.code}</span>
                        <span className="text-[11px] text-slate-400 block truncate">{dc.icd11Tm2.display}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-[11px] text-slate-400 italic mt-2">
                Disclaimer: {currentSoap.assessment.clinicalDisclaimer}
              </p>
            </div>

            {/* PLAN SECTION */}
            <div className="p-5 bg-slate-900/70 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                  IV. PRELIMINARY RECOMMENDATIONS (FOR PHYSICIAN VERIFICATION)
                </h4>
                <Badge variant="green">Treating Doctor Verification</Badge>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-300">
                {currentSoap.plan.preliminaryRecommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: LONGITUDINAL TIMELINE */}
        {activeTab === 'timeline' && <LongitudinalTimeline />}

        {/* TAB 3: MEDICATIONS */}
        {activeTab === 'medications' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white font-display">
              Active & Extracted Prescription Medications
            </h3>
            <div className="space-y-2">
              {documents.flatMap(d => d.extractedMedications).map(med => (
                <div key={med.id} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white">{med.name} {med.strength}</span>
                    <span className="text-slate-400 ml-2">({med.route} • {med.frequency} • {med.duration})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400">{(med.confidence * 100).toFixed(0)}% Conf</span>
                    <Badge variant={med.verificationStatus === 'verified' ? 'green' : 'amber'}>
                      {med.verificationStatus.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: AYUSH */}
        {activeTab === 'ayush' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white font-display">
              Traditional Medicine (AYUSH) Clinical Baseline
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-300 block mb-1">Prakriti Constitution</span>
                <span className="text-sm font-bold text-white">Pitta Predominant</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Warm metabolic rate; prone to hyperacidity (Vidagdha Jirna) and bile irritation.
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-300 block mb-1">Agni Status</span>
                <span className="text-sm font-bold text-white">Tikshna (Intense)</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Hyper-active digestive fire requiring cooling herbal palliatives.
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-300 block mb-1">Ama Accumulation</span>
                <span className="text-sm font-bold text-white">Saama (Mild)</span>
                <p className="text-[11px] text-slate-400 mt-1">
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
      <div className="glass-card-elevated rounded-3xl p-6 border border-teal-500/30 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PenTool className="w-5 h-5 text-teal-400" />
            <h3 className="font-bold text-white text-base font-display">
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
          <label className="block text-xs font-bold text-slate-300 mb-1">
            Doctor Physical Findings & Prescription Orders
          </label>
          <textarea
            rows={2}
            value={doctorNotes}
            onChange={(e) => setDoctorNotes(e.target.value)}
            disabled={currentSoap.approvedByDoctor}
            className="w-full p-3 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-teal-500 disabled:opacity-75"
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
            className="mt-0.5 accent-teal-400 w-4 h-4 cursor-pointer"
          />
          <label htmlFor="doctorReviewCheck" className="text-xs text-slate-300 cursor-pointer font-medium">
            I have personally examined the patient, reviewed the AI-assisted intake summary, inspected source provenance, and verified all medications.
          </label>
        </div>

        {/* Sign Button */}
        {!currentSoap.approvedByDoctor ? (
          <button
            onClick={handleApproveCase}
            className="w-full py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-slate-950 font-bold rounded-2xl shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 text-sm transition-all"
          >
            <CheckCircle2 className="w-5 h-5 text-slate-950" />
            <span>Approve & Sign Clinical Case (Publish to ABDM M2)</span>
          </button>
        ) : (
          <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 text-xs text-emerald-200 flex items-center justify-between">
            <div>
              <span className="font-bold block">Digitally Signed by Dr. A. K. Shukla, MD</span>
              <span className="text-[11px] text-emerald-300 font-mono">
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
