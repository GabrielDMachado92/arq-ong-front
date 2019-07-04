import { TestBed } from '@angular/core/testing';

import { OngDataService } from './ong-data.service';

describe('OngDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OngDataService = TestBed.get(OngDataService);
    expect(service).toBeTruthy();
  });
});
