import { Component, OnInit } from '@angular/core';
import { MyProduct } from './myproduct.model';

@Component({
    selector: 'app-hook',
    template: `
    <h1>Hook Component</h1>
    <input type='text' (blur)="handleData($event)"/>

    <h3>Simple Form</h3>
    <p>Product Name:- <input type="text" [(ngModel)]="name" /></p>
    <p>Product Name:- <input type="text" [(ngModel)]="price" /></p>
    <p><button (click)="updateProduct()">Update</button></p>

    <br/>
    <app-hook-child 
        [parentData]=data
        [product]=product>
        <h3 #child>Child Content from Parent!</h3>
    </app-hook-child>
    `
})

export class HookComponent implements OnInit {
    data:string;
    name:string;
    price:number;
    product:MyProduct;
    constructor() {
        this.data = 'red';
        this.name = 'Boat Rockerz';
        this.price = 850;
        this.product = new MyProduct();
     }

     handleData(evt:any){
        this.data = evt.target.value;
     }
    ngOnInit() { }
    updateProduct(){
        // when you give new reference then only child is able to 
        // detect this through ngOnChanges
        // this.product = new MyProduct();
        // or do this change detection using ngDoCheck
        this.product.name = this.name;
        this.product.price = this.price;
    }
}