import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {User} from '../../shared/user';
import {FORM_ERRORS, FORM_LABELS, FORM_PLACEHOLDERS, FORM_SUCCESS, FORM_VALIDATION_MESSAGES, USER} from '../../shared/form-data';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  user: User = USER;
  formLabels = FORM_LABELS;
  formPlaceholders = FORM_PLACEHOLDERS;
  formSuccess = FORM_SUCCESS;
  formErrors: any = FORM_ERRORS;
  validationMessages: any = FORM_VALIDATION_MESSAGES;


  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  get form(): ValidationErrors {
    return this.userForm.controls;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    });
    this.userForm.valueChanges.subscribe(() => this.onValueChanges());
  }

  onValueChanges(): void {
    const form = this.userForm;

    Object.keys(this.formErrors).forEach(field => {
      const control = form.get(field);
      this.formErrors[field] = '';

      if ((control?.dirty || control?.touched) && control.invalid) {
        const messages = this.validationMessages[field];

        Object.keys(control.errors as ValidationErrors).some(key => this.formErrors[field] = messages[key]);
      }
    });
  }
}
