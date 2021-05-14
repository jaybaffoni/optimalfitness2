import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about-panel',
  templateUrl: './about-panel.component.html',
  styleUrls: ['./about-panel.component.scss']
})
export class AboutPanelComponent implements OnInit {

  public subtitle = 'As a staff, OFIT looks at every client individually, whether they’re a high school or college athlete, weekend warrior or someone trying to better themselves, and each program is designed and implemented around the individual, their goals and their needs.';

  constructor() {
  }

  ngOnInit(): void {
  }

}
