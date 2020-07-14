import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-chart-invest',
  templateUrl: './chart-invest.component.html',
  styleUrls: ['./chart-invest.component.scss']
})
export class ChartInvestComponent implements OnInit, AfterViewInit {

  @ViewChild('canvasInvest', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: any;
  @Input() data;

  private options: any = {
    responsive: false,
    legend: {
      display: false
    }
  }

  constructor() { }

  ngOnInit() {
    this.data = {
      invests: [54,26,14,6]
    }
  }

  ngAfterViewInit(): void {
    this.initChart();
  }


  private initChart() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    let chart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: this.data.invests
        }],
        labels: [
          'Red',
          'Yellow',
          'Blue'
        ]
      },
      options: this.options
    });
  }

}
