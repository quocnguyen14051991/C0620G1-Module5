import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// tslint:disable-next-line:import-spacing
import {Customer} from '../Customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  @Input() listCus: Customer[] = [];
  @Output() onDeleteCustomer = new EventEmitter();
  @Output() onDetailCustomer = new EventEmitter();
  @Output() onEditCustomer = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteCustomer(value: number): void {
    this.onDeleteCustomer.emit(value);
  }

  // @ts-ignore
  detailCustomer(id: number): Customer {
    this.onDetailCustomer.emit(id);
  }

  // @ts-ignore
  editCustomer(id: number): Customer {
    this.onEditCustomer.emit(id);
  }
}
