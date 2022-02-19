import { Component, Injector, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '@cartesianui/common';
import { TenancySandbox } from '../../tenancy.sandbox';
import { Tenant, Domain } from '../../models';

@Component({
  selector: 'edit-tenant',
  templateUrl: './edit-tenant.component.html'
})
export class EditTenantComponent extends BaseComponent implements OnInit, OnDestroy {
  @ViewChild('formCard') formCard: ElementRef;
  deleting: boolean;
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  domainActive: boolean;
  domainDeactive: boolean;
  domainVerify: boolean;
  domainDelete: boolean;

  id: string;
  domainsList;
  control: FormControl;
  tenantDetail;
  formGroup = new FormGroup({
    name: new FormControl(''),
    isActive: new FormControl(''),
    mode: new FormControl('')
  });

  constructor(injector: Injector, private _sandbox: TenancySandbox, private route: ActivatedRoute, private router: Router) {
    super(injector);
    this.control = new FormControl('', [Validators.required, this.formValidator.domainValidator()]);
  }

  ngOnInit(): void {
    this.registerEvents();
    this.fetchTenant();
  }

  ngOnDestroy(): void {
    this.unregisterEvents();
  }

  registerEvents(): void {
    this.subscriptions.push(
      this.route.params.subscribe((params) => {
        this.id = params.id;
        // this._sandbox.fetchDomains(this.id);
        this.fetchDomainsList();
      }),
      this._sandbox.domains$.subscribe((data: Tenant[]) => {
        if (data) {
          console.log(data);
          this.domainsList = [];
          this.domainsList = data;
        }
      }),
      this._sandbox.tenantLoading$.subscribe((loading) => {
        if (loading && this.loading !== undefined) {
          if (this.deleting) {
            this.notify.info('Deleting tenant');
          } else {
            this.notify.info('Fetch tenant detail');
          }
          //this.config[1].disabled = true;
        }
        this.loading = loading;
      }),
      this._sandbox.tenantLoaded$.subscribe((loaded) => {
        if (loaded && this.loaded !== undefined) {
          if (this.deleting) {
            this.notify.success('Tenant deleted', 'Success!');
            this.router.navigate(['tenants']);
            this.deleting = false;
          } else {
            this.notify.success('Tenant saved', 'Success!');
          }
          //this.config[1].disabled = false;
        }
        this.loaded = loaded;
      }),
      this._sandbox.tenantFailed$.subscribe((failed) => {
        if (failed && this.failed !== undefined) {
          if (this.deleting) {
            this.deleting = false;
          }
          // this.config[1].disabled = false;
        }
        this.failed = failed;
      }),
      this._sandbox.tenant$.subscribe((tenant: any) => {
        if (tenant) {
          this.tenantDetail = new Tenant(tenant);
          this.setFormValue();
          // this.config[0].value=this.tenantDetail.name;
          // this.config[1].value=this.tenantDetail.domain;
        }
      }),
      this._sandbox.domainLoading$.subscribe((loading) => {
        if (loading && this.loading !== undefined) {
          if (this.domainActive) {
            this.notify.info('Activating Domain');
          } else if (this.domainDeactive) {
            this.notify.info('Deactivating Domain');
          } else if (this.domainVerify) {
            this.notify.info('Verifying Domain');
          } else if (this.domainDelete) {
            this.notify.info('Deleting Domain');
          }
        }
        this.loading = loading;
      }),
      this._sandbox.domainLoaded$.subscribe((loaded) => {
        if (loaded && this.loaded !== undefined) {
          if (this.domainActive) {
            this.notify.success('Domain Activated', 'Success!');
            this.domainActive = false;
          } else if (this.domainDeactive) {
            this.notify.success('Domain Deactivated', 'Success!');
            this.domainDeactive = false;
          } else if (this.domainVerify) {
            this.notify.success('Domain Verified', 'Success!');
            this.domainVerify = false;
          } else if (this.domainDelete) {
            this.notify.success('Domain Deleted', 'Success!');
            this.domainDelete = false;
          }
          this.fetchDomainsList();
        }
        this.loaded = loaded;
      }),
      this._sandbox.domainFailed$.subscribe((failed) => {
        if (failed && this.failed !== undefined) {
          if (this.domainActive) {
            this.notify.error('Domain activation failed', 'Error!');
            this.domainActive = false;
          } else if (this.domainDeactive) {
            this.notify.error('Domain deactivation failed', 'Error!');
            this.domainDeactive = false;
          } else if (this.domainVerify) {
            this.notify.error('Domain verification failed', 'Error!');
            this.domainVerify = false;
          } else if (this.domainDelete) {
            this.notify.error('Domain deletion failed', 'Error!');
            this.domainDelete = false;
          }
        }
        this.failed = failed;
      })
    );
  }

  setFormValue() {
    this.formGroup.patchValue(this.tenantDetail);
    const status = this.tenantDetail.isActive;
    if (status === 0) {
      this.formGroup.controls['isActive'].setValue('Deactive');
    } else {
      this.formGroup.controls['isActive'].setValue('Active');
    }
  }

  fetchTenant() {
    this._sandbox.fetchTenant(this.id);
  }

  fetchDomainsList() {
    this._sandbox.fetchDomains(this.id);
  }

  // save(group): void {
  //   if (this.loading) {
  //     this.notify.warn('Please wait for the previous request', 'Warning!');
  //   } else if (group.valid) {
  //     const form = new Tenant({
  //       name: group.controls.name.value,
  //       domain: group.controls.domain.value,
  //     });
  //     this._sandbox.updateTenant(this.id, form);
  //   } else {
  //     this.notify.warn('Invalid form data', 'Warning!');
  //   }
  // }

  // delete(): void {
  //   this.message.confirm(
  //     `Are you sure you want to delete the tenant with id ${this.id}`,
  //     'Delete tenant',
  //     (res) => {
  //       if (res) {
  //         this.deleting = true;
  //         this._sandbox.deleteTenant(this.id);
  //       }
  //     }
  //   );
  // }

  activeDomain(domainIds: any) {
    this.domainActive = true;
    this._sandbox.activeDomain(domainIds);
  }

  deactiveDomain(domainIds: any) {
    this.domainDeactive = true;
    this._sandbox.deactiveDomain(domainIds);
  }

  verifyDomain(id: string) {
    this.domainVerify = true;
    this._sandbox.verifyDomain(id);
  }

  deletedomain(id: string) {
    this.domainDelete = true;
    this._sandbox.deleteDomain(id);
  }

  addDomain() {
    if (this.control.valid) {
      const form = new Domain({
        domain: this.control.value
      });
      console.log('create domain = ', form);
      this._sandbox.createDomain(form);
      this.control.reset();
    }
  }
}
