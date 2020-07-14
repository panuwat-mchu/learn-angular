import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-chart-expense',
  templateUrl: './chart-expense.component.html',
  styleUrls: ['./chart-expense.component.scss']
})
export class ChartExpenseComponent implements OnChanges {

  @Input() data:any = 0;
  scales:any[] = [15000,25000,50000];
  // data:any = 35;
  // scales:any[] = [15,50,100];
  labels:any[] = ['พอมี','พอเพียง','พอสบาย']

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  getWidth(val:number): number{
    let width = 0;
    let lastScale = this.scales[this.scales.length-1];
    width = val * 100 / lastScale;
    return width*3;
  }

  getLastWidth(){
    let endScale = this.getEndScale();
    return this.getWidth(endScale);
  }

  getDataWidth(){
    let lastScale: number = this.scales[this.scales.length-1];
    if(+this.data > lastScale){
      return this.getWidth(lastScale*1.06);
    } 
    let width = this.getWidth(this.data);
    if(isNaN(width)){
      return 0;
    }
    return width;
  }

  getEndScale(){
    let lastScale = this.scales[this.scales.length-1];
    let endScale = +lastScale + +(lastScale * 0.3);
    return endScale;
  }


}
