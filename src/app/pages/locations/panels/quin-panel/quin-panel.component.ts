import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'quin-panel',
  templateUrl: './quin-panel.component.html',
  styleUrls: ['./quin-panel.component.scss']
})
export class QuinPanelComponent implements OnInit {

  public images = [
      {path: './assets/images/quin1.jpg'},
    {path: './assets/images/quin2.jpg'}
  ];

  public address = '217 Commonwealth Ave, Boston MA 02116';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  contactUs(contactInfo): void {
    this.router.navigateByUrl('/contact', { state: contactInfo });
  }

}
