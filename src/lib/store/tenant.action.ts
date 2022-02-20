import { createAction, props } from '@ngrx/store';
import { type, RequestCriteria } from '@cartesianui/ng-axis';
import { Tenant, Domain, TenantRegistrationForm } from '../models';

/**
 * Register Tenant  Actions
 */
export const doRegisterTenant = createAction(type('[Tenancy] Do Register Tenant'), props<{ registerForm: TenantRegistrationForm }>());
export const doRegisterTenantSuccess = createAction(type('[Tenancy] Do Register Tenant Success'), props<{ tenant: Tenant }>());
export const doRegisterTenantFail = createAction(type('[Tenancy] Do Register Tenant Fail'));

/**
 * Fetch Tenants Actions
 */
export const doFetchTenants = createAction(type('[Tenancy] Do Fetch Tenants'), props<{ requestCriteria: RequestCriteria<any> }>());
export const doFetchTenantsSuccess = createAction(type('[Tenancy] Do Fetch Tenants Success'), props<{ tenants: Tenant[] }>());
export const doFetchTenantsFail = createAction(type('[Tenancy] Do Fetch Tenants Fail'));

/**
 * Fetch Tenant Actions
 */
export const doFetchTenant = createAction(type('[Tenancy] Do Fetch Tenant'), props<{ id: string }>());
export const doFetchTenantSuccess = createAction(type('[Tenancy] Do Fetch Tenant Success'), props<{ tenant: Tenant }>());
export const doFetchTenantFail = createAction(type('[Tenancy] Do Fetch Tenant Fail'));

/**
 * Create Tenant Actions
 */
export const doCreateTenant = createAction(type('[Tenancy] Do Create Tenant'), props<{ form: Tenant }>());
export const doCreateTenantSuccess = createAction(type('[Tenancy] Do Create Tenant Success'), props<{ tenant: Tenant }>());
export const doCreateTenantFail = createAction(type('[Tenancy] Do Create Tenant Fail'));

/**
 * Update Tenant Actions
 */
export const doUpdateTenant = createAction(type('[Tenancy] Do Update Tenant'), props<{ id: string; form: Tenant }>());
export const doUpdateTenantSuccess = createAction(type('[Tenancy] Do Update Tenant Success'), props<{ tenant: Tenant }>());
export const doUpdateTenantFail = createAction(type('[Tenancy] Do Update Tenant Fail'));

/**
 * Delete Tenant Actions
 */
export const doDeleteTenant = createAction(type('[Tenancy] Do Delete Tenant'), props<{ id: string }>());
export const doDeleteTenantSuccess = createAction(type('[Tenancy] Do Delete Tenant Success'), props<{ tenant: Tenant }>());
export const doDeleteTenantFail = createAction(type('[Tenancy] Do Delete Tenant Fail'));

/**
 * Fetch Domains Actions
 */
export const doFetchDomains = createAction(type('[Tenancy] Do Fetch Domains'), props<{ id: string }>());
export const doFetchDomainsSuccess = createAction(type('[Tenancy] Do Fetch Domains Success'), props<{ domains: Domain[] }>());
export const doFetchDomainsFail = createAction(type('[Tenancy] Do Fetch Domains Fail'));

/**
 * Fetch Domain Actions
 */
export const doFetchDomain = createAction(type('[Tenancy] Do Fetch Domain'), props<{ id: string }>());
export const doFetchDomainSuccess = createAction(type('[Tenancy] Do Fetch Domain Success'), props<{ domain: Domain }>());
export const doFetchDomainFail = createAction(type('[Tenancy] Do Fetch Domain Fail'));

/**
 * Create Domain Actions
 */
export const doCreateDomain = createAction(type('[Tenancy] Do Create Domain'), props<{ form: Domain }>());
export const doCreateDomainSuccess = createAction(type('[Tenancy] Do Create Domain Success'), props<{ domain: Domain }>());
export const doCreateDomainFail = createAction(type('[Tenancy] Do Create Domain Fail'));

/**
 * Update Domain Actions
 */
export const doUpdateDomain = createAction(type('[Tenancy] Do Update Domain'), props<{ id: string; form: Domain }>());
export const doUpdateDomainSuccess = createAction(type('[Tenancy] Do Update Domain Success'), props<{ domain: Domain }>());
export const doUpdateDomainFail = createAction(type('[Tenancy] Do Update Domain Fail'));

/**
 * Active Domain Actions
 */
export const doActiveDomain = createAction(type('[Tenancy] Do Active Domain'), props<{ ids: any }>());
export const doActiveDomainSuccess = createAction(type('[Tenancy] Do Active Domain Success'), props<{ domain: Domain }>());
export const doActiveDomainFail = createAction(type('[Tenancy] Do Active Domain Fail'));

/**
 * deactive Domain Actions
 */
export const doDeactiveDomain = createAction(type('[Tenancy] Do Deactive Domain'), props<{ ids: any }>());
export const doDeactiveDomainSuccess = createAction(type('[Tenancy] Do Deactive Domain Success'), props<{ domain: Domain }>());
export const doDeactiveDomainFail = createAction(type('[Tenancy] Do Deactive Domain Fail'));

/**
 * verify Domain Actions
 */
export const doVerifyDomain = createAction(type('[Tenancy] Do Verify Domain'), props<{ id: string }>());
export const doVerifyDomainSuccess = createAction(type('[Tenancy] Do Verify Domain Success'), props<{ domain: Domain }>());
export const doVerifyDomainFail = createAction(type('[Tenancy] Do Verify Domain Fail'));

/**
 * Delete Domain Actions
 */
export const doDeleteDomain = createAction(type('[Tenancy] Do Delete Domain'), props<{ id: string }>());
export const doDeleteDomainSuccess = createAction(type('[Tenancy] Do Delete Domain Success'), props<{ domain: Domain }>());
export const doDeleteDomainFail = createAction(type('[Tenancy] Do Delete Domain Fail'));
