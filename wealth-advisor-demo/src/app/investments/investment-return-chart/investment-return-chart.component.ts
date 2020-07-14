import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-investment-return-chart',
  templateUrl: './investment-return-chart.component.html',
  styleUrls: ['./investment-return-chart.component.scss']
})
export class InvestmentReturnChartComponent implements OnChanges, AfterViewInit {

  @Input() data;

  @ViewChild('canvasReturn', { static: false }) canvas: ElementRef<HTMLCanvasElement>;

  private ctx: any;
  private chart: any;

  private options: any = {
    responsive: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      this.chart.data.datasets[0].data = this.data.returns;
      this.chart.data.labels = this.data.labels;
      this.chart.update();
    }
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          data: this.data.returns,
          borderColor: 'rgba(255, 216, 109, .5)',
          borderWidth: 2,
          lineTension: 0,
          fill: false
        }],
        labels: this.data.labels
      },
      options: this.options
    });
  }

}
