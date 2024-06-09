import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  product !: Product;

  constructor(
    private route : ActivatedRoute,
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const idProduct = params['idProduct'];
      this.productService.getProductById(idProduct).subscribe(data => {
        this.product = data;
      })
    })
  }

}
