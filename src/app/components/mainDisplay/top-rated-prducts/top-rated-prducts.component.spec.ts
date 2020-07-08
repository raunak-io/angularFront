import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedPrductsComponent } from './top-rated-prducts.component';

describe('TopRatedPrductsComponent', () => {
  let component: TopRatedPrductsComponent;
  let fixture: ComponentFixture<TopRatedPrductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedPrductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedPrductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
