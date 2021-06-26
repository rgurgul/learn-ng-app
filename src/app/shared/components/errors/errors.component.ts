import { ValidationErrors } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  @Input() errors?: ValidationErrors | null;

  constructor() { }

  ngOnInit(): void {
  }

}
