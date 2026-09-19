import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, FileText, Activity, Pill, ExternalLink, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { Badge } from '../common/Badge';

export const LongitudinalTimeline: React.FC = () => {
  const { documents, currentPatient, currentSoap } = useApp();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const timelineEvents = [
    {
      id: 'EVT-01',
      date: '18 Jan 2025',
      title: 'Biochemistry Blood Test',
      facility: 'Dr. Lal PathLabs (ABHA Linked)',
      category: 'lab_report',
      icon: <Activity className="w-4 h-4 text-blue-600" />,
      badge: 'Biochemistry',
      summary: 'Fasting Blood Sugar: 148 mg/dL [High], HbA1c: 7.8% [Elevated]',
      details: {
        tests: [
          { name: 'Fasting Blood Glucose', value: '148 mg/dL', ref: '70-100', flag: 'High' },
          { name: 'HbA1c Glycosylated Hb', value: '7.8%', ref: '<6.5%', flag: 'Elevated' },
          { name: 'Serum Creatinine', value: '0.9 mg/dL', ref: '0.7-1.2', flag: 'Normal' }
        ],
        verifiedBy: 'Pathologist Dr. M. Iyer'
      }
    },
    {
      id: 'EVT-02',
      date: '10 Feb 2025',
      title: 'Outpatient Prescription Slip',
      facility: 'K.E.M. Hospital OPD Clinic',
      category: 'prescription',
      icon: <Pill className="w-4 h-4 text-purple-600" />,
      badge: 'TrOCR Extracted',
      summary: 'Pantoprazole 40mg OD x 14d, Sucralfate 1000mg x 7d, Domperidone',
      details: {
        doctor: 'Dr. A. K. Shukla, MD (HPR: 14-8892-0012)',
        diagnosis: 'Peptic Dyspepsia & Reflux',
        medicationsCount: 4
      }
    },
    {
      id: 'EVT-03',
      date: 'Today (Active)',
      title: 'Current Adaptive Intake Encounter',
      facility: 'DYP Hospital & Research Centre',
      category: 'current_visit',
      icon: <Calendar className="w-4 h-4 text-teal-600" />,
      badge: 'Active Case',
      summary: currentSoap?.subjective.chiefComplaint || 'Epigastric abdominal pain for 3 days',
      details: {
        severity: '6/10 on visual scale',
        aggravating: 'Post-prandial (30-60 mins)',
        safetyStatus: 'Zero emergency red flags detected'
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Longitudinal Health History Timeline
          </h3>
          <p className="text-xs text-slate-500">
            Chronological aggregation from ABDM M3 Health Information User (HIU) record exchange.
          </p>
        </div>
        <Badge variant="teal">ABDM Milestone 3 HIU</Badge>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-white/[0.1]">
        {timelineEvents.map((evt) => (
          <div key={evt.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#111622] border-2 border-teal-600 flex items-center justify-center shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
            </div>

            {/* Event Card */}
            <div 
              onClick={() => setSelectedEvent(evt)}
              className="p-4 bg-slate-50 dark:bg-[#161d2b] hover:bg-teal-50/50 dark:hover:bg-[#202227] border border-slate-200 dark:border-white/[0.07] hover:border-teal-500/50 dark:hover:border-teal-500/40 rounded-2xl cursor-pointer transition-all shadow-sm"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-teal-700 dark:text-teal-400">
                  {evt.date}
                </span>
                <Badge variant={evt.category === 'current_visit' ? 'teal' : 'slate'}>
                  {evt.badge}
                </Badge>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {evt.icon}
                <span>{evt.title}</span>
              </h4>

              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                {evt.facility}
              </span>

              <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 font-medium">
                {evt.summary}
              </p>

              <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-teal-600 dark:text-teal-400">
                <span>View Full Record Details</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Event Details Modal / Drawer */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg bg-white dark:bg-[#161d2b] rounded-3xl p-6 border border-slate-200 dark:border-white/[0.08] shadow-2xl space-y-4 animate-scale-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.07]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {selectedEvent.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">{selectedEvent.date} • {selectedEvent.facility}</span>
                </div>
              </div>
              <button onClick={() => setSelectedEvent(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Breakdown */}
            <div className="p-4 bg-slate-50 dark:bg-[#131926] rounded-2xl space-y-2 text-xs border border-slate-200/60 dark:border-white/[0.06]">
              <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[10px]">
                Longitudinal Data Attributes:
              </span>
              <pre className="text-xs font-mono text-slate-800 dark:text-slate-200 whitespace-pre-wrap">
                {JSON.stringify(selectedEvent.details, null, 2)}
              </pre>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 bg-slate-200 dark:bg-[#202227] text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-[#2a2d33] rounded-xl text-xs font-bold transition-colors"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
