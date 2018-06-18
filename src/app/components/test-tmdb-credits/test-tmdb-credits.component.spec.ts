import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTmdbCreditsComponent } from './test-tmdb-credits.component';

describe('TestTmdbCreditsComponent', () => {
  let component: TestTmdbCreditsComponent;
  let fixture: ComponentFixture<TestTmdbCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTmdbCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTmdbCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
