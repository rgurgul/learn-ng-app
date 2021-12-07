import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() data: any[] = []
  @Input() config: any[] = []
  @Output() onAction = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: string, type: string) {
    this.onAction.emit({ id, type });
  }

}
