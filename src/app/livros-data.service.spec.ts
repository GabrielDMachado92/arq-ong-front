import { TestBed } from '@angular/core/testing';

import { LivrosDataService } from './livros-data.service';

describe('LivrosDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivrosDataService = TestBed.get(LivrosDataService);
    expect(service).toBeTruthy();
  });
});
