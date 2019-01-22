import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child11Component } from './child1.component';

describe('Child1Component', () => {
  let component: Child11Component;
  let fixture: ComponentFixture<Child11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
