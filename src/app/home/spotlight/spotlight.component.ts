import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Spotlight } from './spotlight.model';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss'],
})
export class SpotlightComponent implements OnInit {

  @ViewChild('viewcontainer')
  private viewcontainer: ElementRef;
  private spotlight: Spotlight = new Spotlight();
  constructor() {
    this.spotlight.title = 'Happy Clients';
    this.spotlight.html = '<p>Sed do eiusmod tempor incididunt ' +
      'ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud</p>';
    this.spotlight.largeImageUrl = 'assets/img/home/clients.png';
    this.spotlight.imageUrls.push(
      'assets/img/home/client1.png',
      'assets/img/home/client2.png',
      'assets/img/home/client3.png',
      'assets/img/home/client4.png',
      'assets/img/home/client5.png',
      'assets/img/home/client6.png',
    );
  }

  public ngOnInit() {
    this.viewcontainer.nativeElement.innerHTML = this.spotlight.html;
  }

}
