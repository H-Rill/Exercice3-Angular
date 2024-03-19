import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CommandBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CommandBarComponent
  ]
})
export class SharedModule { }
