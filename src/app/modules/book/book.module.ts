import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from './book-item/book-item.component';


//Route
const routes: Routes = [{
  path: '',
  component: BookListComponent
}]


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
})
export class BookModule { }
