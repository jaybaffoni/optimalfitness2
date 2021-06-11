import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'lexington-panel',
  templateUrl : './lexington-panel.component.html',
  styleUrls : ['./lexington-panel.component.scss']
})
export class LexingtonPanelComponent implements OnInit {

  public images = [
    {path: './assets/images/lexington-workout.jpg'},
    {path: './assets/images/lexingtonathleteRizzo.jpeg'},
    {path: './assets/images/lexingtonpersonaltraining.jpeg'},
    {path: './assets/images/lexingtonyouthathlete.jpeg'},
    {path: './assets/images/lexgintonpersonaltrainingsisters.jpeg'},
    {path: './assets/images/lexingtonathlete.jpeg'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
