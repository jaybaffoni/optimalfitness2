import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-panel',
  templateUrl: './title-panel.component.html',
  styleUrls: ['./title-panel.component.scss']
})
export class TitlePanelComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() background: string;
  @Input() dark: boolean;
  @Input() buttonLink: string;
  @Input() buttonText = 'Learn More';

  public formattedBg = '';

  constructor() {
  }

  ngOnInit(): void {
    if (this.background) {
      this.formattedBg = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${this.background}')`;
    }
  }

}
