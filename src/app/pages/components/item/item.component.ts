import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: any;

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.data
      .pipe(
        map((data) => data.item),
       // withLatestFrom(this.router.params)
      )
      .subscribe((data) => {
        this.item = data;
      })
  }

}
