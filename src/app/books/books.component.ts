import { Component } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
  books : Book[] = [];
  constructor(private bookService : BooksService){
  }
  cart : Book[] = [];
   
  isShowing: boolean = true;
  
  ngOnInit(): void{
    this.books = this.bookService.getBooks();
  }
  addToCart(book : Book){
    console.log(book);
  }
  
  
}
