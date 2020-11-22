import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  @Input() cus: any;
  @Output() onEditRow = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(value: any) {
    this.onEditRow.emit(value);
  }

}
