import { AbdmGatewayStatus } from '../types';

export class AbdmService {
  private static status: AbdmGatewayStatus = {
    milestone1: {
      name: 'M1: Patient Identity & ABHA',
      status: 'ACTIVE_DEMO',
      abhaCount: 412,
      scanShareCount: 389
    },
    milestone2: {
      name: 'M2: Health Information Provider (HIP)',
      status: 'ACTIVE_DEMO',
      careContextsLinked: 560,
      bundlesPublished: 512
    },
    milestone3: {
      name: 'M3: Health Information User (HIU)',
      status: 'ACTIVE_DEMO',
      consentsRequested: 245,
      longitudinalFetches: 218
    },
    milestone4: {
      name: 'M4: NHCX Claims Exchange',
      status: 'ARCHITECTURE_READY',
      claimsPreAuthCount: 42
    },
    dhisIncentives: {
      qualifyingMonthlyTransactions: 1072,
      baseThreshold: 100,
      opdConsultationEarnings: 560 * 5, // ₹2,800
      consentExchangeEarnings: 218 * 10, // ₹2,180
      totalIncentiveInr: (560 * 5) + (218 * 10) // ₹4,980
    },
    security: {
      cipherSuite: 'ECDH-Curve25519-AES-256-GCM',
      keyDerivation: 'HKDF-SHA256',
      checksumAlgorithm: 'SHA-256',
      hsmVaultStatus: 'OPERATIONAL_DEMO'
    }
  };

  /**
   * Returns current ABDM Gateway status
   */
  static getGatewayStatus(): AbdmGatewayStatus {
    return { ...this.status };
  }

  /**
   * Simulates V3 Scan & Share payload ingestion
   */
  static simulateScanAndShare(abhaHandle: string = 'rohan.kulkarni@abdm') {
    this.status.milestone1.scanShareCount++;
    return {
      success: true,
      token: `SHARE-TK-${Date.now().toString().slice(-4)}`,
      abhaAddress: abhaHandle,
      verifiedName: 'Rohan Kulkarni',
      verifiedDob: '1983-05-14',
      verifiedGender: 'M',
      syncTime: new Date().toISOString()
    };
  }

  /**
   * Simulates Care Context registration under Milestone 2
   */
  static linkCareContext(patientId: string, encounterId: string, display: string) {
    this.status.milestone2.careContextsLinked++;
    this.status.milestone2.bundlesPublished++;
    this.status.dhisIncentives.qualifyingMonthlyTransactions++;
    this.status.dhisIncentives.opdConsultationEarnings += 5;
    this.status.dhisIncentives.totalIncentiveInr += 5;

    return {
      careContextReference: `CC-${patientId}-${encounterId}`,
      display,
      linkStatus: 'CONFIRMED_LINKED',
      fideliusDigest: '3f5a89b...e41d8',
      dhisCreditedInr: 5
    };
  }

  /**
   * Simulates Consent Request & fetch under Milestone 3
   */
  static requestConsentFetch(abhaAddress: string) {
    this.status.milestone3.consentsRequested++;
    this.status.milestone3.longitudinalFetches++;
    this.status.dhisIncentives.consentExchangeEarnings += 10;
    this.status.dhisIncentives.totalIncentiveInr += 10;

    return {
      consentArtifactId: `ARTEFACT-${Date.now().toString().slice(-6)}`,
      abhaAddress,
      status: 'GRANTED_AND_DECRYPTED',
      recordsRetrieved: 3,
      dhisCreditedInr: 10
    };
  }
}
