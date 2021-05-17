import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-panel',
  templateUrl: './landing-panel.component.html',
  styleUrls: ['./landing-panel.component.scss']
})
export class LandingPanelComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() background: string;

  public formattedBg = '';

  constructor() {
  }

  ngOnInit(): void {
    if (this.background) {
      this.formattedBg = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.background}')`;
    }
  }

}
