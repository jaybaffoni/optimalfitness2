import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  @Input() personData: any;
  public imgSrc: string;
  public middleImgSrc: string;
  public coverImgSrc = './assets/images/gym.JPG';

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.personData);
    if (this.personData.avatar) {
      this.imgSrc = './assets/images/headshots/' + this.personData.avatar;
    }
    if(this.personData.middleImg){
      this.middleImgSrc = './assets/images/' + this.personData.middleImg;
    }
    if (this.personData.coverImg){
      this.coverImgSrc = './assets/images/' + this.personData.coverImg;
    }
  }

}
