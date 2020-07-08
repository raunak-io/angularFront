import { UserChangePassword } from './../models/user-models/user-change-password.model';

import { UserSignUp } from './../models/user-models/user-signup.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForgetPassword } from '../models/user-models/user-forget-password.model';
import { ResetPassword } from '../models/user-models/user-reset-password.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:3000/api/v1/users';
  private token: string;
  private role;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }
  getRole() {
    return this.role;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  getIsAuth() {
    return this.isAuthenticated;
  }

  signUp(
    name: string,
    email: string,
    password: string,

    confirmPassword: string,
    image?: string
  ) {
    const signUpData = new FormData();
    signUpData.append('name', name);
    signUpData.append('image', image);
    signUpData.append('email', email);
    signUpData.append('password', password);
    signUpData.append('confirmPassword', confirmPassword);

    this.http
      .post<{ userSignUp: UserSignUp }>(
        this.authUrl + '/signUp',
        signUpData
        // this.httpOptions
      )
      .subscribe(
        (userSignData) => {
          console.log(userSignData);
          this.router.navigate(['/']);
        },
        (error) => {
          this.authStatusListener.next(false);
        }
      );
  }

  login(email: string, password: string) {
    const userLoginData = new FormData();
    userLoginData.append('email', email),
      userLoginData.append('password', password),
      this.http
        .post<any>(this.authUrl + '/login', userLoginData, this.httpOptions)
        .subscribe(
          (userLog) => {
            console.log(userLog);
            const token = userLog.token;
            const role = userLog.data['user']['role'];

            this.role = role;
            console.log(this.role);
            this.token = token;
            console.log(userLog);
            console.log(this.token);
            if (token) {
              this.isAuthenticated = true;
              this.authStatusListener.next(true);
              this.saveAuthData(token);
              this.router.navigate(['/']);
            }
          },
          (error) => {
            this.authStatusListener.next(false);
          }
        );
  }

  autoAuthUser() {
    const autoAuthInformation = this.getAutoAuth();
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  forgotPassword(email: string) {
    const userLoggedIn = new FormData();
    userLoggedIn.append('email', email);

    this.http
      .post<{ forgotPass: ForgetPassword }>(
        this.authUrl + '/forgotPassword',
        userLoggedIn,
        this.httpOptions
      )
      .subscribe((userLOGIN) => {
        console.log(userLOGIN);
      });
  }

  resetPass(password: string, confirmPassword: string, userId?) {
    const resetData = new FormData();
    resetData.append('password', password);
    resetData.append('confirmPassword', confirmPassword);

    this.http
      .patch<{ resetPassData: ResetPassword }>(
        this.authUrl + '/resetPassword' + '/' + userId,
        resetData,
        this.httpOptions
      )
      .subscribe((resetDataa) => {
        console.log(resetDataa);
      });
  }

  updatePassword(
    currentPassword: string,
    password: string,
    confirmPassword: string
  ) {
    const updatePasswordData = new FormData();
    updatePasswordData.append('currentPassword', currentPassword);
    updatePasswordData.append('password', password);
    updatePasswordData.append('confirmPassword', confirmPassword);

    this.http
      .patch<{ updatePassword: UserChangePassword }>(
        this.authUrl + '/updateMyPassword',
        updatePasswordData,
        this.httpOptions
      )
      .subscribe((updatedPassData) => {
        console.log(updatedPassData);
      });
  }

  private saveAuthData(token: string) {
    localStorage.setItem('token', token);
  }
  private clearAuthData() {
    localStorage.removeItem('token');
  }

  private getAutoAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    return {
      token: token,
    };
  }
}
