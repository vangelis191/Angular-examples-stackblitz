import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'container-template',
  template: `
  <div style="background-color:lightpink">
    <div style="padding: 10px;"> 

    <button (click)="SwitchContent()">Click Me </button>

    <ng-container *ngIf="isClicked; then content else NoContent"></ng-container>

    <ng-template #content>
      Content to be displayed if condition is <b>TRUE</b>
    </ng-template>

    <ng-template #NoContent>
     
    Content to be displayed if condition is <b>FALSE</b>
    </ng-template>
    
  </div>
`,
})
export class ContainerTemplateComponent {

  isClicked = false
   constructor(){

  }

  SwitchContent(){
    this.isClicked = !this.isClicked
  }
}