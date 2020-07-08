import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateMeComponent } from './user-update-me.component';

describe('UserUpdateMeComponent', () => {
  let component: UserUpdateMeComponent;
  let fixture: ComponentFixture<UserUpdateMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdateMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
