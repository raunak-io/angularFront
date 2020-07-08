import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductCrudOperationsUpdateOnlyComponent } from './admin-product-crud-operations-update-only.component';

describe('AdminProductCrudOperationsUpdateOnlyComponent', () => {
  let component: AdminProductCrudOperationsUpdateOnlyComponent;
  let fixture: ComponentFixture<AdminProductCrudOperationsUpdateOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductCrudOperationsUpdateOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductCrudOperationsUpdateOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
