import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(public router: Router, private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.signUpForm.controls; }

  register() {
    const signUp = {
      username: this.f.username.value,
      password: this.f.password.value
    };
  }

}
