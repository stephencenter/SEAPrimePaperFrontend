import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/CartItem';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.css']
})

export class CartIndexComponent implements OnInit {
  columnNames = ['Picture', 'ProductName', 'Quantity', 'Price', 'Subtotal/Checkout' ]
  dataSource: MatTableDataSource<CartItem>

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this._cartService.getCart().subscribe((cart: CartItem[]) => {
      this.dataSource = new MatTableDataSource<CartItem>(cart);
    });
  }
}
