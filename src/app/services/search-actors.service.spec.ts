import { TestBed, inject } from '@angular/core/testing';

import { SearchActorsService } from './search-actors.service';

describe('SearchActorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchActorsService]
    });
  });

  it('should be created', inject([SearchActorsService], (service: SearchActorsService) => {
    expect(service).toBeTruthy();
  }));
});
