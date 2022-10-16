import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntigatesComponent } from './intigates.component';

describe('IntigatesComponent', () => {
  let component: IntigatesComponent;
  let fixture: ComponentFixture<IntigatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntigatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntigatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
