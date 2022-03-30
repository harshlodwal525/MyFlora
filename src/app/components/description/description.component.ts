import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  public desc: { id:number,icon:string,title:string,desc:string}[] = [

    { "id":1,"icon":"fas fa-shipping-fast","title":"World Shipment ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!"},
    { "id":2,"icon":"fas fa-credit-card","title":"Fast & Secure Payment ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!"},
    { "id":3,"icon":"fas fa-headset","title":"24/7 Customer Support ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
