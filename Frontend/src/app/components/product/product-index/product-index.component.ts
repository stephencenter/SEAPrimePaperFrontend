import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {
  columnNames =['ProductName', 'Description', 'Price']
  dataSource: MatTableDataSource<Product>

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((response: any) => {
      console.log(response)
      this.dataSource = new MatTableDataSource<Product>(response);
    });
  }

}
