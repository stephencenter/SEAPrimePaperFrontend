import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductsService, private _cartService: CartService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._productService.getProduct(routeData.get('id')).subscribe((singleProduct: Product) => {
        this.product = singleProduct;
      })
    })
  }

  addToCart(Id: string){
    var cartItem: CartItem = {
      productEntityId : Id,
      quantity : 1,
    } 
    this._cartService.addCart(cartItem).subscribe(data => {

    })

  }

}
