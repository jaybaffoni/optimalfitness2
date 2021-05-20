import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locations-panel',
  templateUrl: './locations-panel.component.html',
  styleUrls: ['./locations-panel.component.scss']
})
export class LocationsPanelComponent implements OnInit {

  public imageUrlArray = ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'];

  constructor() { }

  ngOnInit(): void {
  }

}
