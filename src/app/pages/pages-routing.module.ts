import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ROUTE } from '../shared/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../company-management/company-management.module').then(m => m.CompanyManagementModule),
      },
      {
        path: ROUTE.DEFAULT_ROLES,
        loadChildren: () =>
          import('../roles/roles.module').then(m => m.RolesModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
