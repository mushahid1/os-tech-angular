import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { CompanyManagementRoutingModule } from './company-management-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    CompanyManagementRoutingModule,
    MaterialModule, 
    SharedModule,
  ],
  providers: []
})
export class CompanyManagementModule { }
