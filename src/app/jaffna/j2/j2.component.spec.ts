import { ComponentFixture, TestBed } from '@angular/core/testing';

import { J2Component } from './j2.component';

describe('J2Component', () => {
  let component: J2Component;
  let fixture: ComponentFixture<J2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ J2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(J2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
