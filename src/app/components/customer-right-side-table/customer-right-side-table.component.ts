import { Component, OnInit, ViewChild, Input, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
// import { PeriodicElement } from '../customer-side-nav/customer-side-nav.component';
import {
  Servers
} from 'src/app/model/customer';

@Component({
  selector: 'app-customer-right-side-table',
  templateUrl: './customer-right-side-table.component.html',
  styleUrls: ['./customer-right-side-table.component.scss']
})
export class CustomerRightSideTableComponent implements OnInit, OnChanges {
  @Input() serverTabledata: Servers[] = null;
  displayedColumns: string[] = ['model', 'ram', 'hdd', 'location', 'price'];
  dataSource: MatTableDataSource<Servers> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.serverTabledata);
    this.dataSource.paginator = this.paginator;
    this.cd.markForCheck();
  }
}
