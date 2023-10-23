import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'child2',
  template: `
  <div style="background-color:lightcoral">
  <div style="padding: 50px;">  Child Component 2 </div>
  </div>
`,
})
export class Child2Component {
  constructor(){

  }

  
}