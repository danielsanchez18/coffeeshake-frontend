import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.css'
})
export class DetailsProductComponent {
  @Input() product : Product | undefined;
  selectedProduct !: Product;

}
