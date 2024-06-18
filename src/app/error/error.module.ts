import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SomethingWentWrongComponent } from './something-went-wrong/something-went-wrong.component';
import { SharedModule } from '../shared/shared.module';

// Modules

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SomethingWentWrongComponent, PageNotFoundComponent],
})
export class ErrorModule {}
