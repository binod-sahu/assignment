import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerRightSideTableComponent } from './customer-right-side-table.component';
import { CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

describe('CustomerRightSideTableComponent', () => {
  let component: CustomerRightSideTableComponent;
  let fixture: ComponentFixture<CustomerRightSideTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule
      ],
      declarations: [ CustomerRightSideTableComponent ],
      schemas:  [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRightSideTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the table component', () => {
    expect(component).toBeTruthy();
  });
});
