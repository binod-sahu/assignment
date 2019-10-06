import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerService } from './customer-service';
import { HttpClientModule } from '@angular/common/http';
import { mockData, mockApiparam } from '../test/mockData';
import { Customer } from '../model/customer';
import { apiParam } from '../model/param';
import { inject } from '@angular/core/src/di';

describe('CustomerServiceService', () => {
  let service: CustomerService;
  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [CustomerService]
    }).compileComponents();
    service = TestBed.get(CustomerService);
  }));
  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });

  it('be able to retrieve Customer Data from the API bia GET', () => {
    const dummyPosts: Customer = mockData;
    service.getCustomer().subscribe(posts => {
      expect(posts.servers.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });
  });

  it('be able to retrieve Customer filter data', () => {
    const dummyPosts: Customer = mockData;
    const param: apiParam = mockApiparam;
    service.getFilteredCustomerList(param).subscribe(posts => {
      expect(posts.servers[0].location).toEqual('AmsterdamAMS-01');
    });
  });

  it('correctly handles error', () => {
    const spy = spyOn(console, 'log');
    const error: Error = new Error('ERROR');
    service.handleError(error);
  });
});


