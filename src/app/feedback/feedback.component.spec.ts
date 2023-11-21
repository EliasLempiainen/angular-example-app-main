import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
            declarations: [ FeedbackComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
    })
      .compileComponents();

    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*it('should navigate to home on cancel', () => {
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should reset the form on submit', () => {
    component.fbForm.setValue({
      title: 'Test Title',
      description: 'Test Description',
      name: 'Test Name',
      email: 'test@example.com',
      phone: '1234567890',
      termsAndConditions: true
    });

    component.onSubmit();

    expect(component.fbForm.value).toEqual({
      title: '',
      description: '',
      name: '',
      email: '',
      phone: '',
      termsAndConditions: ''
    });

    // Check that errors are cleared
    expect(component.fbForm.value.get('title').errors).toBeNull();
    expect(component.fbForm.value.get('description').errors).toBeNull();
    expect(component.fbForm.value.get('name').errors).toBeNull();
    expect(component.fbForm.value.get('email').errors).toBeNull();
    expect(component.fbForm.value.get('phone').errors).toBeNull();
  }); */

  // Add more tests for form validation, getters, etc.
});
