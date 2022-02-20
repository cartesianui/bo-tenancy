import { ActionReducerMap } from '@ngrx/store';
import { TenancyState } from './tenant.state';
import { reducer as listingReducer } from './reducers/tenant-listing.reducer';
import { reducer as detailReducer } from './reducers/tenant.reducer';
import { reducer as domainListingReducer } from './reducers/domain-listing.reducer';
import { reducer as domainDetailReducer } from './reducers/domain.reducer';

export const tenantFeatureKey = `tenant`;

export const tenantReducers: ActionReducerMap<TenancyState> = {
  listing: listingReducer,
  detail: detailReducer,
  domainListing: domainListingReducer,
  domainDetail: domainDetailReducer
};
