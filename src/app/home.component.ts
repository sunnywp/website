import { Component, OnInit} from '@angular/core';
declare var Swiper:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.less']
})

export class HomeComponent implements OnInit {
  	constructor() { 
    }
  	ngOnInit() {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
  	}
}
