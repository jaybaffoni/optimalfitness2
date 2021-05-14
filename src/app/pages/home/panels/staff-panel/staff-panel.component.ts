import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'staff-panel',
  templateUrl: './staff-panel.component.html',
  styleUrls: ['./staff-panel.component.scss']
})
export class StaffPanelComponent implements OnInit {

  public subtitle = 'Staff Subtitle';

  constructor() {
  }

  ngOnInit(): void {
  }

}
