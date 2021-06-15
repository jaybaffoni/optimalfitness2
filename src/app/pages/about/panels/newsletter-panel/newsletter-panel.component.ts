import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'newsletter-panel',
  templateUrl: './newsletter-panel.component.html',
  styleUrls: ['./newsletter-panel.component.scss']
})
export class NewsletterPanelComponent implements OnInit {

  public message: string = '';
  public subject: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
