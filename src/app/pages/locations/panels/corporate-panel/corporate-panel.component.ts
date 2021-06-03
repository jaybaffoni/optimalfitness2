import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'corporate-panel',
  templateUrl: './corporate-panel.component.html',
  styleUrls: ['./corporate-panel.component.scss']
})
export class CorporatePanelComponent implements OnInit {

  public subtitle = 'subtitle';

  constructor() {
  }

  ngOnInit(): void {
  }

}
