import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'two-way-binding',
  templateUrl: './twoWayBinding.component.html'
})
export class TwoWayBindingComponent {
  message: string = '';
  message2: string = '';
  message3: string = '';
  constructor(

  ) {}

  onMessageChange(newValue: string) {
    // Handle the change event here, if needed
    this.message3 = newValue;
  }

}
