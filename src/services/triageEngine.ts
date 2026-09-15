import { EMERGENCY_RED_FLAG_RULES } from '../data/emergencyRules';
import { EmergencyAlert, IndianLanguage } from '../types';

export class TriageEngine {
  /**
   * Deterministic evaluation of text inputs, transcribed speech, or selected options.
   * Does NOT rely on probabilistic LLM logic.
   */
  static evaluateInput(
    text: string, 
    patientId: string, 
    patientName: string, 
    tokenNumber: string = 'T-PENDING'
  ): EmergencyAlert | null {
    if (!text || text.trim().length === 0) return null;
    const lowerText = text.toLowerCase();

    for (const rule of EMERGENCY_RED_FLAG_RULES) {
      // 1. Check exact phrase match
      const matchedPhrase = rule.triggerPhrases.some(phrase => lowerText.includes(phrase.toLowerCase()));
      
      // 2. Check multi-keyword confluence
      let keywordHits = 0;
      for (const kw of rule.triggerKeywords) {
        if (lowerText.includes(kw.toLowerCase())) {
          keywordHits++;
        }
      }

      // If exact phrase matches OR at least 2 distinct red-flag keywords appear together
      if (matchedPhrase || keywordHits >= 2) {
        return {
          id: `EMERG-${Date.now()}`,
          patientId,
          patientName,
          tokenNumber: tokenNumber.startsWith('EMERG') ? tokenNumber : `EMERG-${Math.floor(100 + Math.random() * 900)}`,
          detectedAt: new Date().toISOString(),
          category: rule.category,
          matchedRule: rule.id,
          rawSymptom: text,
          triagePriority: 'CRITICAL_RED',
          status: 'escalated',
          destinationDepartment: 'Hospital Casualty / Emergency Resuscitation Unit (Red Zone)'
        };
      }
    }

    return null;
  }

  /**
   * Spoken audio guidance using Web Speech API synthesis
   */
  static playSpokenGuidance(language: IndianLanguage = 'en') {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    
    // Find matching prompt
    const rule = EMERGENCY_RED_FLAG_RULES[0]; // Primary cardio/emergency prompt
    const message = rule.spokenGuidance[language] || rule.spokenGuidance.en;

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.lang = language === 'hi' ? 'hi-IN' : language === 'mr' ? 'mr-IN' : 'en-IN';
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis unavailable or blocked:', e);
    }
  }
}
