import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductCrudOperationsComponent } from './admin-product-crud-operations.component';

describe('AdminProductCrudOperationsComponent', () => {
  let component: AdminProductCrudOperationsComponent;
  let fixture: ComponentFixture<AdminProductCrudOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductCrudOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductCrudOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
