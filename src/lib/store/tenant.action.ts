import { createAction, props } from '@ngrx/store';
import { type, RequestCriteria } from '@cartesianui/ng-axis';
import { Tenant, Domain } from '../models';

/**
 * Fetch Tenants Actions
 */
export const doFetchTenants = createAction(type('[Tenant] Do Fetch Tenants'), props<{ requestCriteria: RequestCriteria<any> }>());
export const doFetchTenantsSuccess = createAction(type('[Tenant] Do Fetch Tenants Success'), props<{ tenants: Tenant[] }>());
export const doFetchTenantsFail = createAction(type('[Tenant] Do Fetch Tenants Fail'));

/**
 * Fetch Tenant Actions
 */
export const doFetchTenant = createAction(type('[Tenant] Do Fetch Tenant'), props<{ id: string }>());
export const doFetchTenantSuccess = createAction(type('[Tenant] Do Fetch Tenant Success'), props<{ tenant: Tenant }>());
export const doFetchTenantFail = createAction(type('[Tenant] Do Fetch Tenant Fail'));

/**
 * Create Tenant Actions
 */
export const doCreateTenant = createAction(type('[Tenant] Do Create Tenant'), props<{ form: Tenant }>());
export const doCreateTenantSuccess = createAction(type('[Tenant] Do Create Tenant Success'), props<{ tenant: Tenant }>());
export const doCreateTenantFail = createAction(type('[Tenant] Do Create Tenant Fail'));

/**
 * Update Tenant Actions
 */
export const doUpdateTenant = createAction(type('[Tenant] Do Update Tenant'), props<{ id: string; form: Tenant }>());
export const doUpdateTenantSuccess = createAction(type('[Tenant] Do Update Tenant Success'), props<{ tenant: Tenant }>());
export const doUpdateTenantFail = createAction(type('[Tenant] Do Update Tenant Fail'));

/**
 * Delete Tenant Actions
 */
export const doDeleteTenant = createAction(type('[Tenant] Do Delete Tenant'), props<{ id: string }>());
export const doDeleteTenantSuccess = createAction(type('[Tenant] Do Delete Tenant Success'), props<{ tenant: Tenant }>());
export const doDeleteTenantFail = createAction(type('[Tenant] Do Delete Tenant Fail'));

/**
 * Fetch Domains Actions
 */
export const doFetchDomains = createAction(type('[Tenant] Do Fetch Domains'), props<{ id: string }>());
export const doFetchDomainsSuccess = createAction(type('[Tenant] Do Fetch Domains Success'), props<{ domains: Domain[] }>());
export const doFetchDomainsFail = createAction(type('[Tenant] Do Fetch Domains Fail'));

/**
 * Fetch Domain Actions
 */
export const doFetchDomain = createAction(type('[Tenant] Do Fetch Domain'), props<{ id: string }>());
export const doFetchDomainSuccess = createAction(type('[Tenant] Do Fetch Domain Success'), props<{ domain: Domain }>());
export const doFetchDomainFail = createAction(type('[Tenant] Do Fetch Domain Fail'));

/**
 * Create Domain Actions
 */
export const doCreateDomain = createAction(type('[Tenant] Do Create Domain'), props<{ form: Domain }>());
export const doCreateDomainSuccess = createAction(type('[Tenant] Do Create Domain Success'), props<{ domain: Domain }>());
export const doCreateDomainFail = createAction(type('[Tenant] Do Create Domain Fail'));

/**
 * Update Domain Actions
 */
export const doUpdateDomain = createAction(type('[Tenant] Do Update Domain'), props<{ id: string; form: Domain }>());
export const doUpdateDomainSuccess = createAction(type('[Tenant] Do Update Domain Success'), props<{ domain: Domain }>());
export const doUpdateDomainFail = createAction(type('[Tenant] Do Update Domain Fail'));

/**
 * Active Domain Actions
 */
export const doActiveDomain = createAction(type('[Tenant] Do Active Domain'), props<{ ids: any }>());
export const doActiveDomainSuccess = createAction(type('[Tenant] Do Active Domain Success'), props<{ domain: Domain }>());
export const doActiveDomainFail = createAction(type('[Tenant] Do Active Domain Fail'));

/**
 * deactive Domain Actions
 */
export const doDeactiveDomain = createAction(type('[Tenant] Do Deactive Domain'), props<{ ids: any }>());
export const doDeactiveDomainSuccess = createAction(type('[Tenant] Do Deactive Domain Success'), props<{ domain: Domain }>());
export const doDeactiveDomainFail = createAction(type('[Tenant] Do Deactive Domain Fail'));

/**
 * verify Domain Actions
 */
export const doVerifyDomain = createAction(type('[Tenant] Do Verify Domain'), props<{ id: string }>());
export const doVerifyDomainSuccess = createAction(type('[Tenant] Do Verify Domain Success'), props<{ domain: Domain }>());
export const doVerifyDomainFail = createAction(type('[Tenant] Do Verify Domain Fail'));

/**
 * Delete Domain Actions
 */
export const doDeleteDomain = createAction(type('[Tenant] Do Delete Domain'), props<{ id: string }>());
export const doDeleteDomainSuccess = createAction(type('[Tenant] Do Delete Domain Success'), props<{ domain: Domain }>());
export const doDeleteDomainFail = createAction(type('[Tenant] Do Delete Domain Fail'));
