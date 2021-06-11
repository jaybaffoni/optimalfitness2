import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'beach-house-panel',
  templateUrl : './beach-house-panel.component.html',
  styleUrls : ['./beach-house-panel.component.scss']
})
export class BeachHousePanelComponent implements OnInit {

  public images = [
    {path: './assets/images/beach_house1.jpg'},
    {path: './assets/images/natick beach house.JPG'},
    // {path: './assets/images/bh Cam Bear crawl DB drag.HEIC'},
    // {path: './assets/images/Beach House Entrance.HEIC'},
    {path: './assets/images/Beach House Courts 2.jpg'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
