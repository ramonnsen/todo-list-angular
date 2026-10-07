import { ChangeDetectorRef, Component, inject, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/task-service';

@Component({
  imports: [TaskItem],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList implements OnChanges {
  private taskService = inject(TaskService);

    private cdr = inject(ChangeDetectorRef);

  @Input() task!:Task;

  tasks = signal<Task[]>([]);

  
  ngOnChanges(changes: SimpleChanges){
    if( changes['task'] && this.task){
      this.tasks.update(tasks =>[... tasks, this.task]);
    }
  }

   onTaskDeleted(taskId: string) {
  this.tasks.update(tasks =>
    tasks.filter(task => task.id !== taskId)
  );
}


    findAll(){
      this.taskService.findAll().subscribe({
        next: (tasksDB) => {
          this.tasks.set(tasksDB.content);
     
        },
        error: (error) => {
          console.error(error);
        }
      })  
    }
}
