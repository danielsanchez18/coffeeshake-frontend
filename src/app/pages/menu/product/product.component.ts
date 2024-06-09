import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products : Product[] = [];
  nameCategory : string = '';

  constructor(private route : ActivatedRoute, private productService : ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nameCategory = params['nameCategory'];
      this.loadProducts();
    })
  }

  loadProducts() : void {
    this.productService.getProductsByCategory(this.nameCategory).subscribe(data => {
      this.products = data;
    })
  }

}
