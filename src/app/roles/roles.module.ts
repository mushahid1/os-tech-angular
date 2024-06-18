import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleConfigComponent } from './role-config/role-config.component';
import { RolesRoutingModule } from './roles-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RoleConfigComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule, 
    SharedModule,
  ],
  providers: []
})
export class RolesModule { }
