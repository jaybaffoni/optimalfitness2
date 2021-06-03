import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'optimal-fitness';

  ngOnInit(): void {
    this.loadScript('https://widgets.mindbodyonline.com/javascripts/healcode.js');
  }

  public loadScript(url: string): void {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
