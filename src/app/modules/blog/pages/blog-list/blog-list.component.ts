import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs : Blog[] = [];

  constructor(
    private service: BlogService
  ){
    this.blogs = this.service.getAllBlog();
  }
}
