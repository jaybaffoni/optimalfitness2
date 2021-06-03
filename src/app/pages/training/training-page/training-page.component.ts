import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-training-page',
  templateUrl : './training-page.component.html',
  styleUrls : ['./training-page.component.scss']
})
export class TrainingPageComponent implements OnInit {

  public personalSubtitle = 'Personal Training Text';

  public groupSubtitle = 'Small Group Text';

  public sportSubtitle = 'Athlete Group Text';

  public circuitSubtitle = 'Circuit Training Text';

  constructor() {
  }

  ngOnInit(): void {
  }

}
