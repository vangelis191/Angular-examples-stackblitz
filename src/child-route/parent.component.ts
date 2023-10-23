import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Child1Component } from './Child1Component';
import { Child3Component } from './Child3.component';


@Component({
  selector: 'parent',
  template: `
  <div>
    Parent Component
    <br>
    <br>
    <button [routerLink]="['./child1']">Child 1</button>
    <button [routerLink]="['./child2']">Child 2</button>
    <br>
    <br>
    <button (click)=increment()>Increment Number </button>
    <child3> </child3>
    <div style="margin-bottom: 10px;"> </div>
  </div>
  <router-outlet></router-outlet>
`,
})
export class ParentComponent {
  @ViewChild(Child3Component, {static:true}) child?:Child3Component
  constructor(){

  }
  increment(){
    this.child?.increment()
  }
 
}