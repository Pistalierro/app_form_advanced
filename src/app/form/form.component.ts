import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {User} from '../../shared/user';
import {FORM_ERRORS, FORM_LABELS, FORM_PLACEHOLDERS, FORM_ROLES, FORM_SUCCESS, FORM_VALIDATION_MESSAGES} from '../../shared/form-data';
import {NgForOf, NgIf} from '@angular/common';
import {emailValidator, observableUrlValidator, rangeValidator} from '../../shared/custom-validators';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  formLabels = FORM_LABELS;
  formPlaceholders = FORM_PLACEHOLDERS;
  formSuccess = FORM_SUCCESS;
  formErrors: any = FORM_ERRORS;
  validationMessages: any = FORM_VALIDATION_MESSAGES;
  roles = FORM_ROLES;

  user: User = new User(1, null, null, null, null, null, null);

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
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 122)]],
      site: [this.user.site, [Validators.required], [observableUrlValidator]],
      role: [this.user.role, Validators.required],
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

  onSubmit(): void {
    console.log(this.userForm.value);
    console.log(this.userForm.valid);
  }
}
