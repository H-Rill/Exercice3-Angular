import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs: Blog[] = [];
  

  constructor(
    private service: BlogService,  private router: Router
  ){
    this.blogs = this.service.getAllBlog();
  }

  handleAction(actionType: string) {

    switch (actionType) {
      case 'add':
        this.router.navigate(['/blog/form']);
        break;
      case 'delete':
        this.blogs = [];
        this.service.deleteAll();
        break;
      default:

        break;
    }
  }
  


}
