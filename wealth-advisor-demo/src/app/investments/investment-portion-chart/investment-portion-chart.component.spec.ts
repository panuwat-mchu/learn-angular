import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPortionChartComponent } from './investment-portion-chart.component';

describe('InvestmentPortionChartComponent', () => {
  let component: InvestmentPortionChartComponent;
  let fixture: ComponentFixture<InvestmentPortionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentPortionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPortionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
