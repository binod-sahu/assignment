import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServerEmptyComponent } from './customer-server-empty.component';

describe('CustomerServerEmptyComponent', () => {
  let component: CustomerServerEmptyComponent;
  let fixture: ComponentFixture<CustomerServerEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServerEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerServerEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the server empty component', () => {
    expect(component).toBeTruthy();
  });
});
