import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../shared/user';
import {FORM_LABELS, FORM_PLACEHOLDERS, USER} from '../../shared/form-data';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  user: User = USER;
  formLabels = FORM_LABELS;
  formPlaceholders = FORM_PLACEHOLDERS;

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required]],
    });
  }
}
