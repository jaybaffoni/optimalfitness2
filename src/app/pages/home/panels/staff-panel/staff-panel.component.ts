import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'staff-panel',
  templateUrl: './staff-panel.component.html',
  styleUrls: ['./staff-panel.component.scss']
})
export class StaffPanelComponent implements OnInit {

  public subtitle = 'Please Update the following text: The staff at Optimal Fitness consists of a former Celtic\'s Head Strength and Conditioning Coach, Exercise Specialists, Personal Trainers, and Group Instructors with degrees in Sports Medicine, Sports Management, Kinesiology, Exercise Science, and Health Promotion.';

  constructor() {
  }

  ngOnInit(): void {
  }

}
