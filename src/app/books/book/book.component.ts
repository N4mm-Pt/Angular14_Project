import { Component, Input, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book : Book = {} as Book;
  isInCart: boolean = false;
  

  constructor(private cartService: CartService){}

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }
  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
