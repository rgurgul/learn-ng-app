import { tap, filter, map } from 'rxjs/operators';
import { GridFieldTypes, ItemsKeys, ItemsFiltersModel } from './../../shared/utils/models';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  data: any[] = [];
  total!: number;
  gConfig: { key?: ItemsKeys, type?: GridFieldTypes, text?: string }[] = [
    { key: 'title' },
    { key: 'price', type: 'input' },
    { key: 'imgSrc', type: 'image' },
    { type: 'button', text: 'more' },
    { type: 'button', text: 'remove' }
  ]

  filters: BehaviorSubject<ItemsFiltersModel> = new BehaviorSubject<ItemsFiltersModel>({
    currentPage: 1,
    itemsPerPage: 5
  })

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) {
    this.filters
      .subscribe((val) => {
        this.fetchItems();
      })
  }

  ngOnInit(): void {

  }

  fetchItems() {
    this.itemsService.fetch(this.filters.value).subscribe(resp => {
      this.data = resp.data;
      this.total = resp.total;
    });
  }

  updateFilters(ev: ItemsFiltersModel) {
    this.filters.next({
      ...this.filters.value,
      ...ev
    })
  }

  actionHandler(ev: { id: string, type: string }) {
    switch (ev.type) {
      case 'remove':
        this.itemsService.remove(ev.id).subscribe(resp => {
          this.fetchItems();
        })
        break;
      case 'more':
        this.router.navigate(['items', ev.id]);
        break;

      default:
        break;
    }
  }

}
