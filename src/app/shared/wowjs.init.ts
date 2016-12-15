import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as wowjs from 'wowjs';

@Injectable()
export class WowJsInit {
    constructor(private router: Router) { }

    public init() {
        let wow = new wowjs.WOW();
        wow.init();
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                wow.sync();
            }
        });
    }
}