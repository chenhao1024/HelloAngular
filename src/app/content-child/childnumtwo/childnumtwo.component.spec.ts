import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildnumtwoComponent } from './childnumtwo.component';

describe('ChildnumtwoComponent', () => {
  let component: ChildnumtwoComponent;
  let fixture: ComponentFixture<ChildnumtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildnumtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildnumtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
