import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'in-home-panel',
  templateUrl: './in-home-panel.component.html',
  styleUrls: ['./in-home-panel.component.scss']
})
export class InHomePanelComponent implements OnInit {

  public subtitle = 'subtitle';

  constructor() {
  }

  ngOnInit(): void {
  }

}
