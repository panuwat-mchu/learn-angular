import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-chart-return',
  templateUrl: './chart-return.component.html',
  styleUrls: ['./chart-return.component.scss']
})
export class ChartReturnComponent implements OnInit, AfterViewInit {


  @ViewChild('canvasReturn', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
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
      type: 'line',
      data: {
        datasets: [{
          data: this.data.invests,
          fill: false
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
