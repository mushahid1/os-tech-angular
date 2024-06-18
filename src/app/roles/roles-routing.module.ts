import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleConfigComponent } from './role-config/role-config.component';

const routes: Routes = [
  {
    path: '',
    component: RoleConfigComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
