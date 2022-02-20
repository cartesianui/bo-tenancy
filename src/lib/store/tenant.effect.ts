import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TenancyHttpService } from '../shared';
import { Tenant } from '../models';
import * as tenantActions from './tenant.action';

@Injectable()
export class TenantEffects {
  constructor(private actions$: Actions, private tenantHttpService: TenancyHttpService) {}

  /**
   * Registers Tenant effect
   */
  doRegisterTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doRegisterTenant),
      map((action) => action.registerForm),
      switchMap((registerForm) => {
        return this.tenantHttpService.register(registerForm).pipe(
          map((user) =>
            tenantActions.doRegisterTenantSuccess({
              tenant: new Tenant(user)
            })
          ),
          catchError((error) => of(tenantActions.doRegisterTenantFail()))
        );
      })
    )
  );

  /**
   * Fetch Tenants effect
   */
  fetchTenants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doFetchTenants),
      map((action) => action.requestCriteria),
      switchMap((criteria) => {
        return this.tenantHttpService.fetchTenants(criteria).pipe(
          map((tenants) =>
            tenantActions.doFetchTenantsSuccess({
              tenants
            })
          ),
          catchError((error) => of(tenantActions.doFetchTenantsFail()))
        );
      })
    )
  );

  /**
   * Fetch Tenant effect
   */
  fetchTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doFetchTenant),
      map((action) => action.id),
      switchMap((id) => {
        return this.tenantHttpService.fetchTenant(id).pipe(
          map((tenant) =>
            tenantActions.doFetchTenantSuccess({
              tenant: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doFetchTenantFail()))
        );
      })
    )
  );

  /**
   * Create Tenant effect
   */
  createTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doCreateTenant),
      map((action) => action.form),
      switchMap((form) => {
        return this.tenantHttpService.createTenant(form).pipe(
          map((tenant) =>
            tenantActions.doCreateTenantSuccess({
              tenant: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doCreateTenantFail()))
        );
      })
    )
  );

  /**
   * Update Tenant effect
   */
  updateTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doUpdateTenant),
      map((action) => Object.assign({}, { id: action.id, form: action.form })),
      switchMap((data) => {
        return this.tenantHttpService.updateTenant(data.id, data.form).pipe(
          map((tenant) =>
            tenantActions.doUpdateTenantSuccess({
              tenant: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doUpdateTenantFail()))
        );
      })
    )
  );

  /**
   * Delete Tenant effect
   */
  deleteTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doDeleteTenant),
      map((action) => action.id),
      switchMap((id) => {
        return this.tenantHttpService.deleteTenant(id).pipe(
          map((tenant) =>
            tenantActions.doDeleteTenantSuccess({
              tenant: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doDeleteTenantFail()))
        );
      })
    )
  );

  /**
   * Fetch Domains effect
   */
  fetchDomains$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doFetchDomains),
      map((action) => action.id),
      switchMap((id) => {
        return this.tenantHttpService.fetchDomains(id).pipe(
          map((domains) =>
            tenantActions.doFetchDomainsSuccess({
              domains
            })
          ),
          catchError((error) => of(tenantActions.doFetchDomainsFail()))
        );
      })
    )
  );

  /**
   * Fetch Domain effect
   */
  fetchDomain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doFetchDomain),
      map((action) => action.id),
      switchMap((id) => {
        return this.tenantHttpService.fetchDomain(id).pipe(
          map((tenant) =>
            tenantActions.doFetchDomainSuccess({
              domain: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doFetchDomainFail()))
        );
      })
    )
  );

  /**
   * Create Domain effect
   */
  createDomain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doCreateDomain),
      map((action) => action.form),
      switchMap((form) => {
        return this.tenantHttpService.createDomain(form).pipe(
          map((tenant) =>
            tenantActions.doCreateDomainSuccess({
              domain: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doCreateDomainFail()))
        );
      })
    )
  );

  /**
   * Update Domain effect
   */
  updateDomain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doUpdateDomain),
      map((action) => Object.assign({}, { id: action.id, form: action.form })),
      switchMap((data) => {
        return this.tenantHttpService.updateDomain(data.id, data.form).pipe(
          map((tenant) =>
            tenantActions.doUpdateDomainSuccess({
              domain: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doUpdateDomainFail()))
        );
      })
    )
  );

  /**
   * Active Domain effect
   */
  activeDomain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doActiveDomain),
      map((action) => action.ids),
      switchMap((id) => {
        return this.tenantHttpService.activeDomain(id).pipe(
          map((tenant) =>
            tenantActions.doActiveDomainSuccess({
              domain: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doActiveDomainFail()))
        );
      })
    )
  );

  /**
   * Deactive Domain effect
   */
  deactiveDomain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doDeactiveDomain),
      map((action) => action.ids),
      switchMap((id) => {
        return this.tenantHttpService.deactiveDomain(id).pipe(
          map((tenant) =>
            tenantActions.doDeactiveDomainSuccess({
              domain: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doDeactiveDomainFail()))
        );
      })
    )
  );

  /**
   * Verify Domain effect
   */
  verifyDomain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doVerifyDomain),
      map((action) => action.id),
      switchMap((id) => {
        return this.tenantHttpService.verifyDomain(id).pipe(
          map((domain) =>
            tenantActions.doVerifyDomainSuccess({
              domain: domain.data
            })
          ),
          catchError((error) => of(tenantActions.doVerifyDomainFail()))
        );
      })
    )
  );

  /**
   * Delete Domain effect
   */
  deleteDomain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tenantActions.doDeleteDomain),
      map((action) => action.id),
      switchMap((id) => {
        return this.tenantHttpService.deleteDomain(id).pipe(
          map((tenant) =>
            tenantActions.doDeleteDomainSuccess({
              domain: tenant.data
            })
          ),
          catchError((error) => of(tenantActions.doDeleteDomainFail()))
        );
      })
    )
  );
}
