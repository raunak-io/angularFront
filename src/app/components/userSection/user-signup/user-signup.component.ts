import { AuthService } from './../../../services/auth.service';
import { Subscription } from 'rxjs';

import { mimeType } from './../../../utils/mime-type.validator';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit, OnDestroy {
  constructor(private service: AuthService) {}
  imagePreview: string;
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

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required, [mimeType]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  pickImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signUpForm.patchValue({ image: file });
    this.signUpForm.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  signUpData() {
    console.log(this.signUpForm.value);
    if (this.signUpForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.service.signUp(
      this.signUpForm.value.name,
      this.signUpForm.value.email,
      this.signUpForm.value.password,
      this.signUpForm.value.confirmPassword,
      this.signUpForm.value.image
    );
    this.signUpForm.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
