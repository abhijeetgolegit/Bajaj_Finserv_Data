import { Injectable } from '@angular/core';
import Product from '../product';

@Injectable({providedIn: 'root'})
export class CartService {
    cart:Product[]=[];
    constructor() { 

    }
    addTocartProduct(product:Product):void{
        console.log('Inside Cart Service! '+product.name);
        this.cart = this.cart.concat(product);
        console.log(this.cart);
    }
    
    getCartItems():Product[]{
        return this.cart;
    }
}