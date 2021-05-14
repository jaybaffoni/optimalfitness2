import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  public path: string;

  public rgba = `rgba(0, 0, 0, 0)`;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const opacity = Math.min(1.0, (window.pageYOffset / 300));
    this.rgba = `rgba(0, 0, 0, ` + opacity + `)`;
  }

  constructor() {
  }

  ngOnInit(): void {
    let href: string = window.location.href;
    let origin: string = window.location.origin;

    this.path = window.location.href.substr(origin.length + 1);
  }

}
