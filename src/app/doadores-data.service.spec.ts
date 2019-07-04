import { TestBed } from '@angular/core/testing';

import { DoadoresDataService } from './doadores-data.service';

describe('DoadoresDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoadoresDataService = TestBed.get(DoadoresDataService);
    expect(service).toBeTruthy();
  });
});
