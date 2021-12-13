import { TestBed } from '@angular/core/testing';

import { CodesDataService } from './codes-data.service';

describe('CodesDataService', () => {
  let service: CodesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
