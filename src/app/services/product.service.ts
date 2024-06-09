import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  private readonly path = `${baseUrl}/products`;

  public getProductById(idProduct : number) : Observable<Product> {
    return this.httpClient.get<Product>(`${this.path}/${idProduct}`);
  }

  public getProductsByCategory(nameCategory : string) : Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.path}/category/${nameCategory}`)
  }

  public getProductsAvailable() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.path}/`)
  }

  public getAllProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.path}/all`)
  }

  public addProduct(product : Product) : Observable<Product> {
    return this.httpClient.post<Product>(`${this.path}/save`, product)
  }

  public updateProduct(idProduct : number, product : Product) : Observable<Product> {
    return this.httpClient.put<Product>(`${this.path}/update/${idProduct}`, product)
  }

  public deleteProduct(idProduct : number) :Observable<void> {
    return this.httpClient.delete<void>(`${this.path}/delete/${idProduct}`)
  }
}
