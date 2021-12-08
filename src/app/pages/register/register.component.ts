import { CustomValidators } from './../../shared/utils/custom-validators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.email
    ]),
    birthDate: new FormControl(null, [
      Validators.required,
      CustomValidators.shouldBePassed
    ]),
    hobbies: new FormGroup({
      tv: new FormControl(),
      yt: new FormControl(),
      cda: new FormControl()
    }, CustomValidators.atLeaseOneShouldBeSelected),

    passwordGroup: new FormGroup({
      password: new FormControl(),
      passwordConfirm: new FormControl()
    }, CustomValidators.theSame)
  })

  constructor() { }

  track(id: number, item: any) {
    return item.key;
  }

  ngOnInit(): void {
  }

}
