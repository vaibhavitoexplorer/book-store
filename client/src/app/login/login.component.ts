import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
