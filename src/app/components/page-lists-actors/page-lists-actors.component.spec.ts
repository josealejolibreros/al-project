
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListsActorsComponent } from './page-lists-actors.component';

describe('PageListsComponent', () => {
  let component: PageListsActorsComponent;
  let fixture: ComponentFixture<PageListsActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListsActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListsActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  




});
/*


describe("WHEN the setupMassEditConfig() is called", ()=>{
  it("SHOULD massEditConfig be setted using the global info ", ()=>{
    component.massEditConfig = null
    component.accountID = "accountID";
    component.deploymentID = "deploymentID";
    component.params = {values:[]};
    component.setupMassEditConfig();
    expect(component.massEditConfig.accountID ).toEqual("acountID");
    expect(component.massEditConfig.deploymentID ).toEqual("deploymentID");
    expect(component.massEditConfig.items_count ).toEqual(0);
    expect(component.massEditConfig.params ).toEqual({values:[]});
  });
});

describe("WHEN the onSearch() is called", ()=>{
  it("SHOULD massEditConfig be setted using the global info ", ()=>{
    //component.massEditConfig = null
    //component.accountID = "accountID";
    spyOn(component, "loadData")
    component.params.search  = "true";
    component.onSearch("true");
    expect(component.params.offset ).toEqual(0);
    expect(component.params.search ).toEqual("true");
  });
});

*/
