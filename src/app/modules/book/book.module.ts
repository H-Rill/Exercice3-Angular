import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookItemComponent } from './book-item/book-item.component';
import { SharedModule } from '../../shared/shared.module';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';


//Route
const routes: Routes = [{
  path: '',
  component: BookListComponent},
  {path: 'form', component: BookFormComponent}

]


@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookFormComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[RouterModule,
    BookListComponent,
    BookItemComponent,
    SharedModule
    ],
})
export class BookModule { }
