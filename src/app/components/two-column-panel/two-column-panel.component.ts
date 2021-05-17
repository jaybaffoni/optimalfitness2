import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'two-column-panel',
  templateUrl: './two-column-panel.component.html',
  styleUrls: ['./two-column-panel.component.scss']
})
export class TwoColumnPanelComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() background: string;
  @Input() dark: boolean;
  @Input() buttonLink: string;
  @Input() buttonText = 'Learn More';
  @Input() leftImage = false;

  public formattedBg = '';

  constructor() {
  }

  ngOnInit(): void {
    if (this.background) {
      this.formattedBg = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.background}')`;
    }
  }

}
