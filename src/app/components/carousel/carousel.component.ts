import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  public desc: { id:number,icon:string,title:string,desc:string}[] = [

    { "id":1,"icon":"fas fa-shipping-fast","title":"World Shipment ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!"},
    { "id":2,"icon":"fas fa-credit-card","title":"Fast & Secure Payment ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!"},
    { "id":3,"icon":"fas fa-headset","title":"24/7 Customer Support ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!"},
  ]
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
