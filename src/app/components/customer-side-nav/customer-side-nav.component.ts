import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer-service';
import {
  Customer,
  HDDs,
  Hddtype,
  checkboxContentType,
  checkboxContent
} from 'src/app/model/customer';
import { removeDuplicates } from '../../util/util';

@Component({
  selector: 'app-customer-side-nav',
  templateUrl: './customer-side-nav.component.html',
  styleUrls: ['./customer-side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerSideNavComponent implements OnInit {

  min1 = 0;
  max1 = 72000;
  step = 250;
  stepRange = [0, 72000];
  serverData: Customer;
  HDDs: Hddtype[] = HDDs;
  ramCheckboxContent: checkboxContentType[] = checkboxContent;
  locationDropdown: string | string[];

  constructor(
    public restApi: CustomerService
  ) { }

  ngOnInit() {
    this.loadCustomer();
  }

  loadCustomer() {
    this.restApi.getCustomer().subscribe((data: Customer) => {
      this.serverData = data;
      console.log(this.serverData.servers);
      this.locationDropdown = removeDuplicates(this.serverData.servers.map(location => { return location.location }));
      console.log(this.locationDropdown);
    });
  }
  rangeChanged(event) {
    console.log(event[0]);
    console.log(event[1]);
  }
  valueChange() {
    console.log(this.ramCheckboxContent.filter(x => x.checked === true).map(x => x.name).join(','));
  }
  locationSelection(event){
    console.error(event.value); 
   }
  hddSelection(event){
    console.error(event.value); 
   }

}
