import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { SearchService } from './search.service';


describe('SearchService', () => {
  let injector;
  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    injector = getTestBed();
    service = injector.get(SearchService);
    httpMock = injector.get(HttpTestingController);
  });
  
  fdescribe('search() method service', () => {
    it('should return an HttpClient', () => {
      const url: string = "https://api.themoviedb.org/3/search/movie?api_key=977cda5d9bfac0a6b0252ef0272785b6&query=";
      const term:string = "Hard die";
      
      

      service.search(url + term).subscribe(data => {
        expect(data).not.toBeNull;
      });

      
    });

  });



});








/*
import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';

import {HttpClient} from '@angular/common/http';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
fdescribe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});



describe("WHEN the search(item:string) method is called", function() {
  var a;
  let item:string ="bruce";

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service.search(item)).toBeDefined;
  }));
});



onFilter(filterIds: Array<string>){
  this.params.offset = 0;
  this.params.filters = this._UtilityService.getFiltersParam(filterIds);
  this.loadData('all');
}



describe("WHEN the onFilter() is called",()=>{
  it("SHOULD offset be 0 and filters be getFiltersParam(filterIds)",()=>{
    component.params.offset = null;
    component.params.filters = null;
    spyOn(component, "loadData");
    spyOn<any>(component['_UtilityServices'], "getFiltersParam").and.returnValue("fakeHttpResponse");
    component.onFilter(["filter 1","filter 2"]);
    expect(component.params.offset).toEqual(0);
    expect(component.params.offset).toBeDefined();
    expect(component.params.filters).toEqual("myFilters");
    expect(component.loadData).toHaveBeenCalledTimes(1);
    expect(component.loadData).toHaveBeenCalledWith("all");
    expect(component['_UtilityServices'].getFiltersParam).toHaveBeenCalledTimes(1)
    expect(component['_UtilityServices'].getFiltersParam).toHaveBeenCalledWith(["filter 1","filter 2"])
  });
});


*/


