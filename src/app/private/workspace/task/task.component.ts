import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss'
})

export class TaskComponent implements OnInit {
    @Input() searchTerm: string = '';
    @Input() sortingTerm: string = '';

    taskItems: Task[] = [];
    selectedTask!: Task;
    selectedTaskId: number | null = null;

    constructor ( private route: ActivatedRoute, private taskService: TaskService ) {
    }

    ngOnInit(): void {
        this.getTasks();

        this.route.queryParams.subscribe(params => {

            this.sortingTerm = (params['sortingTerm'] || 'name-asc');
            this.searchTerm = params['searchTerm'] || '';
                if(this.searchTerm) {
                    this.applyFilter();
                } else {
                    this.getTasks();
                }
        });
    }

    /**
     * Get all companies from mock-data and set them to the companyItems-array
     */
    getTasks(): void {
        this.taskService.getTasks().subscribe((data: Task[]) => {
            this.taskItems = data;
            this.sortTaskItems();
        });
    }

    /**
     * Takes the companyItems and filter and sort them about the searchTerm variable
     */
    applyFilter(): void {
        this.taskItems = this.taskItems
            .filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
            this.sortTaskItems();
    }

    /**
     *
     */
    sortTaskItems(): void {
        this.taskItems = this.taskItems.sort((a, b) => {
            if (this.sortingTerm === 'name-asc') {
                return a.title.localeCompare(b.title);
            } else if (this.sortingTerm === 'name-desc') {
                return b.title.localeCompare(a.title);
            } else if (this.sortingTerm === 'id-asc') {
                return a.id - b.id;
            } else if (this.sortingTerm === 'id-desc') {
                return b.id - a.id;
            } else {
                return 0; // Falls kein gültiger Sortierbegriff angegeben ist, bleibt die Reihenfolge unverändert
            }
        });
    }

    /**
     *
     * @param contact
     */
    onSelectTask(task: Task): void {
        this.taskService.onSelectTask(task);
        this.selectedTaskId = task.id;
    }
}
