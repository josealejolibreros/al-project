import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToUpComponent } from './go-to-up.component';

describe('GoToUpComponent', () => {
  let component: GoToUpComponent;
  let fixture: ComponentFixture<GoToUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
