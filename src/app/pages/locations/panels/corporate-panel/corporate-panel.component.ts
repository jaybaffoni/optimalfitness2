import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'corporate-panel',
  templateUrl : './corporate-panel.component.html',
  styleUrls : ['./corporate-panel.component.scss']
})
export class CorporatePanelComponent implements OnInit {

  public images = [
    {path : './assets/images/corporate1.JPG'},
    {path : './assets/images/corporate2.jpg'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
