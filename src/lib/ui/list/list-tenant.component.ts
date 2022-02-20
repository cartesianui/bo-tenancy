import { Component, Injector, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ListingControlsComponent } from '@cartesianui/common';
import { Tenant, SearchTenantForm } from '../../models';
import { TenancySandbox } from '../../tenancy.sandbox';

@Component({
  templateUrl: 'list-tenant.component.html'
})
export class ListTenantComponent extends ListingControlsComponent<Tenant, SearchTenantForm> implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('dtContainer') dtContainer: ElementRef;

  searchText = '';

  constructor(injector: Injector, public _sandbox: TenancySandbox, protected router: Router) {
    super(injector);
  }

  ngOnInit(): void {
    this.initRequestCriteria(SearchTenantForm);
    this.registerEvents();
  }

  ngAfterViewInit(): void {
    this.reloadTable();
  }

  ngOnDestroy() {
    this.unregisterEvents();
  }

  search() {
    this.setPage(1);
    if (this.searchText) {
      this.criteria.where('name', 'like', this.searchText);
    } else {
      this.criteria.where('name', 'like', '');
    }
    this.list();
  }

  list(): void {
    this.ui.setBusy(this.dtContainer.nativeElement);
    this.isTableLoading = true;
    this._sandbox.fetchTenants(this.criteria);
  }

  delete() {}

  edit() {
    const url = 'edit';
    if (this.selected.length > 0) {
      this.router.navigate([this.router.url, url, this.selected[0].id]);
    }
  }

  protected registerEvents(): void {
    this.subscriptions.push(
      this._sandbox.tenants$.subscribe((data: any) => {
        this.data = Object.values(data);
        this.ui.clearBusy();
        this.isTableLoading = false;
      })
    );
    this.subscriptions.push(
      this._sandbox.tenantsMeta$.subscribe((meta: any) => {
        if (meta) {
          this.pagination = meta ? meta.pagination : null;
        }
      })
    );
  }
}
