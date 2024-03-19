import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [];

  constructor() {
    this.init();
  }

  init = () =>{
    this.insert({
      id: 1,
      name: 'Book 1',
      authors: ['Author 1', 'Author 2'],
      isbn: '1234567890'
    }),
    this.insert({
      id:2,
      name: 'Book 2',
      authors: ['Author Neozep', 'Author Para'],
      isbn: '123123'
    }),
    this.insert({
      id:3,
      name: 'Book 4',
      authors: ['Author Ang', 'Author Kora'],
      isbn: '23123122'
    }),
    this.insert({
      id:4,
      name: 'Book 3',
      authors: ['Author Zuko', 'Author Naomi'],
      isbn: '123123113'
    }),
    this.insert({
      id:5,
      name: 'Book 3',
      authors: ['Author Zuko', 'Author Naomi'],
      isbn: '123123113'
    }),
    this.insert({
      id:6,
      name: 'Book 3',
      authors: ['Author Zuko', 'Author Naomi'],
      isbn: '123123113'
    }),
    this.insert({
      id:7,
      name: 'Book 3',
      authors: ['Author Zuko', 'Author Naomi'],
      isbn: '123123113'
    }),
    this.insert({
      id:8,
      name: 'Book 3',
      authors: ['Author Zuko', 'Author Naomi'],
      isbn: '123123113'
    }),
    this.insert({
      id:9,
      name: 'Book 3',
      authors: ['Author Zuko', 'Author Naomi'],
      isbn: '123123113'
    })

  }

  insert(book : {id:number, name:string, authors:string[], isbn:string})
  {
    this.books.push(book)
  }


  getAllBooks(): Book[]{
    return this.books;
  }

  getBookById(id: number): Book {
    const foundBook = this.books.find(book => book.id === id);
    if (!foundBook) {
      throw new Error(`Book with ID ${id} not found.`);
    }
    return foundBook;
  }

  deleteAllBooks(): Book[]{
    return [];
  }

}
