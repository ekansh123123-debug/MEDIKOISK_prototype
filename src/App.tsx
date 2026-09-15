import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { EmergencyAlertModal } from './components/common/EmergencyAlertModal';
import { HackathonPresentationBar } from './components/demo/HackathonPresentationBar';

// Landing Page Components
import { Hero } from './components/landing/Hero';
import { ProblemSolution } from './components/landing/ProblemSolution';
import { WhyDifferent } from './components/landing/WhyDifferent';
import { ImpactMetrics } from './components/landing/ImpactMetrics';
import { Feasibility } from './components/landing/Feasibility';

// Patient Intake Components
import { HospitalQRScan } from './components/patient/HospitalQRScan';
import { AbhaLogin } from './components/patient/AbhaLogin';
import { ConsentStep } from './components/patient/ConsentStep';
import { BasicDetails } from './components/patient/BasicDetails';
import { AdaptiveIntake } from './components/patient/AdaptiveIntake';
import { DocumentUploadStep } from './components/patient/DocumentUploadStep';
import { MedicationVerificationStep } from './components/patient/MedicationVerificationStep';
import { AyushIntakeStep } from './components/patient/AyushIntakeStep';
import { QueueTokenDisplay } from './components/patient/QueueTokenDisplay';

// Doctor & Admin & Privacy
import { DoctorDashboard } from './components/doctor/DoctorDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { PrivacyCenter } from './components/privacy/PrivacyCenter';

const MainContent: React.FC = () => {
  const { role, patientStep, toastMessage } = useApp();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* Top Hackathon Controller */}
      <HackathonPresentationBar />

      {/* Main Navbar */}
      <Navbar />

      {/* Deterministic Emergency Modal (takes over when active) */}
      <EmergencyAlertModal />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-slate-900 text-white rounded-2xl shadow-2xl border border-teal-500/40 text-xs font-semibold flex items-center gap-2 animate-slide-up max-w-md">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Role-Based Content Area */}
      <main className="flex-1">
        {role === 'landing' && (
          <>
            <Hero />
            <ProblemSolution />
            <WhyDifferent />
            <ImpactMetrics />
            <Feasibility />
          </>
        )}

        {role === 'patient' && (
          <div className="py-6">
            {patientStep === 'hospital_qr' && <HospitalQRScan />}
            {patientStep === 'abha_login' && <AbhaLogin />}
            {patientStep === 'consent' && <ConsentStep />}
            {patientStep === 'basic_info' && <BasicDetails />}
            {(patientStep === 'complaint' || patientStep === 'adaptive_questions') && <AdaptiveIntake />}
            {patientStep === 'document_upload' && <DocumentUploadStep />}
            {patientStep === 'medication_verify' && <MedicationVerificationStep />}
            {patientStep === 'ayush_intake' && <AyushIntakeStep />}
            {(patientStep === 'queue_token' || patientStep === 'queue_tracking') && <QueueTokenDisplay />}
          </div>
        )}

        {role === 'doctor' && <DoctorDashboard />}

        {role === 'admin' && <AdminDashboard />}

        {role === 'privacy' && <PrivacyCenter />}

        {role === 'demo' && (
          <div className="max-w-5xl mx-auto py-12 px-4 space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
                Ctrl Z Squad • Hackathon Judging Narrative
              </span>
              <h2 className="text-3xl font-extrabold font-['Outfit']">
                Interactive Hackathon Demonstration Script
              </h2>
              <p className="text-xs text-slate-500 max-w-xl mx-auto">
                Follow this recommended 5-minute evaluator tour demonstrating the complete clinical intake lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <span className="text-xs font-bold text-teal-600 uppercase">Scenario A</span>
                <h3 className="text-base font-bold">Adaptive Clinical DAG Intake</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Patient presents with epigastric pain. The entropy engine traverses onset, food relationship, radiation, and pain scale, progressively narrowing the differential space.
                </p>
                <button
                  onClick={() => {
                    const { loadDemoScenario } = (window as any).__medikoisk_app || {};
                  }}
                  className="px-4 py-2 bg-teal-600 text-white font-bold rounded-xl text-xs hover:bg-teal-700 transition-colors"
                >
                  Run Scenario A &rarr;
                </button>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <span className="text-xs font-bold text-blue-600 uppercase">Scenario B</span>
                <h3 className="text-base font-bold">Prescription TrOCR & Human Verification</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Extracts handwritten medications. Items with confidence &lt; 95% trigger mandatory patient verification cards with Verify, Edit, or Reject.
                </p>
                <button
                  onClick={() => {
                    // Handled by top bar
                  }}
                  className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs hover:bg-blue-700 transition-colors"
                >
                  Run Scenario B &rarr;
                </button>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <span className="text-xs font-bold text-rose-600 uppercase">Scenario C</span>
                <h3 className="text-base font-bold">Deterministic Emergency Red-Flag</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Input "severe chest pain radiating to left arm with sweating" triggers immediate hard-stop, Casualty direction, priority queue escalation, and triage nurse alarm.
                </p>
                <button
                  onClick={() => {
                    // Handled by top bar
                  }}
                  className="px-4 py-2 bg-rose-600 text-white font-bold rounded-xl text-xs hover:bg-rose-700 transition-colors"
                >
                  Run Scenario C &rarr;
                </button>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <span className="text-xs font-bold text-purple-600 uppercase">Scenario D</span>
                <h3 className="text-base font-bold">Doctor SOAP Review & FHIR Export</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Inspect clinical summary, click "Source" to view raw voice transcript provenance, review AYUSH dual-coding, sign digitally, and export NRCeS FHIR R4 bundle.
                </p>
                <button
                  onClick={() => {
                    // Handled by top bar
                  }}
                  className="px-4 py-2 bg-purple-600 text-white font-bold rounded-xl text-xs hover:bg-purple-700 transition-colors"
                >
                  Run Scenario D &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;
