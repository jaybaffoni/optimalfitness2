import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-landing-panel',
  templateUrl: './training-landing-panel.component.html',
  styleUrls: ['./training-landing-panel.component.scss']
})
export class TrainingLandingPanelComponent implements OnInit {

  subtitle = 'Training page subtitle that needs to be updated';

  constructor() { }

  ngOnInit(): void {
  }

}
