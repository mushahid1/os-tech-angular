import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingWentWrongComponent } from './something-went-wrong.component';
import { AngularFireModule } from '@angular/fire/compat';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SomethingWentWrongComponent', () => {
  let component: SomethingWentWrongComponent;
  let fixture: ComponentFixture<SomethingWentWrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomethingWentWrongComponent ],
      imports: [MatDialogModule, ToastrModule.forRoot(), RouterTestingModule, SharedModule, MaterialModule, BrowserAnimationsModule,
        AngularFireModule.initializeApp({
          apiKey: 'YOUR_API_KEY',
          databaseURL: 'YOUR_DATABASE_URL',
        }),
        HttpClientTestingModule
      ],
      providers: [
        ToastService,
        MatDialog,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        AuthService
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomethingWentWrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
