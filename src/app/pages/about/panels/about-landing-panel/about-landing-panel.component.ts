import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-landing-panel',
  templateUrl: './about-landing-panel.component.html',
  styleUrls: ['./about-landing-panel.component.scss']
})
export class AboutLandingPanelComponent implements OnInit {

  subtitle="OFit’s owner, Bryan Doo, the former strength and conditioning coach of the Boston Celtics for 15 years,  brings an immense amount of knowledge and experience to our team and to all of our clients. As a staff, OFIT looks at every client individually, whether they’re a high school or college athlete, weekend warrior or someone trying to better themselves, and each program is designed and implemented around the individual, their goals and their needs.  We pride ourselves on taking the time to actually listen to what our clients say and then we use our expertise to create programs that make sense for our clients busy lives.";

  constructor() { }

  ngOnInit(): void {
  }

}
