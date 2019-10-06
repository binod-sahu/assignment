import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerSideNavComponent } from './customer-side-nav.component';
import { CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { CustomerService } from 'src/app/services/customer-service';


describe('CustomerSideNavComponent', () => {
  let component: CustomerSideNavComponent;
  let fixture: ComponentFixture<CustomerSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CustomerService,
      ],
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

  it('should create the side nav component', () => {
    expect(component).toBeTruthy();
  });
});
