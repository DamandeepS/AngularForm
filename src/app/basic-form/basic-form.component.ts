import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { samePasswordValidator } from '../shared/password-validator.directive';



@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  basicForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.basicForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: '',
      confirmPassword: ''

    });

    this.setPasswordValidators();
    this.basicForm.valueChanges.subscribe(console.log);
  }

  private setPasswordValidators() {
    const password = this.basicForm.get('password');
    const confirmPassword = this.basicForm.get('confirmPassword');
    const validators = {
      'password': Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]),
      'confirmPassword': Validators.compose([
        Validators.required,
        Validators.minLength(6),
        samePasswordValidator(password)
      ])
    };

    password.setValidators(validators.password);
    confirmPassword.setValidators(validators.confirmPassword)

    password.valueChanges.subscribe((e) => {
        confirmPassword.updateValueAndValidity();
    });

  }

  get firstName() {
    return this.basicForm.controls.firstName;
  }
  get lastName() {
    return this.basicForm.controls.lastName;
  }
  get email() {
    return this.basicForm.controls.email;
  }
  get password() {
    return this.basicForm.controls.password;
  }
  get confirmPassword() {
    return this.basicForm.controls.confirmPassword;
  }
}
