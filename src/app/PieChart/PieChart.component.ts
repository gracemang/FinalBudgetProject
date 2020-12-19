import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'appPieChart',
  templateUrl: './PieChart.component.html',
  styleUrls: ['./PieChart.component.scss']
})
export class PieChartComponent {

  @Input() resetFormSubject: Subject<boolean> = new Subject<boolean>();

  budget = new Array()
  expense = new Array()
  label = new Array()

  ngOnInit(){
    this.resetFormSubject.subscribe(response => {
      if(response)
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
    console.log("Inside Pie Chart Component");
  }

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        }
      }
    },
  };

  pieChartLabels: Label[] = this.label;

  pieChartData: number[] = this.expense;

  pieChartDataBudget: number[] = this.budget;

  pieChartType: ChartType = 'pie';

  pieChartLegend = true;

  pieChartPlugins = [];

  pieChartColors = [
    {
      backgroundColor: ['rgba(191,0,0,0.3)', 'rgba(0,191,0,0.3)', 'rgba(0,0,191,0.3)'],
    },
  ];

  refreshData() {
    this.pieChartData = this.expense;
    this.pieChartDataBudget = this.budget;
    this.pieChartLabels = this.label;
  }
}
