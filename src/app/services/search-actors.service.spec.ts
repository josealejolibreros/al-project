import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { SearchActorsService } from './search-actors.service';
import { ResponseDescriptor } from '../types/search.type';


describe('SearchActorsService', () => {
  let injector;
  let service: SearchActorsService;
  let actorDescriptor : ResponseDescriptor;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchActorsService, ResponseDescriptor]
    });

    injector = getTestBed();
    service = injector.get(SearchActorsService);
    actorDescriptor = injector.get(ResponseDescriptor);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([SearchActorsService], (service: SearchActorsService) => {
    expect(service).toBeTruthy();
  }));

  fdescribe('search() method service', () => {
    it('should return an ActorDescriptor', () => {
      const url: string = "https://api.themoviedb.org/3/search/movie?api_key=977cda5d9bfac0a6b0252ef0272785b6&query=";
      const term:string = "Hard die";
      service.search(url + term).subscribe(data => {
        expect(data).toEqual(actorDescriptor);
      });
  
      
    });
  
  });
  





});




