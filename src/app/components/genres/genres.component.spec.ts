import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresComponent } from './genres.component';

fdescribe('GenresComponent', () => {
  let component: GenresComponent;
  let fixture: ComponentFixture<GenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  fdescribe('toShow() method component', () => {
    it('should execute a show genres', () => {
       expect(component.toShow()).toBeDefined;
    });

  });

  



});
