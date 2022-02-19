import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService, POST, GET, Body, Criteria, DefaultHeaders, Adapter, RequestCriteria, Path, DELETE, PATCH } from '@cartesianui/ng-axis';
import { Tenant, Domain, SearchTenantForm } from '../models';

@Injectable()
@DefaultHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})
export class TenancyHttpService extends HttpService {
  /**
   * Fetch tenants list
   *
   * @param SearchForm form to filter api response
   */
  @GET('/tenants')
  public fetchTenants(@Criteria criteria: RequestCriteria<SearchTenantForm>): Observable<any> {
    return null;
  }

  /**
   * Fetch tenant
   *
   * @param id Id of tenant to fetch
   */
  @PATCH('/tenants/{id}')
  public fetchTenant(@Path('id') id: string): Observable<any> {
    return null;
  }

  /**
   * Create tenant
   *
   * @param form form containing data of tenant
   */
  @POST('/tenants')
  public createTenant(@Body form: Tenant): Observable<any> {
    return null;
  }

  /**
   * Update tenant
   *
   * @param form form containing data of tenant
   */
  @PATCH('/tenants/{id}')
  public updateTenant(@Path('id') id: string, @Body form: Tenant): Observable<any> {
    return null;
  }

  /**
   * Delete tenant
   *
   * @param id Id of tenant to delete
   */
  @DELETE('/tenants/{id}')
  public deleteTenant(@Path('id') id: string): Observable<any> {
    return null;
  }

  /**
   * Fetch domains list
   *
   * @param SearchForm form to filter api response
   */
  @GET('/tenant/{id}/domains')
  public fetchDomains(@Path('id') id: string): Observable<any> {
    return null;
  }

  /**
   * Fetch domain
   *
   * @param id Id of domain to fetch
   */
  @GET('/domain/{id}')
  public fetchDomain(@Path('id') id: string): Observable<any> {
    return null;
  }

  /**
   * Create domain
   *
   * @param form form containing data of domain
   */
  @POST('/domains')
  public createDomain(@Body form: Domain): Observable<any> {
    return null;
  }

  /**
   * Update domain
   *
   * @param form form containing data of domain
   */
  @PATCH('/domains/{id}')
  public updateDomain(@Path('id') id: string, @Body form: Domain): Observable<any> {
    return null;
  }

  /**
   * Active domain
   *
   * @param id id Use to active domain
   */
  @PATCH('/domains/{id}/activate')
  public activeDomain(@Path('id') id: any): Observable<any> {
    return null;
  }

  /**
   * Deactive domain
   *
   * @param id id Use to deactive domain
   */
  @PATCH('/domains/{id}/deactivate')
  public deactiveDomain(@Path('id') id: any): Observable<any> {
    return null;
  }

  /**
   * Verify domain
   *
   * @param id id Use to verify domain
   */
  @PATCH('/domains/{id}/verify')
  public verifyDomain(@Path('id') id: string): Observable<any> {
    return null;
  }

  /**
   * Delete domain
   *
   * @param id Id of domain to delete
   */
  @DELETE('/domains/{id}')
  public deleteDomain(@Path('id') id: string): Observable<any> {
    return null;
  }
}
