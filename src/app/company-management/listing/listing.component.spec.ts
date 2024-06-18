import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { ListingComponent } from './listing.component';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

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
        ListingComponent,
      ],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
