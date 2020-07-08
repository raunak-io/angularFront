import { AuthService } from './../../../../services/auth.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css'],
})
export class UserChangePasswordComponent implements OnInit {
  constructor(private service: AuthService) {}
  changePassword = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  changeUserPass() {
    console.log(this.changePassword.value);
    if (this.changePassword.invalid) {
      return;
    }
    this.service.updatePassword(
      this.changePassword.value.oldPassword,
      this.changePassword.value.newPassword,
      this.changePassword.value.confirmPassword
    );
    this.changePassword.reset();
  }

  ngOnInit(): void {}
}
