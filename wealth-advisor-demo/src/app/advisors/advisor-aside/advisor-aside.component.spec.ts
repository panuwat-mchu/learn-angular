import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorAsideComponent } from './advisor-aside.component';

describe('AdvisorAsideComponent', () => {
  let component: AdvisorAsideComponent;
  let fixture: ComponentFixture<AdvisorAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
