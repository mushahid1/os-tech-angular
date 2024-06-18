import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalMatTableComponent } from 'src/app/shared/components/global-mat-table/global-mat-table.component';
import { ActivatedRoute } from '@angular/router';
import { RoleConfigComponent } from './role-config.component';

describe('RoleConfigComponent', () => {
  let component: RoleConfigComponent;
  let fixture: ComponentFixture<RoleConfigComponent>;

  beforeEach(() => {
    const activatedRouteMock = {
      params: of({
        externalId: '123NAN88746',
        token: 'jhdkshduew76364jiurywe7'
      }),
      snapshot: {
        url: [{ path: 'examplePath' }]
      }
    };
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getCurrentUser']);
    authServiceSpy.getCurrentUser.and.returnValue(of('test@example.com'));

    TestBed.configureTestingModule({
      declarations: [
        RoleConfigComponent,
        GlobalMatTableComponent
      ],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleConfigComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
