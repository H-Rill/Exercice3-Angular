import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { RouterModule, Routes } from '@angular/router';

//Route
const routes: Routes = [{
  path: '',
  component: BlogListComponent
}]

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class BlogModule { }



