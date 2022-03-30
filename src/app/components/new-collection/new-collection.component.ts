import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent implements OnInit {


  public product: { id:number,img:string,title:string,desc:string,price:number }[] = [



{ "id":1,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},

{ "id":2,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},

{ "id":3,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},

{ "id":4,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},

{ "id":5,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},

{ "id":6,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},

];
  constructor() { }

  ngOnInit(): void {
  }

}
