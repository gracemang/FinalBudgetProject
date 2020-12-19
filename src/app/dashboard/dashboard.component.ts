import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { first } from 'rxjs/operators';
import {DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  budgetId: any;
  monthElement: any;
  yearElement: any;
  public elements: any[];
  loadIndex: any;
  resetFormSubject: Subject<boolean> =new Subject<boolean>();

  constructor(private router: Router,  public menuComponent: MenuComponent,  public DataService: DataService) {
    this.menuComponent.elements[0].style.visibility = "hidden";
    this.menuComponent.elements[1].style.visibility = "visible";
    this.menuComponent.elements[2].style.visibility = "visible";
  }

  title = sessionStorage.getItem('user');
  ngOnInit(): void {
    this.getDataForCharts()
  }

  addNewBudget(){
    this.router.navigate(['/addNewBudget']);

  }

  getDataForCharts() {
    this.monthElement = document.querySelector('#month');
    this.yearElement = document.querySelector('#year');


  }

}
