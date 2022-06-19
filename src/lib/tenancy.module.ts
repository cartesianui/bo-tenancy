import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule as CartesianFormsModule } from '@cartesianui/forms';
import { TenancyRoutingModule } from './tenancy-routing.module';
import { tenantFeatureKey } from './store/tenant.reducer';
import { tenantReducers } from './store';
import { TenantEffects } from './store/tenant.effect';
import { TenancySandbox } from './tenancy.sandbox';
import { TenancyHttpService } from './shared';
import { TenancyComponent } from './tenancy.component';
import { ListTenantComponent } from './ui/list/list-tenant.component';
import { EditTenantComponent } from './ui/edit/edit-tenant.component';
import { TenantDomainsComponent } from './ui/edit/tenant-domains/tenant-domains.component';
import { RegisterTenantComponent } from './ui/register/register-tenant.component';

import { HostConfigurationComponent } from './ui/configuration/host/host-configuration.component';
import { TenantConfigurationComponent } from './ui/configuration/tenant/tenant-configuration.component';
import { DomainConfigurationComponent } from './ui/configuration/domain/domain-configuration.component';

@NgModule({
  declarations: [
    TenancyComponent,
    RegisterTenantComponent,
    ListTenantComponent,
    EditTenantComponent,
    TenantDomainsComponent,
    HostConfigurationComponent,
    TenantConfigurationComponent,
    DomainConfigurationComponent
  ],
  imports: [
    CommonModule,
    TenancyRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    NgxDatatableModule,
    CartesianFormsModule,
    StoreModule.forFeature(tenantFeatureKey, tenantReducers),
    EffectsModule.forFeature([TenantEffects])
  ],
  providers: [TenancySandbox, TenancyHttpService],
  exports: [RegisterTenantComponent]
})
export class TenancyModule {}
