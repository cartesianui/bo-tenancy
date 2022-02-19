import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Injector, Input } from '@angular/core';
import { ListingControlsComponent } from '@cartesianui/common';
import { Domain, SearchDomainForm } from '../../../models';
import { EditTenantComponent } from '../edit-tenant.component';

@Component({
  selector: 'tenant-domains',
  templateUrl: './tenant-domains.component.html'
})
export class TenantDomainsComponent extends ListingControlsComponent<Domain, SearchDomainForm> implements OnInit {
  @ViewChild('dtContainer') dtContainer: ElementRef;
  // @Input() parent: EditTenantComponent;

  @Input() set domains(domain: Domain[]) {
    this.data = domain;
  }

  selectedDomains: Domain[] = [];
  id;
  status;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('Initiated');
  }

  protected delete(): void {}

  protected list(): void {}

  protected registerEvents(): void {}

  onSelect({ selected }) {
    if (selected.length) {
      this.selectedDomains.splice(0, this.selectedDomains.length);
      this.selectedDomains.push(...selected);
      this.id = this.selectedDomains[0]['id'];
      this.status = this.selectedDomains[0]['isActive'];
    }
  }

  activeDomain() {
    const domainIds = this.selectedDomains.map((domain) => domain.id);
    // this.parent.activeDomain(domainIds);
    this.selectedDomains = [];
  }

  deactiveDomain() {
    const domainIds = this.selectedDomains.map((domain) => domain.id);
    //this.parent.deactiveDomain(domainIds);
    this.selectedDomains = [];
  }

  verifyDomain() {
    this.message.confirm(`Are you sure you want to Verify the Domain with id ${this.id} & DNS hosting= & DNS Code=`, 'Domain Verification', (res) => {
      if (res) {
        //this.parent.verifyDomain(this.id);
      }
    });
    this.selectedDomains = [];
  }

  deleteDomain() {
    this.message.confirm(`Are you sure you want to delete the domain with id ${this.id} `, 'Delete Domain', (res) => {
      if (res) {
        //this.parent.deletedomain(this.id);
      }
    });
    this.selectedDomains = [];
  }

  onActivate(event) {}
}
