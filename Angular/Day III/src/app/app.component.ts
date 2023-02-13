import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[CartService]
})
export class AppComponent {
  title = 'shopping_cart_app';
  buttonInfo: string = '';
  name:string = 'Sachin';

  clickListener(evt: Event) {
    this.buttonInfo = 'Clicked => Type ' + (evt.target as HTMLInputElement).type +
      ' Clicked => Value ' + (evt.target as HTMLInputElement).value;
    //alert(this.buttonInfo);
  }

  updateEventListener(args:any){
    alert("Event raised by the Child component with value "+args);
    this.name = args;
  }
}
