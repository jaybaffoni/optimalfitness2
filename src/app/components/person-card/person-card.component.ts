import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector : 'app-person-card',
  templateUrl : './person-card.component.html',
  styleUrls : ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() name: string;
  @Input() title: string;
  @Input() bio: string;
  @Input() avatar: string;
  @Input() facebook: string;
  @Input() instagram: string;
  @Input() twitter: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
