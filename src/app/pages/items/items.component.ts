import { GridFieldTypes, ItemsKeys } from './../../shared/utils/models';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.itemsService.fetch().subscribe(resp => {
      this.data = resp.data;
      this.total = resp.total;
    });
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
