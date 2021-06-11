import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  @Input() subject: string = '';

  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
