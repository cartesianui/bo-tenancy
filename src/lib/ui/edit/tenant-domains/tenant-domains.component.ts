import { Injector, Component, ElementRef, ViewChild } from '@angular/core';
import { ListingControlsComponent } from '@cartesianui/common';
import { Domain, SearchDomainForm } from '../../../models';
import { TenancySandbox } from '../../../tenancy.sandbox';

@Component({
  selector: 'tenant-domains',
  templateUrl: './tenant-domains.component.html'
})
export class TenantDomainsComponent extends ListingControlsComponent<Domain, SearchDomainForm> {
  @ViewChild('dtContainer') dtContainer: ElementRef;

  constructor(injector: Injector, private _sandbox: TenancySandbox) {
    super(injector);
  }

  protected delete(): void {}

  protected list(): void {}

  protected registerEvents(): void {}
}
