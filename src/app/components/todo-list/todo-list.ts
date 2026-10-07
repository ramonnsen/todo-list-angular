import { Component, Input } from '@angular/core';

import { TaskForm } from '../task-form/task-form';
import { TaskList } from '../task-list/task-list';
import { Task } from '../../models/Task';


@Component({
  imports: [TaskForm, TaskList],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {
  newTask!: Task;

  onTaskCreated(task: Task){
    this.newTask = task;
  }

}
