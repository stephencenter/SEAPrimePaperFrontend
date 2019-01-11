import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  editProductForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _ProductService: ProductsService,
              private _ar: ActivatedRoute,
              private _router: Router) { 

        this._ar.paramMap.subscribe(p => {
          this._ProductService.getProduct(p.get('id')).subscribe((singleProduct: Product) => {
            this.product = singleProduct;
            this.createForm();
          })
        })
              }

  ngOnInit() {
  }
  createForm(){
    this.editProductForm = this._form.group({
      ProductEntityId: new FormControl(this.product.ProductEntityId),
      ProductName: new FormControl(this.product.ProductName),
      Description: new FormControl(this.product.Description),
      Price: new FormControl(this.product.Price)

    });
  }

  onSubmit(form) {
    const updateProduct: Product = {
      ProductEntityId: form.value.ProductEntityId,
      ProductName: form.value.ProductName,
      Description: form.value.Description,
      Price: form.value.Price
    };
    this._ProductService.updateProduct(updateProduct).subscribe(d => {
      this._router.navigate(['/product']);
    });
  }
}
