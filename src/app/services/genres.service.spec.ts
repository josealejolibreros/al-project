import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GenresService } from './genres.service';
import { GenresDescriptor } from '../types/genres.type.';


/*
describe('GenresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenresService]
    });
  });

  
});
*/



describe('GenresService', () => {
  let injector;
  let service: GenresService;
  let genresDescriptor : GenresDescriptor;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GenresService, GenresDescriptor]
    });

    injector = getTestBed();
    service = injector.get(GenresService);
    genresDescriptor = injector.get(GenresDescriptor);
    httpMock = injector.get(HttpTestingController);
  });


  it('should be created', inject([GenresService], (service: GenresService) => {
    expect(service).toBeTruthy();
  }));

  fdescribe('getAll() method service', () => {
    it('should return an GenresDescriptor object', () => {
      const url: string = "https://api.themoviedb.org/3/search/movie?api_key=977cda5d9bfac0a6b0252ef0272785b6&query=";
      const term:string = "Hard die";
      service.getAll().subscribe(data => {
        expect(data).toEqual(genresDescriptor);
      });
  
      
    });
  
  });
});
