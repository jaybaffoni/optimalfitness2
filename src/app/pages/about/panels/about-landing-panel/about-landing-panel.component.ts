import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-landing-panel',
  templateUrl: './about-landing-panel.component.html',
  styleUrls: ['./about-landing-panel.component.scss']
})
export class AboutLandingPanelComponent implements OnInit {

  subtitle="Optimal Fitness Boston is a unique and privately owned fitness studio offering personal and small group training, strength and conditioning for athletes, corporate wellness programs and group classes. And right now we’re offering all of our usual programs and expertise for our clients on Zoom!";

  constructor() { }

  ngOnInit(): void {
  }

}
