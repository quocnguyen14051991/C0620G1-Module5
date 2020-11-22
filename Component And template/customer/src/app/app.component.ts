import {Component} from '@angular/core';
import {Customer} from './Customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customer1: Customer = new Customer(1, 'Nguyen Tien Quoc', 20);
  customer2: Customer = new Customer(2, 'Nguyen Văn Tèo', 20);
  customer3: Customer = new Customer(3, 'Huỳnh Thị Giải', 22);
  customer4: Customer = new Customer(4, 'Huỳnh Văn Thoát', 33);
  listCustomer: Customer[] = [this.customer1, this.customer2, this.customer3, this.customer4];
  // customer = {};
   customerDetail: Customer | undefined ;
   customerEdit: Customer | undefined ;
  title = 'customer';

  deleteCustomer(id: number) {
    const indexCus = this.listCustomer.findIndex((value) => value.get_id() === id );
    if (indexCus != -1) {
    this.listCustomer.splice(indexCus, 1);
    }
  }

  detailCus(event : any): any {
    console.log(event);
    // this.customerDetail = this.listCustomer.filter(item => item.get_id() == event)[0];hglkendfkhdslrwacn,mahrr4gesdetret5ju5
    this.customerDetail = this.listCustomer.filter(item => item.get_id() == event)[0];
    console.log(this.customerDetail);
  }

  // @ts-ignore
  editCustomer(event: any): Customer{
      this.customerEdit = this.listCustomer.find((value) => value.get_id() === event);
  }

  editRow(event: any) {
    // @ts-ignore
    this.customerDetail=this.listCustomer.find((value) => value.get_id() === event);
  }
}
