import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locations-panel',
  templateUrl: './locations-panel.component.html',
  styleUrls: ['./locations-panel.component.scss']
})
export class LocationsPanelComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
  }

}
