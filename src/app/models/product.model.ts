import { Category } from "./category.model";

export interface Product {
  idProduct ?: number;
  nameProduct : string;
  description : string;
  price : number;
  enabled : boolean;
  image ?: string;
  category: Category;
}
