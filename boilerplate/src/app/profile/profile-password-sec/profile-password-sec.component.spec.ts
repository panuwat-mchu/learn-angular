import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePasswordSecComponent } from './profile-password-sec.component';

describe('ProfilePasswordSecComponent', () => {
  let component: ProfilePasswordSecComponent;
  let fixture: ComponentFixture<ProfilePasswordSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePasswordSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePasswordSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
