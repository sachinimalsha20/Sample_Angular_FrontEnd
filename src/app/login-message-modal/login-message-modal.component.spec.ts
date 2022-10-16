import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMessageModalComponent } from './login-message-modal.component';

describe('LoginMessageModalComponent', () => {
  let component: LoginMessageModalComponent;
  let fixture: ComponentFixture<LoginMessageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMessageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
