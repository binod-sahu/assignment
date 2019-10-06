import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerSideNavComponent } from './customer-side-nav.component';
import { CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA } from '@angular/core';

describe('CustomerSideNavComponent', () => {
  let component: CustomerSideNavComponent;
  let fixture: ComponentFixture<CustomerSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSideNavComponent],
      schemas:  [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
