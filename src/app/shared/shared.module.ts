import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CustomPaginatorComponent } from './components/custom-paginator/custom-paginator.component';
import { SharedService } from './shared.service';
import { RouterModule } from '@angular/router';
import { SvgComponent } from './components/svg/svg.component';
import { SearchComponent } from './components/search/search.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { StatusComponent } from './components/status/status.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import {CdkDropList, CdkDrag} from '@angular/cdk/drag-drop';

const MODULES: any[] = [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, RouterModule, CdkDropList, CdkDrag];
const COMPONENTS: any[] = [
  CustomPaginatorComponent,
  StatusComponent,
  SvgComponent,
  SearchComponent,
  PageHeaderComponent,
  AccordionComponent
];
const COMPONENTS_DYNAMIC: any[] = [];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];
const SERVICES: any[] = [SharedService];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ...DIRECTIVES, ...PIPES],
  providers: [...SERVICES, ...PIPES],
})
export class SharedModule {}
