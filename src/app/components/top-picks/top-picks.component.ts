import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-picks',
  templateUrl: './top-picks.component.html',
  styleUrls: ['./top-picks.component.css']
})
export class TopPicksComponent implements OnInit {

  constructor() { }
  public product: { id:number,img:string,title:string,desc:string,price:number }[] = [



    { "id":1,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},
    
    { "id":2,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},
    
    { "id":3,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},
    
    { "id":4,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},
    
    { "id":5,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},
    
    { "id":6,"img":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFwxvGjw3_GWt7avasO-imXjwNFPtU5-yfg&usqp=CAU;`,"title":"The Coldest Sunset ", "desc":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloremque!","price":2000},
    
    ];
  ngOnInit(): void {
  }

}
