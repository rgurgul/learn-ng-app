import { Api } from './../shared/utils/api';
import { HttpServiceModel } from './../shared/utils/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceModel {

  constructor(
    private http: HttpClient
  ) {

  }
  fetch(filters?: { [key: string]: any; }): Observable<any> {
    return this.http.get(Api.DATA_ITEMS);
  }
  get(id: string): Observable<any> {
    return this.http.get(Api.DATA_ITEMS + "/" + id);
  }
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Observable<any> {
    return this.http.delete(Api.DATA_ITEMS + "/" + id, {
      headers: {
        authorization: localStorage.getItem('token') || ''
      }
    })
  }
}
