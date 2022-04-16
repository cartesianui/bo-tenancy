import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '@cartesianui/common';
import { Injector, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Configuration, ConfigurationSandbox } from '@cartesianui/ng-configuration';

@Component({
  selector: 'domain-configuration',
  templateUrl: './domain-configuration.component.html'
})
export class DomainConfigurationComponent extends BaseComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    branding: new FormGroup({
      animationLogo: new FormControl(''),
      style: new FormControl('')
    }),
    invoice: new FormGroup({
      name: new FormControl('', Validators.required),
      taxNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
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
    const form = new Configuration({
      id: this.configuration.id,
      key: 'domain',
      configuration: this.formGroup.value
    });
    this._sandbox.updateConfiguration(form);
  }

  registerEvents() {
    this.subscriptions.push(
      this._sandbox.configuration$.subscribe((configuration: Configuration) => {
        if (configuration) {
          this.configuration = configuration;
          this.formGroup.reset();
          this.formGroup.patchValue(this.configuration.configuration);
        }
      })
    );
  }

  fetchConfiguration() {
    this._sandbox.fetchConfigurationByType('domain');
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
