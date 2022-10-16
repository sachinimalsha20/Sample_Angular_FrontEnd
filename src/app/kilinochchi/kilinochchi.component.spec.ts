import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KilinochchiComponent } from './kilinochchi.component';

describe('KilinochchiComponent', () => {
  let component: KilinochchiComponent;
  let fixture: ComponentFixture<KilinochchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KilinochchiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KilinochchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
