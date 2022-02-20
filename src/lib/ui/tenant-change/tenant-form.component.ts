import { Component, ChangeDetectionStrategy, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '@cartesianui/common';
import { accountModuleAnimation } from '@cartesianui/common';
import { AccountSandbox } from '../../account.sandbox';

@Component({
  selector: 'app-account',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.scss']
})
export class TenantFormComponent extends BaseComponent {
  constructor(injector: Injector, private _sandbox: AccountSandbox) {
    super(injector);
  }
}
