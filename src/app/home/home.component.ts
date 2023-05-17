import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  date=new Date();

  statusOnline:boolean=true;
  
  showHide(statusOnline:boolean){
    this.statusOnline=!this.statusOnline;

  }
  addProduct(pName:any){
    this.products.push({name: pName.value})
  }
  remove(){
    this.products.splice(this.products.length-1)
  }

  products=[
    {name:'Laptop'},
    {name:'Mobile'},
    {name:'TV'},
    {name:'Washing Machine'}
  ]


}
