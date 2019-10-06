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
import { apiParam } from '../../model/param';

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
  minRangeParam: string;
  maxRangeParam: string;
  ramParam:string;
  hddParam:string;
  locationParam:string;
  apiParams: apiParam = {
    storageMin: '0',
    storageMax: '72000',
    ram:'',
    hdd:'',
    location:''
  };

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
    this.minRangeParam = event[0].toString();
    this.maxRangeParam = event[1].toString();
  }
  valueChange() {
    this.ramParam = this.ramCheckboxContent.filter(x => x.checked === true).map(x => x.value).join(',');
    console.log(this.ramParam);
  }
  locationSelection(event){
    this.locationParam = event.value;
    console.error(this.locationParam); 
   }
  hddSelection(event){
    this.hddParam = event.value;
    console.error(this.hddParam); 
   }
}
