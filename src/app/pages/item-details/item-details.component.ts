import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  data: any;

  constructor(
    private router: ActivatedRoute,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    this.itemsService.get(id).subscribe(resp => {
      this.data = resp.data;
    })
  }

}
