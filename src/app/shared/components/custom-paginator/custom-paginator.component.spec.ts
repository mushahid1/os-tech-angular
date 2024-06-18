import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPaginatorComponent } from './custom-paginator.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../../shared.module';

describe('CustomPaginatorComponent', () => {
  let component: CustomPaginatorComponent;
  let fixture: ComponentFixture<CustomPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPaginatorComponent ],
      imports: [
        MatDialogModule,
        MatPaginatorModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        MaterialModule,
        FormsModule,
        SharedModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
