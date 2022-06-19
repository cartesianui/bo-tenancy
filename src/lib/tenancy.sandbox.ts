import { Injectable, Injector } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RequestCriteria } from '@cartesianui/core';
import { Sandbox } from '@cartesianui/common';
import { Tenant, Domain, SearchTenantForm, TenantRegistrationForm } from './models';
import { TenantState, tenantActions, tenantSelectors } from './store';

@Injectable()
export class TenancySandbox extends Sandbox {
  tenantLoading$ = this.store.pipe(select(tenantSelectors.getTenantLoading));
  tenantLoaded$ = this.store.pipe(select(tenantSelectors.getTenantLoaded));
  tenantFailed$ = this.store.pipe(select(tenantSelectors.getTenantFailed));
  tenant$ = this.store.pipe(select(tenantSelectors.getTenantDetail));

  tenantsLoading$ = this.store.pipe(select(tenantSelectors.getTenantsLoading));
  tenantsLoaded$ = this.store.pipe(select(tenantSelectors.getTenantsLoaded));
  tenantsFailed$ = this.store.pipe(select(tenantSelectors.getTenantsFailed));
  tenants$ = this.store.pipe(select(tenantSelectors.getTenantsList));
  tenantsMeta$ = this.store.pipe(select(tenantSelectors.getTenantsMeta));

  //Domain Observable
  domains$ = this.store.pipe(select(tenantSelectors.getDomainsList));
  domainLoading$ = this.store.pipe(select(tenantSelectors.getDomainLoading));
  domainLoaded$ = this.store.pipe(select(tenantSelectors.getDomainLoaded));
  domainFailed$ = this.store.pipe(select(tenantSelectors.getDomainFailed));

  constructor(protected store: Store<TenantState>, protected injector: Injector) {
    super(injector);
  }

  /**
   * Dispatches register tenant action
   *
   * @param  RegisterTenantForm form AuthUser registration form
   */
  public register(form: TenantRegistrationForm): void {
    this.store.dispatch(tenantActions.doRegisterTenant({ registerForm: form }));
  }

  /**
   * Dispatches fetch tenants action
   * @param criteria Request Criteria for tenants
   */
  fetchTenants(criteria: RequestCriteria<SearchTenantForm>): void {
    this.store.dispatch(tenantActions.doFetchTenants({ requestCriteria: criteria }));
  }

  /**
   * Dispatches fetch tenant action
   * @param id ID of the tenant to fetch
   */
  fetchTenant(id: string): void {
    this.store.dispatch(tenantActions.doFetchTenant({ id }));
  }

  /**
   * Dispatches create tenant action
   * @param form Form containing data of tenant to create
   */
  createTenant(form: Tenant): void {
    this.store.dispatch(tenantActions.doCreateTenant({ form }));
  }

  /**
   * Dispatches update tenant action
   * @param form Form containing data of tenant to update
   */
  updateTenant(id: string, form: Tenant): void {
    this.store.dispatch(tenantActions.doUpdateTenant({ id, form }));
  }

  /**
   * Dispatches delete tenant action
   * @param id ID of the tenant to delete
   */
  deleteTenant(id: string): void {
    this.store.dispatch(tenantActions.doDeleteTenant({ id }));
  }

  /**
   * Dispatches fetch domains action
   * @param criteria Request Criteria for domains
   */
  fetchDomains(id: string): void {
    this.store.dispatch(tenantActions.doFetchDomains({ id }));
  }

  /**
   * Dispatches fetch domain action
   * @param id ID of the domain to fetch
   */
  fetchDomain(id: string): void {
    this.store.dispatch(tenantActions.doFetchDomain({ id }));
  }

  /**
   * Dispatches create domain action
   * @param form Form containing data of domain to create
   */
  createDomain(form: Domain): void {
    this.store.dispatch(tenantActions.doCreateDomain({ form }));
  }

  /**
   * Dispatches update domain action
   * @param form Form containing data of domain to update
   */
  updateDomain(id: string, form: Tenant): void {
    this.store.dispatch(tenantActions.doUpdateDomain({ id, form }));
  }

  /**
   * Dispatches update domain action
   * @param form Form containing data of domain to active
   */
  activeDomain(ids: any): void {
    this.store.dispatch(tenantActions.doActiveDomain({ ids }));
  }

  /**
   * Dispatches update domain action
   * @param form Form containing data of domain to deactive
   */
  deactiveDomain(ids: any): void {
    this.store.dispatch(tenantActions.doDeactiveDomain({ ids }));
  }

  /**
   * Dispatches verify domain action
   * @param form Form containing data of domain to deactive
   */
  verifyDomain(id: string): void {
    this.store.dispatch(tenantActions.doVerifyDomain({ id }));
  }

  /**
   * Dispatches delete domain action
   * @param id ID of the domain to delete
   */
  deleteDomain(id: string): void {
    this.store.dispatch(tenantActions.doDeleteDomain({ id }));
  }
}
