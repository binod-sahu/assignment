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
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-customer-side-nav',
  templateUrl: './customer-side-nav.component.html',
  styleUrls: ['./customer-side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerSideNavComponent implements OnInit {
  serverTabledata$: Observable<CustomerService[]> = null;
  myform: FormGroup;
  min1 = 0;
  max1 = 72000;
  step = 250;
  stepRange = [0, 72000];
  serverData: Customer;
  serverTabledata: Servers[];
  HDDs: Hddtype[] = HDDs;
  ramCheckboxContent: checkboxContentType[] = checkboxContent;
  locationDropdown: string | string[];
  ramParam: string;
  apiParams: apiParam;


  constructor(
    public restApi: CustomerService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadCustomer();
    this.myform = new FormGroup({
      range: new FormControl(''),
      ram: new FormControl(''),
      hdd: new FormControl(''),
      location: new FormControl(''),
    });
  }

  loadCustomer() {
    this.restApi.getCustomer().subscribe((data: Customer) => {
      this.serverData = data;
      this.serverTabledata = data.servers;
      this.cd.markForCheck();
      this.locationDropdown = removeDuplicates(this.serverData.servers.map(location => { return location.location }));
    });
  }
  valueChange() {
    this.ramParam = this.ramCheckboxContent.filter(x => x.checked === true).map(x => x.value).join(',');
  }
  onSubmit(UserLogin) {
    this.apiParams = {
      storageMin: this.myform.value.range[0],
      storageMax: this.myform.value.range[1],
      ram: this.ramParam,
      hdd: this.myform.value.hdd,
      location: this.myform.value.location
    }
    this.restApi.getFilteredCustomerList(this.apiParams).subscribe((data: Customer) => {
      this.serverData = data;
      this.serverTabledata = data.servers;
      this.cd.markForCheck();
    });
  }
}