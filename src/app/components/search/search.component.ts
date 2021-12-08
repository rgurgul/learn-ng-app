import { NgForm } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy, AfterViewInit, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() controls: any;
  @Output() searchChange = new EventEmitter();
  @ViewChild('f') form!: NgForm;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
  }

  ngAfterViewInit(): void {
    this.form.valueChanges?.subscribe((val) => {
      this.searchChange.emit(val);
    })
  }

  ngOnInit(): void {

  }

}
