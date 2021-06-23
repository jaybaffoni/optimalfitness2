import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector : 'beach-house-panel',
  templateUrl : './beach-house-panel.component.html',
  styleUrls : ['./beach-house-panel.component.scss']
})
export class BeachHousePanelComponent implements OnInit {

  public images = [
    {path: './assets/images/beach_house1.jpg'},
    {path: './assets/images/natick beach house.JPG'},
    {path: './assets/images/bh Cam Bear crawl DB drag.jpg'},
    {path: './assets/images/Beach House Entrance.jpg'},
    {path: './assets/images/beachhouse4.jpeg'},
    {path: './assets/images/Beach House Courts 2.jpg'},
  ];

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

  contactUs(contactInfo): void {
    this.router.navigateByUrl('/contact', { state: contactInfo });
  }

}
