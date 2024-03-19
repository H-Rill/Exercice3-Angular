import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [];

  constructor() { 
    this.init()
  }

  init = () =>{
    this.insert({
      id: 1,
      title: 'The Paginator',
      description: 'This is a short description of the blog post content.',
      author: 'Rill',
      comments:['abcdefghi' , 'jklmnop']
    }),
    this.insert({
      id: 2,
      title: 'The Page',
      description: 'This is a short description of the blog post content.',
      author: 'Harries',
      comments:['abcdefghi' , 'jklmnop']
    }),
    this.insert({
      id: 3,
      title: 'Beautiful thing',
      description: 'This is a short description of the blog post content.',
      author: 'Paula',
      comments:['abcdefghi' , 'jklmnop']
    }),
    this.insert({
      id: 4,
      title: 'What?!',
      description: 'This is a short description of the blog post content.',
      author: 'Jen',
      comments:['abcdefghi' , 'jklmnop']
    })

  }

  
  insert(blog : {id:number, title:string, description:string, author:string, comments:string[]})
  {
    this.blogs.push(blog)
  }

  deleteAll(){

  this.blogs = [];

  }

  getAllBlog(): Blog[]{
    return this.blogs;
  }

  getBlogsById(id:number): Blog{
    const foundBlogs = this.blogs.find(blogs => blogs.id === id);
    if(!foundBlogs){
      throw new Error('Book with Id ${id} not found');
    }

    return foundBlogs;
    
  }

  
}
