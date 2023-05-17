import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  names: any = [];
  enterB(uname: any) {
    // if({this:names.length>3}{else:this.names.push({name:uname.value})});
    this.names.push({name:uname.value});
    console.log(uname.value);
  }
  remove(){
    this.names.splice(this.names.length-1)
  }
  removeOne(item:any){
    this.names.splice(item,1)
  }
  removeLength(){
    if (this.names.length>3) {
      alert("more than three"); 
    }
  }
 

}
