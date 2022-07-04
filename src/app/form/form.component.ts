import { Component, OnInit } from '@angular/core';
import { User } from '../common/models/user';
const emptyUser: User = {
  name: '',
  description: '',
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userModel = emptyUser;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.userModel);
  }
}
