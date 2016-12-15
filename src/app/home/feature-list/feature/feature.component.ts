import { Component, OnInit, Input } from '@angular/core';
import { Feature } from './feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() data: Feature;
  private textClass: String;
  constructor() { }

  ngOnInit() {
    this.textClass = this.data.flip ?
    'col-sm-6 col-sm-offset-1 align-right wow fadeInLeft' :
    'col-sm-6 wow fadeInRight';

  }

}
