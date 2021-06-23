import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

  contactUs(contactInfo): void {
    this.router.navigateByUrl('/contact', { state: contactInfo });
  }

}
