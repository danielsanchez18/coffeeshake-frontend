import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient : HttpClient) { }

  public getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${baseUrl}/category/${id}`);
  }

  public getAllCategories() : Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${baseUrl}/category/`);
  }

  public addCategory(category : Category) : Observable<Category[]> {
    return this.httpClient.post<Category[]>(`${baseUrl}/category/register`, category);
  }

  public deleteCategory(idCategory : number) : Observable<void> {
    return this.httpClient.delete<void>(`${baseUrl}/category/delete/${idCategory}`);
  }

}
