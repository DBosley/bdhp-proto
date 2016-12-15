/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

import { WowJsInit } from './shared/wowjs.init';

import { vendorStyles } from './shared/vendor.styles';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './shared/common.scss',
    './app.component.scss'
  ].concat(vendorStyles),
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  providers: [WowJsInit]
})
export class AppComponent {
  constructor(public appState: AppState, private wowJs: WowJsInit) {
  }

  ngOnInit() {
    this.wowJs.init();
  }

}
