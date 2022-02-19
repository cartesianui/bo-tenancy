import { Injectable } from '@angular/core';
import { convertObjectKeysToCamel } from '@cartesianui/ng-axis';

@Injectable()
export class TenancyAdapter {
  constructor() {}

  /**
   * Camelize response keys
   *
   * @param tenant Object to camelize keys of
   */
  static tenantAdapter(tenant: any): any {
    return Object.assign({}, tenant, convertObjectKeysToCamel(tenant));
  }
}
