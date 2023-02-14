import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Array<Book> = []; 
  constructor() { }

  add(book : Book){
    this.cart.push(book);
  }
  remove(book: Book){
    this.cart = this.cart.filter(b => b != book);
  }

  get(){
    return this.cart;
  }
}
