import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

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
    private service: BookService, private router: Router
    ){
    this.books = this.service.getAllBooks();

  }

  handleAction(actionType: string){
    switch(actionType){
      case 'add':
        this.router.navigate(['book/form']);
       
        break;
      case 'delete':
        console.log("what delete")
        this.books=[];
        this.service.deleteAllBooks();
        
    }
  }


}
