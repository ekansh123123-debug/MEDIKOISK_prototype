import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ProvenanceAssertion } from '../../types';
import { ExternalLink, Check, Edit3, X, Sparkles, User, FileText, Mic } from 'lucide-react';
import { Badge } from '../common/Badge';

interface ProvenancePopoverProps {
  assertion: ProvenanceAssertion;
}

export const ProvenancePopover: React.FC<ProvenancePopoverProps> = ({ assertion }) => {
  const { updateProvenanceStatus } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(assertion.assertionText);

  const getSourceIcon = () => {
    switch (assertion.sourceType) {
      case 'voice_transcript':
        return <Mic className="w-3.5 h-3.5 text-teal-600" />;
      case 'patient_questionnaire':
        return <User className="w-3.5 h-3.5 text-blue-600" />;
      case 'ocr_prescription':
        return <FileText className="w-3.5 h-3.5 text-purple-600" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-teal-600" />;
    }
  };

  return (
    <div className="relative inline-block ml-1.5">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-teal-50 hover:bg-teal-100 dark:bg-teal-950/50 dark:hover:bg-teal-900 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 transition-colors"
        title="Click to view raw patient voice/text source provenance"
      >
        {getSourceIcon()}
        <span>Source</span>
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div className="absolute left-0 bottom-full mb-2 z-50 w-80 sm:w-96 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl space-y-3 text-xs animate-scale-up">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[10px]">
                Clinical Provenance Audit
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* AI Assertion */}
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block">
              AI Synthesized Assertion:
            </span>
            {isEditing ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full mt-1 p-2 bg-slate-50 dark:bg-slate-800 border rounded-lg text-xs"
              />
            ) : (
              <p className="font-semibold text-slate-800 dark:text-slate-100 mt-0.5">
                "{assertion.doctorEditedText || assertion.assertionText}"
              </p>
            )}
          </div>

          {/* Raw Source Snippet */}
          <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold mb-1">
              <span>Raw Patient Input:</span>
              <span className="capitalize">{assertion.sourceType.replace('_', ' ')}</span>
            </div>
            <p className="italic text-slate-700 dark:text-slate-300 font-medium">
              "{assertion.sourceSnippet}"
            </p>
            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-mono block mt-1">
              Ref: {assertion.sourceDetail} • {(assertion.confidence * 100).toFixed(0)}% Confidence
            </span>
          </div>

          {/* Verification Status Controls */}
          <div className="flex items-center justify-between pt-1">
            <Badge
              variant={
                assertion.verificationStatus === 'verified'
                  ? 'green'
                  : assertion.verificationStatus === 'rejected'
                  ? 'red'
                  : 'amber'
              }
            >
              {assertion.verificationStatus.toUpperCase()}
            </Badge>

            <div className="flex items-center gap-1.5">
              {isEditing ? (
                <button
                  onClick={() => {
                    updateProvenanceStatus(assertion.id, 'edited', editText);
                    setIsEditing(false);
                  }}
                  className="px-2 py-1 bg-teal-600 text-white rounded-lg text-[10px] font-bold"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 rounded-lg"
                  title="Edit Assertion"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => updateProvenanceStatus(assertion.id, 'verified')}
                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[10px] font-bold flex items-center gap-1 transition-colors"
                title="Verify Assertion"
              >
                <Check className="w-3 h-3" />
                <span>Verify</span>
              </button>

              <button
                onClick={() => updateProvenanceStatus(assertion.id, 'rejected')}
                className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-[10px] font-bold flex items-center gap-1 transition-colors"
                title="Reject Assertion"
              >
                <X className="w-3 h-3" />
                <span>Reject</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
