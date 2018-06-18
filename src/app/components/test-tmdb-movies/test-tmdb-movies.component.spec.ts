import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTmdbMoviesComponent } from './test-tmdb-movies.component';

describe('TestTmdbMoviesComponent', () => {
  let component: TestTmdbMoviesComponent;
  let fixture: ComponentFixture<TestTmdbMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTmdbMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTmdbMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
