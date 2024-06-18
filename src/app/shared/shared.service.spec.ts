import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
