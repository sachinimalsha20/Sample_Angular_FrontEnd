import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulathiuComponent } from './mulathiu.component';

describe('MulathiuComponent', () => {
  let component: MulathiuComponent;
  let fixture: ComponentFixture<MulathiuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulathiuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulathiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
