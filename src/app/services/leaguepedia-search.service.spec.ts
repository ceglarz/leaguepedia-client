import { TestBed } from '@angular/core/testing';

import { LeaguepediaSearchService } from './leaguepedia-search.service';

describe('LeaguepediaSearchService', () => {
  let service: LeaguepediaSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaguepediaSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
