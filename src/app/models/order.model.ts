import { OrderDetail } from './order-detail.model';

export interface Order {
  idOrder : number;
  idUser : number;
  date : Date;
  typeOrder : string;
  methodPayment : string;
  status : string;
  phone : string;
  comments : string;
  waitingTime : number;
  totalPrice : number;
  orderDetails : OrderDetail[];
}
