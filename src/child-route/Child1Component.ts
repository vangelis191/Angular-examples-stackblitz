import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'child1',
  template: `
  <div style="background-color:lightpink">
    <div style="padding: 50px;"> 
      Child 1
    </div>
  </div>
`,
})
export class Child1Component {
  constructor(){

  }

  
}