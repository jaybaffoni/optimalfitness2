import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'in-home-panel',
  templateUrl: './in-home-panel.component.html',
  styleUrls: ['./in-home-panel.component.scss']
})
export class InHomePanelComponent implements OnInit {

  public images = [
    {path : './assets/images/inhome1.JPG'},
    {path : './assets/images/inhome2.jpg'},
    {path : './assets/images/inhome3.jpg'},
    {path : './assets/images/inhome4.jpg'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
