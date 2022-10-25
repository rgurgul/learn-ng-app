import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/shared/utils/api';
import { AuthDataModel, AuthServiceInterface } from 'src/app/shared/utils/models';

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
    const teken = localStorage.getItem('token') || '';
    this.http.get(Api.AUTH_IS_LOGGED, { headers: { authorization: teken } }).subscribe((resp: any) => {
      if (!resp.data.warning) {
        this._access = true
      }
    })
  }
  logIn(value: AuthDataModel): void {
    this.http.post(Api.AUTH_LOGIN, value).subscribe((resp: any) => {
      this._access = true;
      localStorage.setItem('token', resp.data.accessToken);
    })
  }
  logOut(): void {
    localStorage.removeItem('token');
    this._access = false;
  }
}
