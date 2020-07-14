import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentReturnChartComponent } from './investment-return-chart.component';

describe('InvestmentReturnChartComponent', () => {
  let component: InvestmentReturnChartComponent;
  let fixture: ComponentFixture<InvestmentReturnChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentReturnChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentReturnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
