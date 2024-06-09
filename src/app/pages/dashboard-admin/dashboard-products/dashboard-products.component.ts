import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrl: './dashboard-products.component.css'
})
export class DashboardProductsComponent implements OnInit{

  products : Product[] = [];
  selectedProduct : Product | undefined;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

}
