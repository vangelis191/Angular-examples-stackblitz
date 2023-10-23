import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'child3',
  template: `
  <div style="background-color:lightpink">
    <div style="padding: 10px;"> 
    Increment Number from CHild 3 
    <br> 
    Transfer Data from Child 3 to Parent Using @ViewChild
    <h2>{{number}}</h2>
    </div>
  </div>
`,
})
export class Child3Component {
  constructor(){

  }
  number = 0
  increment(){
    this.number++;
  }
  
}