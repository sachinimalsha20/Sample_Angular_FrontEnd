import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MannarComponent } from './mannar.component';

describe('MannarComponent', () => {
  let component: MannarComponent;
  let fixture: ComponentFixture<MannarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MannarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MannarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
