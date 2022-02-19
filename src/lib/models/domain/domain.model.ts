import { ParentModel } from '@cartesianui/common';

export interface IDomain {
  id?: string;
  name?: string;
  domain?: string;
  isActive?: string;
  dnsVerificationCode?: String;
  dnsVerificationHostname?: String;
  isVerified?: String;
  tenantId?: String;
}

export class Domain extends ParentModel implements IDomain {
  id: string;
  name: string;
  domain: string;
  isActive: string;
  dnsVerificationCode: string;
  dnsVerificationHostname: string;
  isVerified: string;
  tenantId: string;

  constructor(data: any) {
    super(data);
  }
}
