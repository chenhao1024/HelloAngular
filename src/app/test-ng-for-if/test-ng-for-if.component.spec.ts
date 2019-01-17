import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgForIfComponent } from './test-ng-for-if.component';

describe('TestNgForIfComponent', () => {
  let component: TestNgForIfComponent;
  let fixture: ComponentFixture<TestNgForIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgForIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgForIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
