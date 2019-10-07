import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-server-empty',
  templateUrl: './customer-server-empty.component.html',
  styleUrls: ['./customer-server-empty.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerServerEmptyComponent {
  @Input() dataLength: number;
  changeDetection: ChangeDetectionStrategy.OnPush
  constructor() { }
}
