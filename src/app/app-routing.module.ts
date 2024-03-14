import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './modules/book/pages/book-list/book-list.component';
import { BlogListComponent } from './modules/blog/pages/blog-list/blog-list.component';
import { ProfileComponent } from './modules/user/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full'
  },
  {
    path: 'book',
    loadChildren: () =>
    import('./modules/book/book.module').then((m) => m.BookModule)
  },
    {
    path: 'blog',
    loadChildren: () =>
    import('./modules/blog/blog.module').then((m) => m.BlogModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
    import('./modules/user/user.module').then((m) => m.UserModule)
  }
  
];

// const routes: Routes = [

//   {
//     path: 'book',
//     component: BookListComponent
//   }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
