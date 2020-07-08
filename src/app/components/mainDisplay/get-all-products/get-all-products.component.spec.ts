import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProductsComponent } from './get-all-products.component';

describe('GetAllProductsComponent', () => {
  let component: GetAllProductsComponent;
  let fixture: ComponentFixture<GetAllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
