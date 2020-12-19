import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'appBarChart',
  templateUrl: './BarChart.component.html',
  styleUrls: ['./BarChart.component.scss']
})
export class BarChartComponent {

  @Input() resetFormSubject: Subject<boolean> = new Subject<boolean>();

  budget = new Array()
  expense = new Array()
  label = new Array()

  ngOnInit(){
    this.resetFormSubject.subscribe(response => {
      if(response )
        this.budget = new Array();
        this.expense = new Array();
        this.label = new Array();
        this.fetchChartData();
        this.refreshData();
    })
  }

  constructor(public chartDataService: DataService){
      this.fetchChartData();


  }

  fetchChartData(){

    this.chartDataService.elements.forEach(element => {
      this.budget.push(element.budget)
      this.expense.push(element.expense)
      this.label.push(element.name)

    });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = this.label;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.budget, label: 'Budget' },
    { data: this.expense, label: 'Expense' }
  ];

  refreshData() {
    this.barChartData[0].data = this.budget;
    this.barChartData[1].data = this.expense;
    this.barChartLabels = this.label;
  }

}
