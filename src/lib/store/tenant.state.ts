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

export interface TenantState {
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

export interface DomainState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  data: Domain | null;
}

export interface TenancyState {
  listing: TenantListingState;
  detail: TenantState;
  domainListing: DomainListingState;
  domainDetail: DomainState;
}
