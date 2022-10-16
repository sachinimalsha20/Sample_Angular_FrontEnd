import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vavuniya1Component } from './vavuniya1.component';

describe('Vavuniya1Component', () => {
  let component: Vavuniya1Component;
  let fixture: ComponentFixture<Vavuniya1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vavuniya1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vavuniya1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
