import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Task, TASK_MOCK } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    private selectedTaskSubject = new BehaviorSubject<Task | null>(null);
    selectedTask$ = this.selectedTaskSubject.asObservable();

    constructor() { }

    getTasks(): Observable<Task[]> {
        return of(TASK_MOCK);
    }

    onSelectTask(task: Task ) {
        this.selectedTaskSubject.next(task);
    }

    getSelectedTask(): Observable<Task | null> {
        return this.selectedTask$;
    }
}
