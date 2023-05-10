import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

    this.createExempleBarChart();
  }

  createBarChart(){
    this.chart = new Chart('myChartBar', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], //nome apresentado no eixo x
        
        datasets: [{
          label: 'Dados 1', //nome do conjunto de dados
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor:"red" 
        },
        {
          label: 'Dados 1',
          data: [10, 17, 5, 7, 4, 7],
          borderWidth: 1,
          backgroundColor:"green"
        },
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      }
    });
  }

  createLineChart(){
    this.chart = new Chart('myChartLine', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Dados 1',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        },
        /* {
          label: 'Dados 2',
          data: [10, 17, 5, 7, 4, 7],
          borderWidth: 1
          
        }, */
        /* {
          label: 'Média',
          data: [10, 10, 10, 10, 10, 10],
          borderWidth: 1,
        }, */
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
          //borderWidth: 1,
          borderColor: 'green', //cor da linha
          backgroundColor:"green", //cor do ponto
          order: 1 //precedência da apresentação do conjunto de dados  
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true //eixo Y começa em 0?
          }
        }
      }
    });
  }


  createExempleBarChart(){
    this.chart = new Chart('myChartExemple', {
      type: 'bar',

      plugins: [ChartDataLabels],

      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'], //nome apresentado no eixo x
        
        datasets: [{
          label: 'Dados 1', //nome do conjunto de dados
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor:"red" 
        },
        {
          label: 'Dados 1',
          data: [10, 17, 5, 7, 4, 7],
          borderWidth: 1,
          backgroundColor:"green"
        },
        {
          label: 'Dados Negativos',
          data: [-10, 7, -5, 0, -3, 12],
          borderWidth: 1,
          backgroundColor:"#c4c4c4"
        }
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },

        plugins: {
          datalabels: {
            color: <any>((context:any,)=>{
              const value = context.dataset.data[context.dataIndex]
              //console.log(context.dataset.data[context.dataIndex]);
              if(value <0){
                return "red"
              }else{
                return
              }
            }),
            

            anchor: 'end',
            align: 'end',
            offset: 10,
            
            formatter: function (value) {
                                               
              if (value == 0) {
                return '--'
              }  
              if (value >= 1000) {
                return Number(value).toLocaleString('pt-BR')

              } else {
                return value
              }
            }
          },

          legend: {
            display: false, //mostra ou não a legenda dos conjuntos de dados acima da tabela
          },

          title: {
            display: true,
            text: `Gastos totais ${(180950 + 15306).toLocaleString('pt-BR')}`,
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            },
          },

          subtitle: {
            display: true,
            text: `(67 mil acima da média do ano; +52%)`,
            padding: {
              bottom: 25,
            },  
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial',
            }
          }

        }
      }
    });
  }

 

}
