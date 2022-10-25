import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceModel } from 'src/app/shared/utils/models';
import { Observable } from 'rxjs';
import { Api } from 'src/app/shared/utils/api';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceModel {

  constructor(
    private http: HttpClient
  ) { }
  fetch(filters?: { [key: string]: any; } | undefined): Observable<any> {
    return this.http.get(Api.DATA_ITEMS, { params: filters })
  }
  get(id: string): Observable<any> {
    return this.http.get(`${Api.DATA_ITEMS}/${id}`)
  }
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Observable<any> {
    return this.http.delete(`${Api.DATA_ITEMS}/${id}`)
  }
}
