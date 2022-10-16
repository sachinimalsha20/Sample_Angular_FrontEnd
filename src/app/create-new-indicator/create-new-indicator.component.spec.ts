import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewIndicatorComponent } from './create-new-indicator.component';

describe('CreateNewIndicatorComponent', () => {
  let component: CreateNewIndicatorComponent;
  let fixture: ComponentFixture<CreateNewIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
