import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {

  @Input() interests : string = '';
  public firstName : string = '';
  public lastName : string = '';
  public email : string = '';
  public phone : string = '';

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(event) {
    event.stopPropagation();
    let formData: any = new FormData();
    formData.append("First Name", this.firstName);
    formData.append("Last Name", this.lastName);
    formData.append("E-Mail", this.email);
    formData.append("Interests", this.interests);
    formData.append("Phone", this.phone);
    console.log(formData);
    this.http.post('https://script.google.com/macros/s/AKfycbywG3oyLJ24evjY_ba4lqjn3RYK16RBQ9WZbup4gGzijtwpgfFJMBTeADyPw7motW3H/exec', formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
