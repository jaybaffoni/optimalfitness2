import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locations-landing-panel',
  templateUrl: './locations-landing-panel.component.html',
  styleUrls: ['./locations-landing-panel.component.scss']
})
export class LocationsLandingPanelComponent implements OnInit {

  subtitle = 'This is the locations landing panel subtitle that needs to be updated';

  constructor() { }

  ngOnInit(): void {
  }

}
