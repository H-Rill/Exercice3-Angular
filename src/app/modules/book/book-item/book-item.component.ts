import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  isEdited:boolean = false;
  isDeleted:boolean = false;
  editingBookId: number = 0 ;
  deleteBookId: number = 0 ;
  @Input() book: Book | undefined;

  constructor(private service: BookService) {}
  

  // @Output()
  // delete: EventEmitter<number> = new EventEmitter;

  editBook(id: number): void {
    this.isEdited = true;
    const bookToEdit = this.service.getBookById(id);
    this.editingBookId = bookToEdit.id; 
    this.isDeleted = false;
    this.deleteBookId = 0; 
  }

  deleteBook(id: number): void {
    this.isEdited = false;
    this.editingBookId = 0; 
    this.isDeleted = true;
    const deleteBook = this.service.getBookById(id);
    this.deleteBookId = deleteBook.id; 
  }


  

 
}
