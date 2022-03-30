import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public product: { id:number,img:string,title:string }[] = [



    { "id":1,"img":`https://cdn.shopify.com/s/files/1/0261/8900/4880/files/18_01_640x640.jpg?v=1641888190`,"title":"CLOTHS "},
    { "id":2,"img":`https://cdn.shopify.com/s/files/1/0261/8900/4880/files/18_01_640x640.jpg?v=1641888190`,"title":"WATCHES "},
    { "id":3,"img":`https://cdn.shopify.com/s/files/1/0261/8900/4880/files/18_01_640x640.jpg?v=1641888190`,"title":"HANDBAGS"},
    
   
    ];
  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
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
        items: 1
      }
    },
    nav: true
  }
}
