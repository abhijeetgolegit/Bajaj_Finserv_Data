import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import {HttpClientModule} from'@angular/common/http';

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
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddcontentDirective } from './directives/addcontent.directive';
import { DemoDirectiveComponent } from './components/demo_custom_directives/demodirective.component';
import { HighlightDirective } from './directives/highlight.directive';
import { IsAuthorizedDirective } from './directives/is-authorized.directive';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './components/productdetails/productdetails.component';
import { DemoPipesComponent } from './components/demo-pipes/demo-pipes.component';
import { CaptionPipe } from './pipes/caption.pipe';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import { HookComponent } from './components/lifecycle-hooks/hook.component';
import { HookChildComponent } from './components/lifecycle-hooks/hook-child.component';
import { UsersComponent } from './components/users/users.component';
import { TemplateDrivenFormComponent } from './components/demo_template_driven/demo-template-driven.component';
import { ReactiveFormComponent } from './components/demo-reactive-form/demo-reactive-form.component';
import { ValidationFormComponent } from './components/demo-reactive-form-validations/demo-reactive-form-validations.component';


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
    CartDetailsComponent,
    ProfileComponent,
    WelcomeComponent,
    AddcontentDirective,
    DemoDirectiveComponent,
    HighlightDirective,
    IsAuthorizedDirective,
    PageNotFoundComponent,
    ProductDetailsComponent,
    DemoPipesComponent,
    CaptionPipe,
    MyfilterPipe,
    HookComponent,
    HookChildComponent,
    UsersComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ValidationFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
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
