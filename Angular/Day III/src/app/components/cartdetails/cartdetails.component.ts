import { Component, OnInit } from '@angular/core';
import Product from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cartdetails',
    template: `
    <h1>Cart Details!</h1>
    <table border="3px solid black" align="center" float="right">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Product Image</th>
            <th>Category</th>            
        </tr>
        <tr *ngFor="let product of cartProducts, let i=index">
            <td>{{product.id}}</td>
            <td>{{product.name}}</td>
            <td>Rs {{product.price}} /-</td>
            <td><img [src]="product.imgPath" alt='{{product.imgPath}}' /></td>
            <td>{{product.category}}</td>            
        </tr>
    </table>
    <button (click)="getCartData()">Get</button>`,
    styles: [`
            h1 {
                text-align: center;
                    }
            img{
                width:auto;
                height:130px;
            }
            th{
                text-align:center;
                background-color:peachpuff;
                fontWeight:bold;
            }
            tr{
                padding-left:20px;
            }
    `],
  //  providers:[CartService]
})

export class CartDetailsComponent {
    cartProducts: Product[] = [];
    constructor(private cartService:CartService) { }
    getCartData() {
         this.cartProducts = this.cartService.getCartItems();         
        console.log('Cart Details getCartData! '+this.cartProducts[0].name);

    }
}