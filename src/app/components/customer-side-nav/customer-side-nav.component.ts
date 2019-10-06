import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from 'src/app/services/customer-service';
import {
  Customer,
  HDDs,
  Hddtype,
  checkboxContentType,
  checkboxContent, Servers
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
  serverTabledata: Servers[];
  HDDs: Hddtype[] = HDDs;
  ramCheckboxContent: checkboxContentType[] = checkboxContent;
  locationDropdown: string | string[];

  constructor(
    public restApi: CustomerService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadCustomer();
  }

  loadCustomer() {
    this.restApi.getCustomer().subscribe((data: Customer) => {
      this.serverData = data;
      this.serverTabledata = data.servers;
      this.cd.markForCheck();
      this.locationDropdown = removeDuplicates(this.serverData.servers.map(location => { return location.location }));
    });
  }
  rangeChanged(event) {
    console.log(event[0]);
    console.log(event[1]);
  }
  valueChange() {
    console.log(this.ramCheckboxContent.filter(x => x.checked === true).map(x => x.value).join(','));
  }
  locationSelection(event){
    console.error(event.value); 
   }
  hddSelection(event){
    console.error(event.value); 
   }

}
