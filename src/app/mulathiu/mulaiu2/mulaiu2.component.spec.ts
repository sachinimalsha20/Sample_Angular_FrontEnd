import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mulaiu2Component } from './mulaiu2.component';

describe('Mulaiu2Component', () => {
  let component: Mulaiu2Component;
  let fixture: ComponentFixture<Mulaiu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mulaiu2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mulaiu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
