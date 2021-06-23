import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

  contactUs(contactInfo): void {
    this.router.navigateByUrl('/contact', { state: contactInfo });
  }
}
