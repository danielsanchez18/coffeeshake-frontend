import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-dashboard-categorys',
  templateUrl: './dashboard-categorys.component.html',
  styleUrl: './dashboard-categorys.component.css'
})
export class DashboardCategorysComponent implements OnInit{
  categories : Category[] = [];
  selectedCategory: Category | undefined;

  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

  onDeleteCategory(category: Category): void {
    this.selectedCategory = category;
  }

}
