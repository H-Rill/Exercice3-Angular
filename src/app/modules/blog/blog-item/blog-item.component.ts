import { Component, Input, input } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  isEdited:boolean = false;
  isDeleted:boolean = false;
  editingBlogId: number = 0 ;
  deleteBlogId: number = 0 ;
  // @Input() blog : Blog | undefined;
  @Input() blog: Blog | undefined
  // @Input() book: Book | undefined;


  constructor(private service: BlogService) {
    
  }

  editBlog(id: number): void {
    this.isEdited = true;
    const bookToEdit = this.service.getBlogsById(id);
    this.editingBlogId = bookToEdit.id; 
    this.isDeleted = false;
    this.deleteBlogId = 0; 
  }

  deleteBlog(id: number): void {
    this.isEdited = false;
    this.editingBlogId = 0; 
    this.isDeleted = true;
    const deleteBook = this.service.getBlogsById(id);
    this.deleteBlogId = deleteBook.id; 
  }


}
