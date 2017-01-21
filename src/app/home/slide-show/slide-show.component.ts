import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  public preloading: boolean = true;
  public startInitAnimations: boolean = false;
  constructor() { }

  ngOnInit() {
    this.preloading = false;
  }

}
