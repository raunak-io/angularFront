import { AuthService } from './../../../services/auth.service';
import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit, OnDestroy {
  constructor(private service: AuthService) {}
  hide = true;
  isLoading = false;
  private authStatusSub: Subscription;

  ngOnInit(): void {
    this.authStatusSub = this.service
      .getAuthStatusListener()
      .subscribe((authStatus) => {
        this.isLoading = false;
      });
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  loginData() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.service.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
