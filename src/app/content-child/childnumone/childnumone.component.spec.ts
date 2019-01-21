import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildnumoneComponent } from './childnumone.component';

describe('ChildnumoneComponent', () => {
  let component: ChildnumoneComponent;
  let fixture: ComponentFixture<ChildnumoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildnumoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildnumoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
