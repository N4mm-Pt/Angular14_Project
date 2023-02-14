import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name  : 'Clean Code',
        author :'Robert C Martin',
        image :  'https://m.media-amazon.com/images/I/41xShlnTZTL._SX198_BO1,204,203,200_QL40_ML2_.jpg',
        amount: 700
      },
      {
        name  : ' Pragmatic Programmer',
        author :'David Thomas',
        image :  'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 800
      },
      {
        name  : ' The Art of Computer Programming',
        author :'Donald E.Knuth',
        image :  'https://salt.tikicdn.com/cache/750x750/ts/product/7c/e4/e7/a6a1cbf4ff2c942f7e326564ad5b4fe5.jpg.webp',
        amount: 900
      },
      {
        name: 'Introdution To Algorithms',
        author: 'Thomas H.Cormen',
        image: 'https://sachtienganhhanoi.com/wp-content/uploads/2022/02/Introduction_to_algorithms-3rd-Edition1.png',
        amount: 1200
      }
    ]
  }
}
