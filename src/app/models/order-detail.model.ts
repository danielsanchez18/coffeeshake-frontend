import { Order } from './order.model';

export interface OrderDetail {
  idDetail : number;
  idOrder : number;
  idProduct : number;
  quantity : number;
  unitPrice : number;
  subtotalPrice : number;
}
