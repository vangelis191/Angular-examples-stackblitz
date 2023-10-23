import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { map, Observable, switchMap, timer } from 'rxjs';

import {DummyDataService} from '../dummy-data.service'

@Component({
  selector: 'async-data',
  templateUrl: './async-data.component.html'
})
export class AsyncDataComponent implements OnInit {
  public user$ :any
  public productsAsync$:Observable<any>;
  public products$:Observable<any>;

  constructor(
    private data:DummyDataService
  ) {}

 
  ngOnInit(): void {
 
     this.products$ = this.data.get().pipe(
      map((res:any) => res.products)
    )
    this.productsAsync$ = timer(3000) 
    .pipe(
      switchMap(() => this.data.get()), 
      map((res: any) => res.products)
    )

    
  }
}