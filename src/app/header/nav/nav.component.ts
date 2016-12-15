/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from 'app/app.service';

/*
 * Nav Component
 * Site navigation
 */
@Component({
  selector: 'app-nav',
  styleUrls: [
    './nav.component.scss'
  ],
  templateUrl: './nav.component.html'
})
export class NavComponent {
  showSearch: boolean;

  constructor(public appState: AppState) {
    this.showSearch = false;
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  ngOnInit() {
  }

}
