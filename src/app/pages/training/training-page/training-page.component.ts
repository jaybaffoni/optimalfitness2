import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

  contactUs(contactInfo): void {
    this.router.navigateByUrl('/contact', { state: contactInfo });
  }

}
