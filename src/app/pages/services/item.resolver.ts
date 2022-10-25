import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { filter, Observable, of, tap } from 'rxjs';
import { ItemsService } from './items.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<boolean> {

constructor(
  private router: ActivatedRoute,
  private itemsService:ItemsService
){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.itemsService.get(route.params['id'])
  }
}
