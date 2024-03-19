import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'] 
})
export class BlogFormComponent implements OnInit {
  formData: any = {};
  formStatus: string = '';
  reactiveForm!: FormGroup; 
  constructor(private blogService: BlogService) {} 

  ngOnInit(): void {
    // Initialize reactiveForm in ngOnInit
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required) 
    });

    this.reactiveForm.statusChanges.subscribe((status) => {
      console.log(status)
      this.formStatus = status;
    });
  }

  OnFormSubmitted() {

    if (this.reactiveForm.valid) {
      const newBlog: Blog = {
        id: this.blogService.getAllBlog().length + 1, 
        title: this.reactiveForm.get('title')!.value,
        description: this.reactiveForm.get('description')!.value,
        author: this.reactiveForm.get('name')!.value,
        comments: [] 
      };
      this.blogService.insert(newBlog); 
      this.reactiveForm.reset({ name: null, title: null, description: null }, { emitEvent: false });

    }
  }
}
