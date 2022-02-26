import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AppConstant } from '../constant/AppConstant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private refresh: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient, private router: Router) {}
  login(username: string, password: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Token', localStorage.getItem('jwt'));
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
          } else if (res.returnValue == '002') {
            localStorage.removeItem('jwt');
            this.router.navigate(['/auth/signin/']);
            throw new Error(res.message);
          } else {
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
      this.router.navigate(['/auth/signin']);
    } else {
      return throwError(errMsg);
    }
  }
}
