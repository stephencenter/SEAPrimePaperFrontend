import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/CartItem';
import { MatTableDataSource } from '@angular/material';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';
import { CartIndex } from 'src/app/models/CartIndex';


@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.css']
})

export class CartIndexComponent implements OnInit {
  columnNames = ['ProductName', 'Price','Quantity']
  dataSource: MatTableDataSource<CartIndex>
  cartProducts: Product[] = [];
  cartDataSource: CartIndex[] = [];
  i: number = 0;
  j: number = 0;
  

  constructor(private _cartService: CartService, private _productService: ProductsService) { }

  ngOnInit() {
    console.log("ngOnInit")
    this._cartService.getCart().subscribe((cart: CartIndex[]) => {
      this.dataSource = new MatTableDataSource<CartIndex>(cart);
      console.log(this.dataSource)
      console.log("Cart", cart);
    });
  }
}
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../../services/cart.service';
// import { CartIndex } from 'src/app/models/CartIndex';
// import { MatTableDataSource } from '@angular/material';

// @Component({
//   selector: 'app-cart-index',
//   templateUrl: './cart-index.component.html',
//   styleUrls: ['./cart-index.component.css']
// })

// export class CartIndexComponent implements OnInit {
//   columnNames = ['ProductName','Quantity']
//   dataSource: MatTableDataSource<CartIndex>

//   constructor(private _cartService: CartService) { }

//   ngOnInit() {
//     this._cartService.getCart().subscribe((cart: CartIndex[]) => {
//       this.dataSource = new MatTableDataSource<CartIndex>(cart);
//       console.log(this.dataSource)
//     });
//   }
// }









