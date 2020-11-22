import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changefont',
  templateUrl: './changefont.component.html',
  styleUrls: ['./changefont.component.css']
})
export class ChangefontComponent implements OnInit {

  fontSize = 14;

  constructor() { }

  ngOnInit(): void {
  }

}
