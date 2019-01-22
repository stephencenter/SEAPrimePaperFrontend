import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';
import { MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {
  columnNames = ['ProductName', 'Description', 'Price', 'details', 'edit', 'delete' ]
  dataSource: MatTableDataSource<Product>
  role: string

  constructor(private _productService: ProductsService, private _authService: AuthService ) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) => {
      this.dataSource = new MatTableDataSource<Product>(products);
      console.log(this.dataSource)
      this.role = this._authService.currentRole()
      console.log(this.role)
    }); 
  }
}