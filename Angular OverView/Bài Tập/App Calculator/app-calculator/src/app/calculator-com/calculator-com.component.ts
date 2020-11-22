import { Component, OnInit } from '@angular/core';
// export class CalculatorComponent {
//   output: number | undefined;
//   first: number | undefined;
//   second: number | undefined;
//   operator = '+';
//
//   // tslint:disable-next-line:typedef
//   onFirstChange(value: any) {
//     this.first = Number(value);
//   }
//
//   // tslint:disable-next-line:typedef
//   onSecondChange(value: any) {
//     this.second = Number(value);
//   }
//
//   // tslint:disable-next-line:typedef
//   onSelectChange(value: string) {
//     this.operator = value;
//   }
//
//   // tslint:disable-next-line:typedef
//   calculate() {
//     switch (this.operator) {
//       case '+':
//         // @ts-ignore
//         this.output = this.first + this.second;
//         break;
//       case '-':
//         // @ts-ignore
//         this.output = this.first - this.second;
//         break;
//       case '*':
//         // @ts-ignore
//         this.output = this.first * this.second;
//         break;
//       case '/':
//         // @ts-ignore
//         this.output = this.first / this.second;
//         break;
//     }
//   }
// }
@Component({
  selector: 'app-calculator-com',
  templateUrl: './calculator-com.component.html',
  styleUrls: ['./calculator-com.component.css']
})
export class CalculatorComComponent implements OnInit {
  first: any;
  operator: any;
  second: any;
  output: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onFirstChange(value: any) {
    this.first = Number(value);
  }

  // tslint:disable-next-line:typedef
  onSelectChange(value: any) {
    this.operator = String(value);
  }

  // tslint:disable-next-line:typedef
  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }
}
