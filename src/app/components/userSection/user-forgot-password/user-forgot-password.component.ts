import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.css'],
})
export class UserForgotPasswordComponent implements OnInit {
  constructor(private service: AuthService) {}

  currentEmail = new FormGroup({
    userCurrentEmail: new FormControl('', Validators.required),
  });
  newPassReset = new FormGroup({
    newPasswords: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  submitEmail() {
    if (this.currentEmail.invalid) {
      return;
    }
    this.service.forgotPassword(this.currentEmail.value.userCurrentEmail);
    console.log(this.currentEmail.value);
    this.currentEmail.reset();
  }
  submitPass() {
    if (this.newPassReset.invalid) {
      return;
    }
    this.service.resetPass(
      this.newPassReset.value.newPasswords,
      this.newPassReset.value.confirmPassword
    );

    console.log(this.newPassReset.value);
    this.newPassReset.reset();
  }

  ngOnInit(): void {}
}
