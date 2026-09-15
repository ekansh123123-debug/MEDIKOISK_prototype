import { QueueToken } from '../types';
import { DEMO_TOKENS } from '../data/demoPatients';

export class QueueService {
  private static tokens: QueueToken[] = [...DEMO_TOKENS];

  static getTokens(): QueueToken[] {
    return [...this.tokens];
  }

  static issueToken(
    patientId: string, 
    patientName: string, 
    age: number, 
    gender: string, 
    chiefComplaint: string,
    isEmergency: boolean = false
  ): QueueToken {
    let tokenNumber: string;
    let priority: QueueToken['priority'];
    let positionAhead: number;
    let estimatedWaitMinutes: number;

    if (isEmergency) {
      tokenNumber = `EMERG-${Math.floor(100 + Math.random() * 900)}`;
      priority = 'EMERGENCY';
      positionAhead = 0;
      estimatedWaitMinutes = 0;
    } else {
      const nextNum = 28 + this.tokens.length;
      tokenNumber = `A-0${nextNum}`;
      priority = 'STANDARD';
      positionAhead = this.tokens.filter(t => t.status === 'WAITING' || t.status === 'CALLING').length;
      estimatedWaitMinutes = positionAhead * 4 + 3;
    }

    const newToken: QueueToken = {
      tokenNumber,
      patientId,
      patientName,
      age,
      gender,
      chiefComplaint,
      priority,
      counterRoom: 'OPD Room 4 (Dr. A. K. Shukla)',
      status: isEmergency ? 'CALLING' : 'WAITING',
      positionAhead,
      estimatedWaitMinutes,
      issuedAt: new Date().toISOString()
    };

    if (isEmergency) {
      // Put immediately at the top of the queue
      this.tokens.unshift(newToken);
    } else {
      this.tokens.push(newToken);
    }

    return newToken;
  }

  static callNextToken(): QueueToken | null {
    const nextWaiting = this.tokens.find(t => t.status === 'WAITING');
    if (nextWaiting) {
      nextWaiting.status = 'CALLING';
      nextWaiting.calledAt = new Date().toISOString();
      return nextWaiting;
    }
    return null;
  }

  static completeToken(tokenNumber: string) {
    const token = this.tokens.find(t => t.tokenNumber === tokenNumber);
    if (token) {
      token.status = 'COMPLETED';
    }
  }
}
