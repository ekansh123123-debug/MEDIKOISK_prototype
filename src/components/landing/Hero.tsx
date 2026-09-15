import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  Stethoscope, 
  Sparkles, 
  Mic, 
  FileText, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Users, 
  CheckCircle2 
} from 'lucide-react';
import { Badge } from '../common/Badge';

export const Hero: React.FC = () => {
  const { setRole, setPatientStep, loadDemoScenario } = useApp();

  const handleStartPatientDemo = () => {
    setRole('patient');
    setPatientStep('hospital_qr');
  };

  const handleViewDoctorDashboard = () => {
    setRole('doctor');
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-teal-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-teal-200/30 via-cyan-200/30 to-blue-200/30 dark:from-teal-900/10 dark:via-cyan-900/10 dark:to-blue-900/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <Badge variant="teal" icon={<Sparkles className="w-3.5 h-3.5" />}>
            National MedTech Hackathon 2025
          </Badge>
          <Badge variant="purple" icon={<Users className="w-3.5 h-3.5" />}>
            Ctrl Z Squad • DYPCOE, Akurdi
          </Badge>
          <Badge variant="blue" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
            ABDM M1–M4 & FHIR R4 Ready
          </Badge>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] font-['Outfit']">
            From Patient Input to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Doctor-Ready Case.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            AI-assisted adaptive patient case-taking for faster, connected, and more inclusive healthcare. 
            Reduces OPD queues and physician clerical fatigue while keeping doctors in 100% clinical control.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={handleStartPatientDemo}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold rounded-2xl shadow-xl shadow-teal-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Patient Demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleViewDoctorDashboard}
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Stethoscope className="w-5 h-5 text-teal-600" />
            <span>View Doctor Dashboard</span>
          </button>
        </div>

        {/* Quick Demo Scenario Bar */}
        <div className="mt-8 p-3 max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 pl-2">
            <Sparkles className="w-4 h-4 text-teal-600" />
            Quick Evaluator Shortcuts:
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => loadDemoScenario('abdominal')}
              className="px-2.5 py-1 bg-teal-50 hover:bg-teal-100 text-teal-800 font-medium rounded-lg transition-colors"
            >
              1. Adaptive DAG
            </button>
            <button
              onClick={() => loadDemoScenario('ocr')}
              className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium rounded-lg transition-colors"
            >
              2. Prescription OCR
            </button>
            <button
              onClick={() => loadDemoScenario('emergency')}
              className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-800 font-medium rounded-lg transition-colors"
            >
              3. Emergency Stop
            </button>
            <button
              onClick={() => loadDemoScenario('doctor_approve')}
              className="px-2.5 py-1 bg-purple-50 hover:bg-purple-100 text-purple-800 font-medium rounded-lg transition-colors"
            >
              4. Doctor Sign-off
            </button>
          </div>
        </div>

        {/* Workflow Chain Visualizer */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="text-center mb-6">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                End-to-End Clinical Case Flow
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                How MEDIKOISK Replaces OPD Administrative Chaos
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
              {[
                { step: '01', title: 'Hospital QR', desc: 'Instant ABHA or Guest Scan & Share', icon: <Activity className="w-5 h-5 text-teal-600" /> },
                { step: '02', title: 'Adaptive Intake', desc: 'Dynamic DAG with Voice / Touch', icon: <Mic className="w-5 h-5 text-blue-600" /> },
                { step: '03', title: 'Document OCR', desc: 'TrOCR & BioBERT extraction', icon: <FileText className="w-5 h-5 text-purple-600" /> },
                { step: '04', title: 'Patient Verify', desc: 'Validates confidence <95% meds', icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" /> },
                { step: '05', title: 'Queue Token', desc: 'Live tracker with counter room', icon: <Clock className="w-5 h-5 text-amber-600" /> },
                { step: '06', title: 'Doctor Review', desc: 'SOAP summary with source provenance', icon: <Stethoscope className="w-5 h-5 text-teal-600" /> }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 flex flex-col items-center text-center group hover:border-teal-500 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    STEP {item.step}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
