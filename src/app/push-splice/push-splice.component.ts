import { Component } from '@angular/core';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent {

  now = new Date();
  
  data: any = [];
  onCreateuser(inputData: any) {
    this.data.push({
      name: inputData.value
    })
  }
  onRemoveuser(){
    this.data.splice(this.data.length-1)
  }
  onRemove(item:any){
    this.data.splice(item,1)
  }
  
}