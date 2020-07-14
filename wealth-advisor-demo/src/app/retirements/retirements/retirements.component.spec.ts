import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementsComponent } from './retirements.component';

describe('RetirementsComponent', () => {
  let component: RetirementsComponent;
  let fixture: ComponentFixture<RetirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
