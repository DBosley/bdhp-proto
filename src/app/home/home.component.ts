import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { XLarge } from './x-large';

import { Service } from './service/service.model';
import { CallToAction } from './call-to-action/call-to-action.model';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public localState = { value: '' };

  private services: Service[];
  private callToAction: CallToAction;

  // TypeScript public modifiers
  constructor(public appState: AppState) {
    this.services = [];
  }

  ngOnInit() {
    this.services.push(
      new Service(
        'Incredibly Responsive',
        'Ground round tenderloin flank shank ribeye. Hamkevin meatball swine. ' +
        'Cow shankle beef sirloin chicken ground round.',
        'assets/img/home/icon1.png'),
      new Service(
        'Superior Typography',
        'Hamburger ribeye drumstick turkey, strip steak sausage ground round ' +
        'shank pastrami beef brisket pancetta venison.',
        'assets/img/home/icon2.png'
      ),
      new Service(
        'Swift Page Builder',
        'Venison tongue, salami corned beef ball tip meatloaf bacon. Fatback pork ' +
        'belly bresaola tenderloin bone pork kevin shankle.',
        'assets/img/home/icon3.png'
      ));

    this.callToAction = new CallToAction(
      'Triangle Corporate Template',
      'A responsive, retina-ready & wide multipurpose template.',
      '#', 'TAKE THE TOUR');
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
