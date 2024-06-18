import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Modules
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarComponent
  ],
  providers: [
  ],
  exports: [
    HeaderComponent,
    SidebarComponent],
})
export class PagesModule {}
