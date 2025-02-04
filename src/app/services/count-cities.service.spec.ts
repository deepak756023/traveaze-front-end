import { TestBed } from '@angular/core/testing';

import { CountCitiesService } from './count-cities.service';

describe('CountCitiesService', () => {
  let service: CountCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
