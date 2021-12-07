import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Api } from './../shared/utils/api';
import { HttpClient } from '@angular/common/http';
import { AuthDataModel, AuthServiceInterface, HttpResponseModel } from './../shared/utils/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {
  private _access: boolean = false;
  public get access(): boolean {
    return this._access;
  }

  constructor(
    private http: HttpClient
  ) {
    this.logged();
  }

  logged(): void {
    this.http.get<HttpResponseModel>(Api.AUTH_IS_LOGGED, {
      headers: {
        authorization: localStorage.getItem('token') || ''
      }
    }).subscribe((resp: HttpResponseModel) => {
      resp.error
        ? this._access = false
        : this._access = true;
    })
  }
  logIn(value: AuthDataModel): void {
    this.logOut();
    this.http
      .post<HttpResponseModel>(Api.AUTH_LOGIN, value)
      .subscribe((resp: HttpResponseModel) => {
        this._access = true;
        localStorage.setItem('token', resp.accessToken);
      })
  }
  logOut(): void {
    localStorage.removeItem('token')
    this._access = false;
  }
}
