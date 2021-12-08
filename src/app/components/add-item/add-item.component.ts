import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() refresh = new EventEmitter();

  constructor(
    private modelService: NgbModal,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {

  }

  open(tpl: any) {
    this.modelService.open(tpl);
  }

  onClick(ev: any) {
    this.itemsService.add(ev).subscribe(resp => {
      this.refresh.emit();
      this.modelService.dismissAll();
    });
  }
}


