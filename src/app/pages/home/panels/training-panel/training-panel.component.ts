import {Component, OnInit} from '@angular/core';
import {faVolleyballBall, faDumbbell, faLaptopHouse, faBuilding, faUsers, faStopwatch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'training-panel',
  templateUrl: './training-panel.component.html',
  styleUrls: ['./training-panel.component.scss']
})
export class TrainingPanelComponent implements OnInit {

  public subtitle = 'Optimal Fitness Boston is a unique and privately owned fitness studio offering personal and small group training, strength and conditioning for athletes, corporate wellness programs and group classes. And right now we’re offering all of our usual programs and expertise for our clients in person and on Zoom!';

  volleyball = faVolleyballBall;
  dumbbell = faDumbbell;
  laptop = faLaptopHouse;
  building = faBuilding;
  users = faUsers;
  stopwatch = faStopwatch;

  constructor() {
  }

  ngOnInit(): void {
  }

}
