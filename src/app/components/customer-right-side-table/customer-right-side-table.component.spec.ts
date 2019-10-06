import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRightSideTableComponent } from './customer-right-side-table.component';

describe('CustomerRightSideTableComponent', () => {
  let component: CustomerRightSideTableComponent;
  let fixture: ComponentFixture<CustomerRightSideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRightSideTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRightSideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
