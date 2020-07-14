import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartReturnComponent } from './chart-return.component';

describe('ChartReturnComponent', () => {
  let component: ChartReturnComponent;
  let fixture: ComponentFixture<ChartReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
