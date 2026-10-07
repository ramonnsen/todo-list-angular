import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task-service';
import { TaskCreate } from '../../models/TaskCreate';
import { Task } from '../../models/Task';



@Component({
  imports: [FormsModule],
  selector: 'app-task-form',
  styleUrl: './task-form.css',
  templateUrl: './task-form.html',
})
export class TaskForm {
  private taskService = inject(TaskService);

  taskInput = '';

  @Output() createdTask = new EventEmitter<Task>();

  addTask(){
    const task: TaskCreate = {
      name: this.taskInput
    }

    this.taskService.createTask(task).subscribe({
      next: (taskResponse) => {
        this.createdTask.emit(taskResponse);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
