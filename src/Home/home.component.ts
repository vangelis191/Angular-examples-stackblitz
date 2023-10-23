import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router:Router){

  }

  pages = [
    { path:'/async-data', backgroundColor: 'red', title:'Async Data' },
    {path:'/two-way-binding', backgroundColor: 'pink', title:'Two Way Binding' },
    {path:'/parent', backgroundColor: 'green', title:'Parent' },
    {path:'/container-template', backgroundColor: 'lightGreen', title:'Container Template' },
    {path:'/custom-directive', backgroundColor: 'purple', title:'Custom Directive' },
    {path:'/custom-pipe', backgroundColor: 'yellow', title:'Custom Pipe' },
  ];


  public pushToPage(path:string){
    console.log(path)
    this.router.navigate([path]);
  }
}