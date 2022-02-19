import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '@cartesianui/common';
import { TenantChangeDialogComponent } from './tenant-change-dialog.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SessionService } from '@shared/services';

@Component({
  selector: 'tenant-change',
  templateUrl: './tenant-change.component.html'
})
export class TenantChangeComponent extends BaseComponent implements OnInit {
  name = '';

  constructor(injector: Injector, private sessionService: SessionService, private _modalService: BsModalService) {
    super(injector);
  }

  get isTenancyEnabled(): boolean {
    return this.tenancy.isEnabled;
  }

  ngOnInit() {
    if (this.sessionService.tenant) {
      this.name = this.sessionService.tenant.name;
    }
  }

  showChangeModal(): void {
    const modal = this._modalService.show(TenantChangeDialogComponent);
    if (this.sessionService.tenant) {
      modal.content.name = this.sessionService.tenant.name;
    }
  }
}
