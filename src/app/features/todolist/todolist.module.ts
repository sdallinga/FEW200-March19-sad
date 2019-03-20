import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [TodolistComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [TodolistComponent]
})
export class TodolistModule { }
