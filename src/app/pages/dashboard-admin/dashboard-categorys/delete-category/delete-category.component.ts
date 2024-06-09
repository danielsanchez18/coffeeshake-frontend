import { Component, Input, input } from '@angular/core';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.css'
})
export class DeleteCategoryComponent {
  @Input() category: Category | undefined;

  constructor(private categoryService : CategoryService) { }

  deleteCategory(): void {
    if(this.category && this.category.idCategory !== undefined) {
      this.categoryService.deleteCategory(this.category.idCategory).subscribe(() => {

      });
    }
  }
}
