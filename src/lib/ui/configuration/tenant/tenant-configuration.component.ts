import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@cartesianui/common';
import { Configuration, ConfigurationSandbox } from '@cartesianui/bo-configuration';

@Component({
  selector: 'tenant-configuration',
  templateUrl: './tenant-configuration.component.html'
})
export class TenantConfigurationComponent extends BaseComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    appearance: new FormGroup({
      animationLogo: new FormControl(''),
      style: new FormControl('')
    }),
    // tenantManagement:new FormGroup({
    //   registerUserInSystem: new FormControl(false),
    //   newUserActiveByDefault: new FormControl(false),
    //   captchaOnRegistration: new FormControl(false),
    //   captchaOnLogin: new FormControl(false),
    //   tenantDefaultMode: new FormControl(""),
    //   enabledCookieConsent: new FormControl(false),
    //   enabledSessionTimeout: new FormControl(false),
    //   tenantSessionTime: new FormControl(""),
    //   emailConfirmationForLogin: new FormControl(false),
    //   allowProfilePicture: new FormControl(false),
    // }),
    userManagement: new FormGroup({
      registerUserInSystem: new FormControl(false),
      newUserActiveByDefault: new FormControl(false),
      captchaOnRegistration: new FormControl(false),
      captchaOnLogin: new FormControl(false),
      userDefaultMode: new FormControl(''),
      enabledCookieConsent: new FormControl(false),
      enabledSessionTimeout: new FormControl(false),
      userSessionTime: new FormControl(''),
      emailConfirmationForLogin: new FormControl(false),
      allowProfilePicture: new FormControl(false)
    }),
    security: new FormGroup({
      userDefaultSettings: new FormControl(false),
      password: new FormGroup({
        requireDigit: new FormControl(false),
        requireLowercase: new FormControl(false),
        requireNonAlphanumeric: new FormControl(false),
        requireUppercase: new FormControl(false),
        passwordLength: new FormControl('', Validators.required)
      }),
      userAccountLocking: new FormControl(false),
      numberOfLoginAttemps: new FormControl('', Validators.required),
      accountLockingDuration: new FormControl('', Validators.required)
    }),
    timing: new FormGroup({
      timeZoneInfo: new FormGroup({
        iana: new FormGroup({
          timeZoneId: new FormControl('', Validators.required)
        })
      })
    }),
    clock: new FormGroup({
      provider: new FormControl('', Validators.required)
    })
  });

  loading: boolean;
  loaded: boolean;
  failed: boolean;
  configuration: Configuration;

  constructor(injector: Injector, protected _sandbox: ConfigurationSandbox) {
    super(injector);
  }

  ngOnInit(): void {
    this.registerEvents();
    this.fetchConfiguration();
  }

  ngOnDestroy() {
    this.unregisterEvents();
  }

  update() {
    const configurations = this.formGroup.value;
    const form = new Configuration({
      id: this.configuration.id,
      key: 'tenant',
      configuration: configurations
    });
    this._sandbox.updateConfiguration(form);
  }

  registerEvents() {
    this.subscriptions.push(
      this._sandbox.configuration$.subscribe((configuration: any) => {
        if (configuration) {
          this.configuration = configuration;
          this.formGroup.reset();
          this.formGroup.patchValue(this.configuration.configuration);
        }
      })
    );
  }

  fetchConfiguration() {
    this._sandbox.fetchConfigurationByType('tenant');
  }

  getFormClasses(controlName: string): string {
    const control = this.formGroup.controls[controlName];
    if (control.value === '') {
      return '';
    }
    if (control.valid) {
      return 'is-valid';
    } else if (control.dirty && control.touched) {
      return 'is-invalid';
    }
  }
}
