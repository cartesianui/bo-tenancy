import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenancyComponent } from './tenancy.component';
import { ListTenantComponent } from './ui/list/list-tenant.component';
import { EditTenantComponent } from './ui/edit/edit-tenant.component';

const routes: Routes = [
  {
    path: '',
    component: TenancyComponent,
    children: [
      {
        path: '',
        component: ListTenantComponent,
        data: {
          title: 'Tenants'
        },
        pathMatch: 'full'
      },
      {
        path: 'edit/:id',
        component: EditTenantComponent,
        data: {
          title: 'Edit'
        },
        pathMatch: 'full'
      },
      {
        path: '*',
        redirectTo: 'list'
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenancyRoutingModule {}
