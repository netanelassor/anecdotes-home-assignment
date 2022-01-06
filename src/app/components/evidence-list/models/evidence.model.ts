export interface EvidenceViewModel {
  id: number;
  fullName: string;
  email: string;
  updateAt: Date;
  mfaEnabled: boolean;
}


export interface EvidenceFileViewModel {
  name: string;
  lastModifiedDate: number;
  evidenceData: EvidenceViewModel[];
}
