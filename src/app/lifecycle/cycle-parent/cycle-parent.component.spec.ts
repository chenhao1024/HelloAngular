import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleParentComponent } from './cycle-parent.component';

describe('CycleParentComponent', () => {
  let component: CycleParentComponent;
  let fixture: ComponentFixture<CycleParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
