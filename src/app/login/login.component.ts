import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MenuComponent } from '../menu/menu.component';
import { helperComponent } from '../helper.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  token: any;
  refreshToken: any;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private menuComponent: MenuComponent,
    private helperComponent: helperComponent
    ) {
      this.menuComponent.elements[0].style.visibility = "visible";
      this.menuComponent.elements[1].style.visibility = "hidden";
      this.menuComponent.elements[2].style.visibility = "hidden";
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
  }
  this.loading = true;
}

}
