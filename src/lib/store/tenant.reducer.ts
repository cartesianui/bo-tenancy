import { ActionReducerMap } from '@ngrx/store';
import { TenantState } from './tenant.state';
import { reducer as listingReducer } from './reducers/tenant-listing.reducer';
import { reducer as detailReducer } from './reducers/tenant-detail.reducer';
import { reducer as domainListingReducer } from './reducers/domain-listing.reducer';
import { reducer as domainDetailReducer } from './reducers/domain-detail.reducer';

export const tenantFeatureKey = `tenant`;

export const tenantReducers: ActionReducerMap<TenantState> = {
  listing: listingReducer,
  detail: detailReducer,
  domainListing: domainListingReducer,
  domainDetail: domainDetailReducer
};
