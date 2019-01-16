// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../../services/cart.service';
// import { CartItem } from '../../../models/CartItem';
// import { MatTableDataSource } from '@angular/material';
// import { ProductsService } from 'src/app/services/products.service';
// import { Product } from 'src/app/models/Product';
// import { CartIndex } from 'src/app/models/CartIndex';


// @Component({
//   selector: 'app-cart-index',
//   templateUrl: './cart-index.component.html',
//   styleUrls: ['./cart-index.component.css']
// })

// export class CartIndexComponent implements OnInit {
//   columnNames = ['Quantity']
//   dataSource: MatTableDataSource<CartItem>
//   cartProducts: Product[] = [];
//   cartDataSource: CartIndex[] = [];
//   i: number = 0;
//   j: number = 0;
  

//   constructor(private _cartService: CartService, private _productService: ProductsService) { }

//   ngOnInit() {
//     console.log("ngOnInit")
//     this._cartService.getCart().subscribe((cart: CartItem[]) => {
//       this.dataSource = new MatTableDataSource<CartItem>(cart);
//       console.log(this.dataSource)
//       console.log("Cart", cart);
//       cart.forEach(element => {
        
        
//         this._productService.getProduct(element.productEntityId).subscribe((product: Product) => {
//           this.cartDataSource[this.i] = {};
//           this.cartDataSource[this.i].cartEntityId = element.cartEntityId
//           this.cartDataSource[this.i].productEntityId = element.productEntityId
//           this.cartDataSource[this.i].quantity = element.quantity
//           this.cartDataSource[this.i].productName = product.productName;
//           this.cartDataSource[this.i].price = product.price;
//           this.cartDataSource[this.i].description = product.description;
//           console.log(this.cartDataSource[this.i])
//         });
//         this.i += 1;
//         console.log("i:" + this.i)
//       });
//       console.log(this.cartDataSource)
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartIndex } from 'src/app/models/CartIndex';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.css']
})

export class CartIndexComponent implements OnInit {
  columnNames = ['Quantity']
  dataSource: MatTableDataSource<CartIndex>

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this._cartService.getCart().subscribe((cart: CartIndex[]) => {
      this.dataSource = new MatTableDataSource<CartIndex>(cart);
    });
  }
}









