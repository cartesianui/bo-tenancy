import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@cartesianui/common';
import { TenancySandbox } from '../../tenancy.sandbox';
import { TenantRegistrationForm } from '../../models';

@Component({
  selector: 'app-account',
  templateUrl: './register-tenant.component.html'
})
export class RegisterTenantComponent extends BaseComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, this.formValidator.emailValidator()]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    domain: new FormControl('', [Validators.required, this.formValidator.domainValidator()])
  });
  loading: boolean;
  loaded: boolean;
  failed: boolean;

  constructor(injector: Injector, private _router: Router, public _sandbox: TenancySandbox) {
    super(injector);
  }

  ngOnInit(): void {
    this.registerEvents();
  }

  ngOnDestroy(): void {
    this.unregisterEvents();
  }

  register(): void {
    if (this.loading) {
      this.notify.warn('Please wait for previous request', 'Warning!');
    } else if (this.formGroup.valid) {
      const form = new TenantRegistrationForm();
      form.email = this.formGroup.controls.email.value;
      form.name = this.formGroup.controls.name.value;
      form.password = this.formGroup.controls.password.value;
      form.domain = this.formGroup.controls.domain.value;
      this._sandbox.register(form);
    } else {
      this.notify.warn('Invalid form data', 'Warning!');
    }
  }

  registerEvents(): void {
    this.subscriptions.push(
      this._sandbox.tenantLoading$.subscribe((loading) => {
        if (loading) {
          this.notify.info('Registering');
        }

        this.loading = loading;
      }),
      this._sandbox.tenantLoaded$.subscribe((loaded) => {
        if (loaded) {
          this.notify.success('Registered Tenant successfully', 'Success!');
          this._router.navigate(['account', 'login']);
        }
        this.loaded = loaded;
      }),
      this._sandbox.tenantFailed$.subscribe((failed) => {
        this.failed = failed;
      })
    );
  }

  getFormClasses = (e: AbstractControl): string => {
    return this.formValidator.getFormClasses(e);
  };

  getError = (e: any): string => {
    return this.formValidator.getErrorMessage(e);
  };
}
