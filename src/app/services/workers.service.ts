import { Api } from './../shared/utils/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceModel } from '../shared/utils/models';

@Injectable({
  providedIn: 'root'
})
export class WorkersService implements HttpServiceModel {

  constructor(
    private http:HttpClient
  ) { }
  fetch(filters?: { [key: string]: any; }): Observable<any> {
    return this.http.get(Api.DATA_WORKERS)
  }
  get(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
