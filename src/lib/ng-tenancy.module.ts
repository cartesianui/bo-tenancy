import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgFormModule } from '@cartesianui/ng-form';
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

@NgModule({
  declarations: [TenancyComponent, ListTenantComponent, EditTenantComponent, TenantDomainsComponent],
  imports: [
    CommonModule,
    TenancyRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    NgxDatatableModule,
    NgFormModule,
    StoreModule.forFeature(tenantFeatureKey, tenantReducers),
    EffectsModule.forFeature([TenantEffects])
  ],
  providers: [TenancySandbox, TenancyHttpService]
})
export class NgTenancyModule {}
