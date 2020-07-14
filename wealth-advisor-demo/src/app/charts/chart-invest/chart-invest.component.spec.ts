import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInvestComponent } from './chart-invest.component';

describe('ChartInvestComponent', () => {
  let component: ChartInvestComponent;
  let fixture: ComponentFixture<ChartInvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartInvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
