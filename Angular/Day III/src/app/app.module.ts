import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetComponent } from './components/greet/greet.component';
import { HelloComponent } from './components/hello/hello.component';
import HiComponent from './components/hi/hi.component';
import { MenuComponent } from './components/menu/menu.component';
import { DemoStructuralDirectiveComponent } from './components/demo-structural-directive/demo-structural-directive.component';
import { SharedModule } from 'src/shared/shared.module';
import { MoreAttrDirectivesComponent } from './components/more-attr-directives/more-attr-directives.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { PersonListComponent } from './components/personslist/personslist.component';
import { AddToCartComponent } from './components/addtocart/addtocart.component';
import { CartDetailsComponent } from './components/cartdetails/cartdetails.component';
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    GreetComponent,
    MenuComponent,
    DemoStructuralDirectiveComponent,
    MoreAttrDirectivesComponent,
    ProductsComponent,
    LoginComponent,
    PersonListComponent,
    AddToCartComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule
  ],
  //providers: [CartService],
  bootstrap: [AppComponent]
  // Multiple Bootstrap Components
  // bootstrap: [HelloComponent,HiComponent]
})
export class AppModule { }

// //-------------- Manual Bootstrap ---------

// import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './components/hello/hello.component';
// import { HiComponent } from './components/hi/hi.component';
// import { GreetComponent } from './components/greet/greet.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HelloComponent,
//     HiComponent,
//     GreetComponent
//   ],
//   imports: [
//     BrowserModule
//   ]
// })
// // Starting  up the Angular application manually, gives you more
// // control over how you initialize your application.

// export class AppModule implements DoBootstrap {

//   ngDoBootstrap(appRef: ApplicationRef): void {
//     let condition = false;

//     const appDiv = document.querySelector('#appDiv');

//     if (condition){
//       const helloTag = document.createElement('app-hello');
//       appDiv?.appendChild(helloTag);
//       appRef.bootstrap(HelloComponent);
//     }
//     else{
//       const hiTag = document.createElement('app-hi');
//       appDiv?.appendChild(hiTag);
//       appRef.bootstrap(HiComponent);

//       const greetTag = document.createElement('app-greet');
//       appDiv?.appendChild(greetTag);
//       appRef.bootstrap(GreetComponent);
//     }
//   }
// }
