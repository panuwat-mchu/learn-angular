import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExpenseComponent } from './chart-expense.component';

describe('ChartExpenseComponent', () => {
  let component: ChartExpenseComponent;
  let fixture: ComponentFixture<ChartExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
