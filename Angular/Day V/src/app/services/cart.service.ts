import { Injectable } from '@angular/core';
import Product from '../product';
import {Subject} from 'rxjs';
import { SessionStorage } from 'angular-web-storage';

@Injectable({providedIn: 'root'})
export class CartService {
    cart:Product[]=[];//Javascript Object
    @SessionStorage()
    myCart:string='';// JSON String

    //Subject
    private cartSource = new Subject<string>();

    // Broadcaster
    cartBroadcaster = this.cartSource.asObservable();

    constructor() { 
        if(this.myCart){
            this.cart = JSON.parse(this.myCart);
        }
        else{
            this.cart = new Array<Product>();
        }
    }
    addTocartProduct(product:Product):void{
        console.log('Inside Cart Service! '+product.name);
        this.cart = this.cart.concat(product);
        this.myCart = JSON.stringify(this.cart);
        console.log(this.cart);

        // Notify all the subscribers
        this.cartSource.next(this.myCart);
    }
    
    getCartItems():Product[]{
        return this.cart;
    }
}


// import { Injectable } from '@angular/core';
// import Product from '../product';

// @Injectable({providedIn: 'root'})
// export class CartService {
//     cart:Product[]=[];
//     constructor() { 

//     }
//     addTocartProduct(product:Product):void{
//         console.log('Inside Cart Service! '+product.name);
//         this.cart = this.cart.concat(product);
//         console.log(this.cart);
//     }
    
//     getCartItems():Product[]{
//         return this.cart;
//     }
// }