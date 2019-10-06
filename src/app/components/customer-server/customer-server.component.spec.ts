import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServerComponent } from './customer-server.component';

describe('CustomerServerComponent', () => {
  let component: CustomerServerComponent;
  let fixture: ComponentFixture<CustomerServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServerComponent ]
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
