import { Action, createReducer, on } from '@ngrx/store';
import { DomainListingState } from '../tenant.state';
import * as actions from '../tenant.action';

const INITIAL_STATE: DomainListingState = {
  loading: false,
  loaded: false,
  failed: false,
  data: {
    data: [],
    meta: null
  }
};

const createDomainListingReducers = createReducer(
  INITIAL_STATE,
  on(actions.doFetchDomains, (state) => {
    return Object.assign({}, state, {
      loading: true,
      loaded: false,
      failed: false
    });
  }),
  on(actions.doFetchDomainsSuccess, (state, { domains }) => {
    return Object.assign({}, state, {
      loaded: true,
      loading: false,
      failed: false,
      data: domains
    });
  }),
  on(actions.doFetchDomainsFail, (state) => {
    return Object.assign({}, INITIAL_STATE, { failed: true });
  })
);

export function reducer(state: DomainListingState | undefined, action: Action) {
  return createDomainListingReducers(state, action);
}
