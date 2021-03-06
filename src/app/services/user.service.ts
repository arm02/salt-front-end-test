import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AppConstant } from '../constant/AppConstant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private refresh: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router) {
    if (JSON.parse(localStorage.getItem("currentUser")) != null) {
      this.setRefresh(JSON.parse(localStorage.getItem("currentUser")))
    }
  }
  login(username: string, password: string) {
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_LOGIN;
    return this.http
      .post(url, {
        username: username,
        password: password,
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '200') {
            return res;
          }  else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  signup(fullName: string, email: string, username: string, password: string) {
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_SIGNUP;
    return this.http
      .post(url, {
        fullName: fullName,
        username: username,
        email: email,
        password: password,
        profilePhoto: 'https://inspektorat.kotawaringinbaratkab.go.id/public/uploads/user/default-user-imge.jpeg',
        roles: ['admin']
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '200') {
            return res;
          }  else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
  }

  public getRefresh(): Observable<any> {
    return this.refresh.asObservable();
  }

  public setRefresh(value: any): void {
    localStorage.setItem('currentUser', JSON.stringify(value));
    this.refresh.next(value);
  }

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : 'Server error';
    console.error(errMsg); // log to console instead
    if (error.status == 401 || error.status == 403) {
      localStorage.removeItem('jwt');
      this.router.navigate(['/']);
    } else {
      return throwError(errMsg);
    }
  }
}
