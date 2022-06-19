import { Injectable } from '@angular/core';
import { convertObjectKeysToCamel } from '@cartesianui/core';

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
