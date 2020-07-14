import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import * as Chart from 'chart.js';
import 'chartjs-plugin-doughnutlabel';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-saving',
  templateUrl: './chart-saving.component.html',
  styleUrls: ['./chart-saving.component.scss']
})
export class ChartSavingComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data;

  @ViewChild('canvasSaving', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  
  private ctx: any;
  private chart: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      this.chart.data.datasets[0].data = this.getSavingChartData()
      this.chart.options.plugins.doughnutlabel.labels[2].text = this.data.expense;
      this.chart.update();
    }
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['เงินออม', 'เงินออมเพิ่ม'],
        datasets: [{
          label: '# of Votes',
          data: this.getSavingChartData(),
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)'           
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'         
          ],
          borderWidth: 0
        }]
      },
      plugins: [ChartDataLabels],
      options: {
        responsive: false,
        aspectRatio: 1,
        legend: {
          display: false
        },
        plugins: {
          doughnutlabel: {
            labels: [
              {
                text: 'เงินที่ต้องใช้ทั้งหมด',
                font: {
                  size: '18'
                }
              },
              {
                text: 'หลังเกษียณ',
                font: {
                  size: '18'
                }
              },
              {
                text: this.data.expense,
                font: {
                  size: '18'
                }
              },
              {
                text: 'บาท',
                font: {
                  size: '18'
                }
              }
            ]
          },
          datalabels: {
            formatter: function (value, context) {
              return context.chart.data.labels[context.dataIndex];
            }
          }
        }
      }
    });
  }

  private getSavingChartData(){
    let balance = this.data.saving - this.data.expense;
    if(balance < 0){
      return [this.data.saving, this.data.expense - this.data.saving]
    }
    return [this.data.saving];
  }



}
