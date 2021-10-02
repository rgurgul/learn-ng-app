import { Observable } from 'rxjs';

export interface HttpServiceModel {
  fetch(filters?: { [key: string]: any }): Observable<any>;
  get(id: string): Observable<any>;
  add(item: any): Observable<any>;
  update(item: any): Observable<any>;
  remove(id: string): Observable<any>;
}

export interface AuthServiceInterface {
  logged(): void;
  logIn(value: AuthDataModel): void;
  logOut(): void;
}

export interface HttpResponseModel {
  data: any[];
  total: number;
  message: string;
  error: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthDataModel {
  username: string;
  password: string;
}

export interface ItemModel {
  id?: number;
  category: string;
  imgSrc: string;
  price: number;
  title: string;
}

export interface WorkerModel {
  id?: string,
  name: string,
  phone: number,
  category: string
}

export type ItemsKeys = 'title' | 'imgSrc' | 'price';
export type WorkersKeys = 'name' | 'phone' | 'category';
export type GridFieldTypes = 'image' | 'input' | 'button';

export interface GridDataModel<T> {
  key?: T;
  type?: GridFieldTypes;
  text?: string;
}

export interface ItemsFiltersModel {
  title?: string;
  priceFrom?: number;
  category?: string;
  currentPage?: number;
  itemsPerPage?: number;
}
