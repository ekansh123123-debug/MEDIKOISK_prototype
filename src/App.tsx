import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { EmergencyAlertModal } from './components/common/EmergencyAlertModal';

// Landing & Overview Components
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
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 font-sans selection:bg-teal-500 selection:text-white transition-colors duration-200">
      {/* Enterprise Hospital Navbar */}
      <Navbar />

      {/* Deterministic Emergency Modal (takes over when active) */}
      <EmergencyAlertModal />

      {/* Floating Clinical Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl text-slate-900 dark:text-white rounded-2xl shadow-2xl border border-slate-200 dark:border-teal-500/30 text-xs font-semibold flex items-center gap-2.5 animate-slide-up max-w-md">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Primary Role Views */}
      <main className="flex-1">
        {role === 'landing' && (
          <div className="space-y-0">
            <Hero />
            <ProblemSolution />
            <WhyDifferent />
            <ImpactMetrics />
            <Feasibility />
          </div>
        )}

        {role === 'patient' && (
          <div className="py-8 px-4 max-w-7xl mx-auto">
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
      </main>

      {/* Enterprise Footer */}
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
