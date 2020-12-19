import { Component, OnInit } from '@angular/core';
import { helperComponent } from '../helper.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public elements: any[];

  constructor(public helperComponent: helperComponent) {
    this.elements =[document.getElementById('login'),document.getElementById('logout'),document.getElementById('dashboard')]
    this.helperComponent.data = this.elements ;
    console.log(helperComponent.data)
  }

  ngOnInit(): void {
  }

}
