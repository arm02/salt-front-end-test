import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map, } from 'rxjs/operators';
import { AppConstant } from '../constant/AppConstant';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {

  constructor(private http: HttpClient, private router: Router) { }

  getHomeNetwork(query: string, type: string = null) {
    const headers = new HttpHeaders().set("Content-Type", "application/json").set("Token", localStorage.getItem("jwt"));
    let url = AppConstant.PROJECT_SERVICE_ENDPOINT + AppConstant.API_GET_HOME_NETWORK + "?";
    url += "q=" + (query == null ? "" : query)
    url += "&type=" + type

    return this.http.get(url,
      {
        headers
      })
      .pipe(
        map((response) => {
          let res = JSON.parse(JSON.stringify(response));
          if (res.returnValue == '200') {
            return res;
          } else {
            throw new Error(res.message);
          }
        }),
        catchError((e: Response) => this.handleError(e))
      );
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