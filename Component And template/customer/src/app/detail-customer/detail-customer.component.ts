import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../Customer';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {

  @Input() public cus: any;
  ngOnInit(): void {
  }

}
