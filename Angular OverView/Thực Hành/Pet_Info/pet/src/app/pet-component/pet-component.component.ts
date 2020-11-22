import {Component, OnInit} from '@angular/core';

export interface Pet {
  name: string;
  image: string;
}

@Component({
  selector: 'app-pet-component',
  templateUrl: './pet-component.component.html',
  styleUrls: ['./pet-component.component.css']
})
export class PetComponentComponent implements OnInit {
  myPet: Pet = {
    name: 'Cậu Vàng',
    image: 'https://i.pinimg.com/originals/70/c6/46/70c6461c88417f44ddb9926577eb3fb4.jpg'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
  update(value: any) {
    this.myPet.name = value;
  }

  // tslint:disable-next-line:typedef
  updateImage(value: any) {
    this.myPet.image = value;
  }
}
