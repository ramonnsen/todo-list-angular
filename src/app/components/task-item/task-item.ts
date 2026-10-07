import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../services/task-service';

@Component({
  imports: [DatePipe],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})
export class TaskItem {
  private taskService = inject(TaskService);
  @Input() task!: Task;

  @Output() taskDeleted = new EventEmitter<string>;

  deleteTask(){
  this.taskService.deleteTask(this.task.id).subscribe({
    next: () => {
      console.log('Task excluida com sucesso.');
      this.taskDeleted.emit(this.task.id);
    },
    error: (err) => {
      console.error('Erro ao excluir Task', err);
    }
  })
  }

  editTask(){}
  }