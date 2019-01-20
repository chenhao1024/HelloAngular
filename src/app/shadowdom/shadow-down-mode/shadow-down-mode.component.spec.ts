import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDownModeComponent } from './shadow-down-mode.component';

describe('ShadowDownModeComponent', () => {
  let component: ShadowDownModeComponent;
  let fixture: ComponentFixture<ShadowDownModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowDownModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDownModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
