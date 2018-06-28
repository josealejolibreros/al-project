
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