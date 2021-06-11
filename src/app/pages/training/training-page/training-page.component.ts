import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-training-page',
  templateUrl : './training-page.component.html',
  styleUrls : ['./training-page.component.scss']
})
export class TrainingPageComponent implements OnInit {

  public ptImages = [
    {path : './assets/images/lexington-workout.jpg'},
    {path : './assets/images/lexington.JPG'},
    {path : './assets/images/sunrise.jpg'}
  ];

  public scImages = [
    {path : './assets/images/lexington-workout.jpg'},
    {path : './assets/images/lexington.JPG'},
    {path : './assets/images/sunrise.jpg'}
  ];

  public acImages = [
    {path : './assets/images/lexington-workout.jpg'},
    {path : './assets/images/lexington.JPG'},
    {path : './assets/images/sunrise.jpg'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
