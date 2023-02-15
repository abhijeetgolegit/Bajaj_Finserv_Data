import { Component } from '@angular/core';
import Product from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[];
  isAdmin:boolean;
  constructor(private productsService:ProductsService) {
    this.products = this.productsService.products;
    this.isAdmin = true;
  }

  showDetails(product:Product){
    alert(product.category+' '+product.name+' Rs '+product.price+'/-');
  }

  // doSearch(event:Event){
  //   let searchStr:string = (event.target as HTMLInputElement).value;
  //   let prodNames:string[]=[];
  //   for(let i in this.products){
  //     if(this.products[i].name.toLowerCase().startsWith(searchStr.toLowerCase())){
  //         prodNames.push(this.products[i].name);
  //     }
  //   }
  //   alert(prodNames);
  // }

  doSearch(searchStr:string){
    let prodNames:string[]=[];
    for(let i in this.products){
      if(this.products[i].name.toLowerCase().startsWith(searchStr.toLowerCase())){
          prodNames.push(this.products[i].name);
      }
    }
    alert(prodNames);
  }

}
