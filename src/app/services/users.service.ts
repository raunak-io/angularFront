import { AuthService } from './auth.service';
import { UserUpdateMe } from './../models/user-models/user-updateme.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl = 'http://localhost:3000/api/v1/users';
  constructor(private http: HttpClient, private authService: AuthService) {}
  // token = this.authService.getToken();
  // httpOptions = {
  //   headers: new HttpHeaders({ authorization: this.token }),
  // };
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl); // this.httpOptions
  }

  getUserById(userId): Observable<any> {
    return this.http.get<any>(this.usersUrl + '/' + userId); //
  }
  deleteUser(userId) {
    this.http
      .delete<any>(this.usersUrl + '/' + userId)
      .subscribe((res) => console.log(res));
  }
  updateMe(name?: string, email?: string, image?: string) {
    const updateData = new FormData();
    updateData.append('name', name);
    updateData.append('email', email);
    updateData.append('image', image);

    this.http
      .patch<{ userUpdatReq: UserUpdateMe }>(
        this.usersUrl + '/updateMe',
        updateData
        // this.httpOptions
      )
      .subscribe((updatedUserData) => {
        console.log(updatedUserData);
      });
  }
}
