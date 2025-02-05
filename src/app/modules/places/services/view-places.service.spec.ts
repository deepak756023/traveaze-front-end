import { TestBed } from '@angular/core/testing';

import { ViewPlacesService } from './view-places.service';

describe('ViewPlacesService', () => {
  let service: ViewPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
