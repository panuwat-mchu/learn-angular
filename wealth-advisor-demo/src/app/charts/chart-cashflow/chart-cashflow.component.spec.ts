import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCashflowComponent } from './chart-cashflow.component';

describe('ChartCashflowComponent', () => {
  let component: ChartCashflowComponent;
  let fixture: ComponentFixture<ChartCashflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCashflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCashflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
