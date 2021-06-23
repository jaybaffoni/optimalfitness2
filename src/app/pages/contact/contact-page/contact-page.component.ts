import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  public interests : string = '';

  constructor(private router : Router) {
    console.log(this.router.getCurrentNavigation().extras.state);
    if(this.router.getCurrentNavigation().extras.state) this.interests = this.router.getCurrentNavigation().extras.state.interests;
  }

  ngOnInit(): void {
  }

}
