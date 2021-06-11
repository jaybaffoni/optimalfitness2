import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lexington-mb-widget',
  templateUrl: './lexington-mb-widget.component.html',
  styleUrls: ['./lexington-mb-widget.component.scss']
})
export class LexingtonMbWidgetComponent implements OnInit {

  public loaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }

}
