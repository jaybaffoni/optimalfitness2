import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home-landing-panel',
  templateUrl: './home-landing-panel.component.html',
  styleUrls: ['./home-landing-panel.component.scss']
})
export class HomeLandingPanelComponent implements OnInit {

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

  contactUs(contactInfo): void {
    this.router.navigateByUrl('/contact', { state: contactInfo });
  }

}
