import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { from, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  endpointURL:string = 'http://assignment.ut3.nl:4300/api/servers';
  constructor(private httpClient: HttpClient) { }

  getFilteredCustomerList(searchParams){
      const httpOptions = {
          params: new HttpParams().set("storageMin", searchParams.storageMin)
                                  .set("storageMax", searchParams.storageMax)
                                  .set("ram", searchParams.ram)
                                  .set("hdd", searchParams.hdd)
                                  .set("location", searchParams.location)
      };
      return this.httpClient.get<Customer>(this.endpointURL, httpOptions)
          .pipe(
              retry(1),
              catchError(this.handleError)
          )
  }

  getCustomer(): Observable<Customer> {
      return this.httpClient.get<Customer>(this.endpointURL)
          .pipe(
              retry(1),
              catchError(this.handleError)
          )
  }

  handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }
}
