import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vavuniya2Component } from './vavuniya2.component';

describe('Vavuniya2Component', () => {
  let component: Vavuniya2Component;
  let fixture: ComponentFixture<Vavuniya2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vavuniya2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vavuniya2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
