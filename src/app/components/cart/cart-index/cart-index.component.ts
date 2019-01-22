import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { MatTableDataSource } from '@angular/material';
import { ProductsService } from 'src/app/services/products.service';
import { CartIndex } from 'src/app/models/CartIndex';
import { CartEdit } from 'src/app/models/CartEdit';

@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.css']
})

export class CartIndexComponent implements OnInit {
  columnNames = ['ProductName', 'Price','Quantity', 'Decrement', 'Increment', 'Delete']
  dataSource: MatTableDataSource<CartIndex>
  subtotal: number
  
  constructor(private _cartService: CartService, private _productService: ProductsService) { }

  ngOnInit() {
    this._cartService.getCart().subscribe((cart: CartIndex[]) => {
      this.subtotal = cart[0].subtotal;
      this.dataSource = new MatTableDataSource<CartIndex>(cart);
    });
  }

  onDelete(cart_id: number){
    console.log("onDelete");
    this._cartService.deleteCart(cart_id).subscribe();
  }

  onEdit(cart_id: number, new_quantity: number) {
    console.log("onEdit");

    var cartEditItem : CartEdit = {
      cartEntityId: cart_id,
      quantity: new_quantity,
    }

    this._cartService.editQuantity(cartEditItem).subscribe( x => {
      
    });
  }
}