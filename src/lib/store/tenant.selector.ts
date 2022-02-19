/* eslint-disable max-len */
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { TenantState } from './tenant.state';
import { tenantFeatureKey } from './tenant.reducer';

export const getTenantState = createFeatureSelector<TenantState>(tenantFeatureKey);

export const getTenantLoading: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.detail.loading);

export const getTenantLoaded: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.detail.loaded);

export const getTenantFailed: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.detail.failed);

export const getTenantDetail: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenantState) => state.detail.data);

export const getProfile: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenantState) => state.detail.data);

export const getTenantsLoading: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.listing.loading);

export const getTenantsLoaded: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.listing.loaded);

export const getTenantsFailed: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.listing.failed);

export const getTenantsList: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenantState) => state.listing.data.data);

export const getTenantsMeta: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenantState) => state.listing.data.meta);

//Domain Selector

export const getDomainsList: MemoizedSelector<object, object> = createSelector(getTenantState, (state: TenantState) => state.domainListing.data.data);

export const getDomainLoading: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.domainDetail.loading);

export const getDomainLoaded: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.domainDetail.loaded);

export const getDomainFailed: MemoizedSelector<object, boolean> = createSelector(getTenantState, (state: TenantState) => state.domainDetail.failed);
