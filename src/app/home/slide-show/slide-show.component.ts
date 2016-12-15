import { Component, OnInit } from '@angular/core';
import * as masonry from 'masonry-layout';
import * as isotope from 'isotope-layout';

declare var $: any;

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // portfolio filter
    $('.main-slider').addClass('animate-in');
    $('.preloader').remove();
    // End Preloader

    if ($('.masonery_area').length) {
      masonry('.masonery_area');// Masonry
    }

    let $portfolio_selectors = $('.portfolio-filter >li>a');

    if ($portfolio_selectors.length) {

      isotope('.portfolio-items', {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      $portfolio_selectors.on('click', function () {
        $portfolio_selectors.removeClass('active');
        $(this).addClass('active');
        let selector = jQuery(this).attr('data-filter');
        isotope('.portfolio-items', { filter: selector });
        return false;
      });
    }

  }

}
