import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { EmergencyAlertModal } from './components/common/EmergencyAlertModal';
import { SettingsModal } from './components/common/SettingsModal';
import { MobileBottomNav } from './components/common/MobileBottomNav';

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
import { PatientMobileHeader } from './components/patient/PatientMobileHeader';

// Doctor & Admin & Privacy
import { DoctorDashboard } from './components/doctor/DoctorDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { PrivacyCenter } from './components/privacy/PrivacyCenter';

const MainContent: React.FC = () => {
  const { role, patientStep, toastMessage } = useApp();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#08090a] text-slate-900 dark:text-slate-100 font-sans selection:bg-teal-500 selection:text-white transition-colors duration-200">
      {/* Enterprise Hospital Navbar */}
      <Navbar />

      {/* Deterministic Emergency Modal (takes over when active) */}
      <EmergencyAlertModal />

      {/* Global Settings & Configuration Panel */}
      <SettingsModal />

      {/* Floating Clinical Toast Notification (Mobile-safe positioning) */}
      {toastMessage && (
        <div 
          role="status" 
          aria-live="polite"
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-50 p-3.5 sm:p-4 bg-white/95 dark:bg-[#16171b]/95 backdrop-blur-xl text-slate-900 dark:text-white rounded-2xl shadow-2xl border border-slate-200 dark:border-white/[0.08] text-xs font-semibold flex items-center gap-2.5 animate-slide-up max-w-md"
        >
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping shrink-0" aria-hidden="true" />
          <span className="truncate">{toastMessage}</span>
        </div>
      )}

      {/* Primary Role Views with Mobile Bottom Clearance */}
      <main className="flex-1 pb-24 md:pb-12" id="main-content">
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
          <div className="py-4 sm:py-8 px-3 sm:px-4 max-w-7xl mx-auto">
            {/* Mobile-only Step Progress Indicator */}
            <PatientMobileHeader />

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

      {/* Fixed Mobile Bottom App Bar */}
      <MobileBottomNav />
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
