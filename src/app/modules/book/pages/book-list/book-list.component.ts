import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  //bind the data
  books: Book[] = [];
  // isSubmitted:boolean = false;



  //injecting the constructor
  constructor(
    //property injection
    private service: BookService
    ){
    this.books = this.service.getAllBooks();

  }


}
