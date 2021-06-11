import { Component, Input, OnInit, Output } from '@angular/core';
import {  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() showPopup: boolean = false;
  @Output() closePopup: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeWindow(): void {
    this.closePopup.emit();
  }

}
