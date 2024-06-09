import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit, OnChanges {
  @Input() product : Product | undefined;
  editProductForm !: FormGroup;
  categories : Category[] = [];

  constructor(private productService: ProductService, private form : FormBuilder, private categoryService : CategoryService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.updateForm();
    }
  }

  createForm() {
    this.editProductForm = this.form.group({
      nameProduct: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      image: ['', Validators.required],
      category: ['', Validators.required],
      enabled: [true]
    });
  }

  updateForm() {
    if(this.product) {
      this.editProductForm.patchValue({
        nameProduct: this.product?.nameProduct,
        description: this.product?.description,
        price: this.product?.price,
        image: this.product?.image,
        category: this.product?.category.nameCategory,
        enabled: this.product?.enabled
      });
    }
  }

  submit() {
    if (this.editProductForm.valid && this.product?.idProduct) {
      const updateProduct : Product = {
        ...this.product,
        ...this.editProductForm.value,
        category: { ...this.product?.category, nameCategory: this.editProductForm.value.category }
      }
      this.productService.updateProduct(this.product?.idProduct, updateProduct).subscribe(
        (product) => {
          alert('Product updated successfully');
          console.log(product);
        },
        (error) => {
          alert('An error occurred while updating the product')
          console.log(error);
        }
      )
    }
  }
}


