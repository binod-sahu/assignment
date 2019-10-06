import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerServerComponent } from './customer-server.component';
import { CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA } from '@angular/core';

describe('CustomerServerComponent', () => {
  let component: CustomerServerComponent;
  let fixture: ComponentFixture<CustomerServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServerComponent ],
      schemas:  [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
