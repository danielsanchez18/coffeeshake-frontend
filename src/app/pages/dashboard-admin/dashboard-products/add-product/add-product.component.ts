import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  productForm : FormGroup;
  categories : Category[] = [];

  constructor(private form : FormBuilder, private categoryService : CategoryService, private productService : ProductService) {
    this.productForm = this.form.group({
      nameProduct: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      // image: [''],
      image: 'imagen.png',
      category: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  submit() : void {
    if(this.productForm.valid) {
      const product : Product = this.productForm.value;
      // const product : Product = {
      //   ...this.productForm.value,
      //   enabled : true
      // };
      console.log(product);
      this.productService.addProduct(product).subscribe(
        (data) => {
          alert('Producto agregado con éxito');
          console.log(data);
        }, (error) => {
          alert('Ocurrió un error al agregar el producto');
          console.error(error);
        }
      );
    }
  }
}
