import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementEditComponent } from './retirement-edit.component';

describe('RetirementEditComponent', () => {
  let component: RetirementEditComponent;
  let fixture: ComponentFixture<RetirementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
