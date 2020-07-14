import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSavingComponent } from './chart-saving.component';

describe('ChartSavingComponent', () => {
  let component: ChartSavingComponent;
  let fixture: ComponentFixture<ChartSavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
