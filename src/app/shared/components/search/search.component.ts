import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {

  @Input() controls!: any[];
  @ViewChild('f') form!: NgForm;
  @Output() action: EventEmitter<any> = new EventEmitter();

  constructor() {

  }
  ngAfterContentInit(): void {

  }
  ngAfterViewInit(): void {
    this.form.valueChanges
      ?.pipe(
        filter((val) => JSON.stringify(val).includes('dupa') ? false : true),
        debounceTime(500)
      )
      .subscribe((val) => {
        this.action.emit(val);
      })
  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }

}
