import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  formStatus: string = '';
  formdata: any = {};
  reactiveForm!: FormGroup;

  constructor(private bookService: BookService) {} 

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      book: new FormControl(null, Validators.required),
      isbn: new FormControl(null, Validators.required),
      authors: new FormArray([new FormControl(null, Validators.required)])
    });
    // this.reactiveForm.statusChanges.subscribe((status) => {
    //   console.log(status)
    //   this.formStatus = status;
    // });
   
    
  }

  OnFormSubmitted(){

    if(this.reactiveForm.valid){
      

      const newBook: Book = {
        id: this.bookService.getAllBooks.length +1,
        name: this.reactiveForm.get('book')!.value,
        isbn: this.reactiveForm.get('isbn')!.value,
        authors: this.reactiveForm.get('authors')!.value

      };
      console.log('Form data:', this.reactiveForm.value);
      this.bookService.insert(newBook);
      this.reactiveForm.reset()
    }
  }

  AddAuthors(){
    (this.reactiveForm.get('authors') as FormArray).push(new FormControl(null, Validators.required));
  }

  DeleteAuthor(index: number){
    const controls = this.reactiveForm.get('authors') as FormArray;
    controls.removeAt(index);
  }
  get authorControls() {
    const authorsArray = this.reactiveForm.get('authors');
    return authorsArray instanceof FormArray ? authorsArray.controls : [];
  }



}
