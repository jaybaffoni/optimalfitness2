import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector : 'app-person-card',
  templateUrl : './person-card.component.html',
  styleUrls : ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() person: any;
  public url: string;

  constructor() {
  }

  ngOnInit(): void {
    this.url = './assets/images/headshots/' + this.person.avatar;
  }

}
