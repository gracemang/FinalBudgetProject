import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'appLineChart',
  templateUrl: './LineChart.component.html',
  styleUrls: ['./LineChart.component.scss']
})
export class LineChartComponent {

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
      console.log(this.chartDataService.elements)
      this.fetchChartData();


  }

  fetchChartData(){

    this.chartDataService.elements.forEach(element => {
      this.budget.push(element.budget)
      this.expense.push(element.expense)
      this.label.push(element.expenseName)

    });
    console.log("Inside line component")
  }

  lineChartData: ChartDataSets[] = [
    { data: this.budget, label: 'Budget' },
    { data: this.expense, label: 'Expense' }
  ];

  lineChartLabels: Label[] = this.label;

  lineChartOptions: ChartOptions = {
    responsive: true
  };

  lineChartColors: Color[] = [

    {
      backgroundColor: 'rgba(63,63,191,0.2)',
      borderColor: 'rgba(12,12,38,1)',
    },
    {
      backgroundColor: 'rgba(35,255,72,0.3)',
      borderColor: 'rgba(12,12,38,1)',
    }
  ];

  lineChartLegend = true;

  lineChartType = 'line';

  lineChartPlugins = [];

  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  refreshData() {
    this.lineChartData[0].data = this.budget;
    this.lineChartData[1].data = this.expense;
    this.lineChartLabels = this.label;
  }

}
