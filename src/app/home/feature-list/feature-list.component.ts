import { Component, OnInit } from '@angular/core';
import { Feature } from './feature/feature.model';
import { FeatureComponent } from './feature/feature.component';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css'],
})
export class FeatureListComponent implements OnInit {

  private features: Feature[];
  constructor() {
    this.features = [];
  }

  ngOnInit() {
    this.features.push(
      new Feature(
        'Experienced and Enthusiastic',
        'Pork belly leberkas cow short ribs capicola pork loin. ' +
        'Doner fatback frankfurter jerky meatball pastrami bacon ' +
        'tail sausage. Turkey fatback ball tip, tri-tip tenderloin ' +
        'drumstick salami strip steak.',
        'assets/img/home/image1.png'
      ),
      new Feature(
        'Built for the Responsive Web',
        'Mollit eiusmod id chuck turducken laboris meatloaf pork loin tenderloin '+
        'swine. Pancetta excepteur fugiat strip steak tri-tip. Swine salami '+
        'eiusmod sint, ex id venison non. Fugiat ea jowl cillum meatloaf.',
        'assets/img/home/image2.png',
        true
      ),
      new Feature(
        'Experienced and Enthusiastic',
        'Ut officia cupidatat anim excepteur fugiat cillum ea occaecat ' +
        'rump pork chop tempor. Ut tenderloin veniam commodo. Shankle ' +
        'aliquip short ribs, chicken eiusmod exercitation shank landjaeger ' +
        'spare ribs corned beef.',
        'assets/img/home/image3.png'
      )
    );
  }

}
