import { Component, OnInit, ViewChild, Input, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
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
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.serverTabledata);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cd.markForCheck();
  }
}