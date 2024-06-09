import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  @Input() product : Product | undefined;
  selectedProduct !: Product;

  constructor(private productService: ProductService) { }

  deleteProduct(): void {
    if(this.product && this.product.idProduct !== undefined) {
      this.productService.deleteProduct(this.product.idProduct).subscribe(() => {
        alert('Product deleted successfully');
      });
    }
  }
}
