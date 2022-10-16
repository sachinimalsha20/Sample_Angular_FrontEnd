import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mulaiu1Component } from './mulaiu1.component';

describe('Mulaiu1Component', () => {
  let component: Mulaiu1Component;
  let fixture: ComponentFixture<Mulaiu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mulaiu1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mulaiu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
