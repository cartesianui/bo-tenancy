import { Injectable } from '@angular/core';
import { WhereItem } from '@cartesianui/ng-axis';

@Injectable()
export class SearchTenantForm {
  name: WhereItem = { column: 'name', operator: '=', value: null };
  email: WhereItem = { column: 'email', operator: '=', value: null };
}

@Injectable()
export class SearchDomainForm {
  id: WhereItem = { column: 'id', operator: '=', value: null };
  name: WhereItem = { column: 'name', operator: '=', value: null };
}
