import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  categoryForm: FormGroup;

  constructor(private form: FormBuilder, private categoryService: CategoryService) {
    this.categoryForm = this.form.group({
      nameCategory: ['', Validators.required]
    });
  }

  submit() : void {
    if (this.categoryForm.valid) {
      const category : Category = {
        nameCategory: this.categoryForm.value.nameCategory
      };

      this.categoryService.addCategory(category).subscribe({
        next: () => {
          console.log('Category added');
          this.categoryForm.reset();
        },
        error: (error) => {
          console.error('Error adding category', error);
        }
      });
    }
  }
}
