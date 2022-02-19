import { ParentModel } from '@cartesianui/common';

export interface ITenant {
  id?: string;
  name?: string;
  slug?: string;
  domain?: string;
  mode?: string;
  status?: string;
  isActive?: string;

  dnsVerificationCode?: String;
  dnsVerificationHostname?: String;
  isVerified?: String;
  tenantId?: String;
}

export class Tenant extends ParentModel implements ITenant {
  id: string;
  name: string;
  slug: string;
  domain: string;
  mode: string;
  status: string;
  isActive: string;

  dnsVerificationCode: string;
  dnsVerificationHostname: string;
  isVerified: string;
  tenantId: string;

  constructor(data: any) {
    super(data);
  }
}
