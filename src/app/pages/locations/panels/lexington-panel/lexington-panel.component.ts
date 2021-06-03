import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lexington-panel',
  templateUrl: './lexington-panel.component.html',
  styleUrls: ['./lexington-panel.component.scss']
})
export class LexingtonPanelComponent implements OnInit {

  public subtitle = 'Lexington Subtitle';

  constructor() {
  }

  ngOnInit(): void {
  }

}
