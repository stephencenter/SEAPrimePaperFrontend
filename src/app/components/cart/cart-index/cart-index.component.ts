import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/CartItem';
import { MatTableDataSource } from '@angular/material';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.css']
})

export class CartIndexComponent implements OnInit {
  columnNames = ['Picture', 'ProductName', 'Quantity', 'Price']
  dataSource: MatTableDataSource<CartItem>
  cartProducts: Product[] = [];
  

  constructor(private _cartService: CartService, private _productService: ProductsService) { }

  ngOnInit() {
    this._cartService.getCart().subscribe((cart: CartItem[]) => {
      this.dataSource = new MatTableDataSource<CartItem>(cart);

      cart.forEach(element => {
        this._productService.getProduct(element.productEntityId).subscribe((product: Product) => {
          this.cartProducts.push(product);
        });
      });

    });
  }
}
