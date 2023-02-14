import { Component, Input } from '@angular/core';
import Product from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-addtocart',
    template: `
        <button (click)="addProduct()">Add To Cart!</button>
    `,
   // providers:[CartService]
})
export class AddToCartComponent {
    //The @Input() decorator in a child component or directive signifies
    // that the property can receive its value from its parent component.
    @Input()
    selectedProduct:Product;
    constructor(private cartService:CartService) { 
        this.selectedProduct = {} as Product;
    }
    addProduct(){
       console.log('Adding to the cart '+this.selectedProduct.name);
       // Add the product to the cartservice
       this.cartService.addTocartProduct(this.selectedProduct);
    }
}