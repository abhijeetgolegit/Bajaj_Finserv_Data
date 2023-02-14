import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/cartdetails/cartdetails.component';
import { DemoDirectiveComponent } from './components/demo_custom_directives/demodirective.component';
import { GreetComponent } from './components/greet/greet.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes:Routes = [
    {
        path:'',
        //component:LoginComponent
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'greet',
        component:GreetComponent
    },
    {
        path:'products',
        component:ProductsComponent,
        children:[{
            path:':id',
            component:ProductDetailsComponent
        }]
    },
    {
        path:'cartdetails',
        component:CartDetailsComponent
    },
    {
        path:'directives',
        component:DemoDirectiveComponent    
    },
    {
        path:'profile',
        component:ProfileComponent   
    },
    {
        path:'**',
        component:PageNotFoundComponent   
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
