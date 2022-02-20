/* eslint-disable max-len */
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { TenancyState } from './tenant.state';
import { tenantFeatureKey } from './tenant.reducer';

export const getTenantState = createFeatureSelector<TenancyState>(tenantFeatureKey);

export const getTenantLoading: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.detail.loading);

export const getTenantLoaded: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.detail.loaded);

export const getTenantFailed: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.detail.failed);

export const getTenantDetail: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenancyState) => state.detail.data);

export const getProfile: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenancyState) => state.detail.data);

export const getTenantsLoading: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.listing.loading);

export const getTenantsLoaded: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.listing.loaded);

export const getTenantsFailed: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.listing.failed);

export const getTenantsList: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenancyState) => state.listing.data.data);

export const getTenantsMeta: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenancyState) => state.listing.data.meta);

//Domain Selector

export const getDomainsList: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenancyState) => state.domainListing.data.data);

export const getDomainLoading: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.domainDetail.loading);

export const getDomainLoaded: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.domainDetail.loaded);

export const getDomainFailed: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenancyState) => state.domainDetail.failed);
