/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from 'app/app.service';

/*
 * Footer Component
 */
@Component({
  selector: 'app-footer',
  styleUrls: [
    './footer.component.css'
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor(public appState: AppState) {
  }

  ngOnInit() {
  }

}
