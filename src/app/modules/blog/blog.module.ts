import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{
  path: '',
  component: BlogListComponent},
  {
    path: 'form',
  component: BlogFormComponent
  }
]


@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[RouterModule,
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,
  ],
})
export class BlogModule { }



