import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActorDetailComponent } from './page-actor-detail.component';

describe('PageActorDetailComponent', () => {
  let component: PageActorDetailComponent;
  let fixture: ComponentFixture<PageActorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
