import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  categories : Category[] = [];
  products : Product[] = [];

  constructor( private categoryService : CategoryService, private productService : ProductService) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    })

    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }


}
