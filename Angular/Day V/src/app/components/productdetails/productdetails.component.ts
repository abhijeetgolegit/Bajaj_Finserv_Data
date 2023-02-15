import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-productdetails',
    template: `
     <h3>Product Details for Product Id {{productId}}</h3>
    <div *ngFor='let product of products'>
        <div *ngIf="product.id === productId">
            <span>{{product.name}}</span>
            <span>{{product.price}}</span>
            <span>{{product.category}}</span>
            <img [src]="product.imgPath" />
        </div>
    </div>
    `, styles: [`
        img{
            width:200px;
            height:200px;
        }
        h3, span{
            color:maroon;
            width:auto;
            margin:10px;
        }
        div{
            font-weight:bold;
            font-style:italic;
        }`]
})

export class ProductDetailsComponent implements OnInit {
    products: Product[];
    productId: number;
    constructor(private productsService: ProductsService,
        private activatedRoute:ActivatedRoute) {
        this.productId = 0;
        this.products = this.productsService.products;
    }

    ngOnInit() { 
        this.activatedRoute.params.subscribe(parameters =>{
            this.productId = parseInt(parameters['id']);
        })
    }
}