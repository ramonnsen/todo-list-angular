
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { TaskCreate } from '../models/TaskCreate';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';
import { Page } from '../models/page';





@Service()
export class TaskService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/v1/todolist';

    createTask(task:TaskCreate): Observable<Task>{
        return this.http.post<Task>(this.apiUrl, task);
    }

    deleteTask(taskId: string): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/task/${taskId}`);
    }

    findAll(): Observable<Page<Task>>{
        return this.http.get<Page<Task>>(this.apiUrl);
    }
}

