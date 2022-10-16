import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VavuniyaComponent } from './vavuniya.component';

describe('VavuniyaComponent', () => {
  let component: VavuniyaComponent;
  let fixture: ComponentFixture<VavuniyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VavuniyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VavuniyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
