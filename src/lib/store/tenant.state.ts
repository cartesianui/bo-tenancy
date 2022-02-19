import { Tenant, Domain } from '../models';

export interface TenantListingState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  data: {
    data: Array<Tenant>;
    meta: object;
  };
}

export interface TenantDetailState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  data: Tenant | null;
}

export interface DomainListingState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  data: {
    data: Array<Domain>;
    meta: object;
  };
}

export interface DomainDetailState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  data: Domain | null;
}

export interface TenantState {
  listing: TenantListingState;
  detail: TenantDetailState;
  domainListing: DomainListingState;
  domainDetail: DomainDetailState;
}
