import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

import * as Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-cashflow',
  templateUrl: './chart-cashflow.component.html',
  styleUrls: ['./chart-cashflow.component.scss']
})
export class ChartCashflowComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data;

  @ViewChild('canvasCashflow', { static: false }) canvas: ElementRef<HTMLCanvasElement>;

  private ctx: any;
  private chart: any;

  private options: any = {
    responsive: false,
    aspectRatio: 2,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Age'
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          type: 'linear',
          position: 'left',
          id: 'y-axis-income',
          scaleLabel: {
            display: true,
            labelString: 'Monthly'
          }
        },
        {
          type: 'linear',
          position: 'right',
          id: 'y-axis-saving',
          gridLines: {
            drawOnChartArea: false
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Saving'
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        align: 'top',
        rotation: function (context) {
          if(context.datasetIndex == 0) return 270;
          return 0;
        },
        formatter: function (value, context) {
          if(context.datasetIndex == 0 || context.dataIndex == 20){
            return value ? value.toLocaleString('en-us') : '';
          }
          return '';
        } 
      }
    }
  };

  constructor() { }

  ngOnInit() {
    // this.data = {
    //   ages: ['35', '36', '37', '38', '39', '40', '41'],
    //   incomes: [15, 20, 30, 40, 50, 60, 70],
    //   savings: [20, 30, 40, 100, 78]
    // }
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      this.chart.data.labels = this.data.ages;
      this.chart.data.datasets[0].data = this.data.incomes;
      this.chart.data.datasets[1].data = this.data.savings;
      this.chart.update();
    }
  }

  private initChart() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.data.ages,
        datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: this.data.incomes,
          yAxisID: 'y-axis-income'
        },
        {
          data: this.data.savings,
          type: 'line',
          fill: false,
          yAxisID: 'y-axis-saving'
        }
        ]
      },
      plugins: [ChartDataLabels],
      options: this.options
    });
  }

}
