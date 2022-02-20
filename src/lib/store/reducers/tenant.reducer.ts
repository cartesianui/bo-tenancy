import { Action, createReducer, on } from '@ngrx/store';
import { TenantState } from '../tenant.state';
import * as tenantActions from '../tenant.action';

const INITIAL_STATE: TenantState = {
  loading: false,
  loaded: false,
  failed: false,
  data: null
};

const createTenantReducers = createReducer(
  INITIAL_STATE,
  on(tenantActions.doFetchTenant, tenantActions.doRegisterTenant, tenantActions.doUpdateTenant, tenantActions.doDeleteTenant, (state) => {
    return Object.assign({}, state, {
      loading: true,
      loaded: false,
      failed: false
    });
  }),
  on(tenantActions.doFetchTenantSuccess, tenantActions.doRegisterTenantSuccess, tenantActions.doUpdateTenantSuccess, tenantActions.doDeleteTenantSuccess, (state, { tenant }) => {
    return Object.assign({}, state, {
      loaded: true,
      loading: false,
      failed: false,
      data: tenant
    });
  }),
  on(tenantActions.doFetchTenantFail, tenantActions.doRegisterTenantFail, tenantActions.doUpdateTenantFail, tenantActions.doDeleteTenantFail, (state) => {
    return Object.assign({}, INITIAL_STATE, { failed: true });
  })
);

export function reducer(state: TenantState | undefined, action: Action) {
  return createTenantReducers(state, action);
}
