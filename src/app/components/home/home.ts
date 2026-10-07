import { Component } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';

@Component({
  imports: [TodoList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
