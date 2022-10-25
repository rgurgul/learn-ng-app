import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GridDataModel, HttpResponseModel, ItemsFiltersModel, ItemsKeys } from 'src/app/shared/utils/models';
import { ItemsService } from '../../services/items.service';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items!: any[];
  total!: number;
  gridConfig: GridDataModel<ItemsKeys>[] = [
    { key: 'title' },
    { key: 'price', type: 'input' },
    { key: 'imgSrc', type: 'image' },
    { type: 'button', text: 'more' },
    { type: 'button', text: 'remove' },
  ]

  filters$: BehaviorSubject<ItemsFiltersModel> = new BehaviorSubject<ItemsFiltersModel>({
    currentPage: 1,
    itemsPerPage: 5
  })

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {


    this.filters$.subscribe((val) => {
      console.log('filters', val);
      this.fetchItems();
    })


  }

  fetchItems() {
    this.itemsService.fetch(this.filters$.value).subscribe((resp: HttpResponseModel) => {
      this.items = resp.data;
      this.total = resp.total;
    });
  }

  addItem() {
    const openedDialog = this.dialog.open(AddItemComponent);
    openedDialog.componentInstance.event.subscribe((xx: any) => {
      this.itemsService.add(xx).subscribe((resp) => {

      })
    })
  }

  filterItems(data: any) {
    this.filters$.next({ ...this.filters$.value, ...data })
  }

  actionHandler({ id, type }: { id: string, type: string }) {
    switch (type) {
      case 'remove':
        this.itemsService.remove(id).subscribe(() => {
          this.fetchItems();
        });
        break;
      case 'more':
        this.router.navigate(['items', id])
        break;
      default:
        break;
    }
  }

}
