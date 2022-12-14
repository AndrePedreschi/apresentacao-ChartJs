import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {
  chart:any;

  constructor() { }

  ngOnInit(): void {
    this.createBarChart();
      
    this.createLineChart();

    this.createComboChart();
  }

  createBarChart(){
    this.chart = new Chart('myChartBar', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Dados 1',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor:"red"

        },
        {
          label: 'Dados 1',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor:"green"
        }
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createLineChart(){
    this.chart = new Chart('myChartLine', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        },]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
 
  createComboChart(){
    this.chart = new Chart('myChartCombo', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Dados 1',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor:"red",
          order: 2
        },
        {
          type:'line',
          label: 'Dados 2',
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'green',
          backgroundColor:"green",
          order: 1
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
 

}
