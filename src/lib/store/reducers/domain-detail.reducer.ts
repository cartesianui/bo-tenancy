import { Action, createReducer, on } from '@ngrx/store';
import { DomainDetailState } from '../tenant.state';
import * as tenantActions from '../tenant.action';

const INITIAL_STATE: DomainDetailState = {
  loading: false,
  loaded: false,
  failed: false,
  data: null
};

const createDomainDetailReducers = createReducer(
  INITIAL_STATE,
  on(tenantActions.doFetchDomain, tenantActions.doCreateDomain, tenantActions.doActiveDomain, tenantActions.doDeactiveDomain, tenantActions.doVerifyDomain, tenantActions.doDeleteDomain, (state) => {
    return Object.assign({}, state, {
      loading: true,
      loaded: false,
      failed: false
    });
  }),
  on(
    tenantActions.doFetchDomainSuccess,
    tenantActions.doCreateDomainSuccess,
    tenantActions.doActiveDomainSuccess,
    tenantActions.doDeactiveDomainSuccess,
    tenantActions.doVerifyDomainSuccess,
    tenantActions.doDeleteDomainSuccess,
    (state, { domain }) => {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        failed: false,
        data: domain
      });
    }
  ),
  on(
    tenantActions.doFetchDomainFail,
    tenantActions.doCreateDomainFail,
    tenantActions.doActiveDomainFail,
    tenantActions.doDeactiveDomainFail,
    tenantActions.doVerifyDomainFail,
    tenantActions.doDeleteDomainFail,
    (state) => {
      return Object.assign({}, INITIAL_STATE, { failed: true });
    }
  )
);

export function reducer(state: DomainDetailState | undefined, action: Action) {
  return createDomainDetailReducers(state, action);
}
