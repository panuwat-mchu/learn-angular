import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-investment-portion-chart',
  templateUrl: './investment-portion-chart.component.html',
  styleUrls: ['./investment-portion-chart.component.scss']
})
export class InvestmentPortionChartComponent implements OnChanges, AfterViewInit {

  @Input() data;

  @ViewChild('canvasPortion', { static: false }) canvas: ElementRef<HTMLCanvasElement>;

  private ctx: any;
  private chart: any;

  private options: any = {
    responsive: false,
    legend: {
      display: false
    }
  }

  private backgroundColors: any = {
    BONE:'rgba(20, 42, 53, .5)',
    GOLD:'rgba(255, 76, 76, .5)',
    X1:'rgba(61, 189, 206, .5)',
    X2:'rgba(255, 216, 109, .5)',
    X3:'rgba(243, 243, 247, .5)'
  };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart) {
      this.chart.data.datasets[0].data = this.data.invests;
      this.chart.data.datasets[0].backgroundColor = this.getBackgroundColor(this.data.labels);
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
      type: 'pie',
      data: {
        datasets: [{
          data: this.data.invests,
          backgroundColor: this.getBackgroundColor(this.data.labels)
        }],
        labels: this.data.labels
      },
      options: this.options
    });
  }

  private getBackgroundColor(labels: any[]): any[] {
    return labels.map(label => this.backgroundColors[label]);
  }

}
