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

    taskItems: Task[] = [];
    selectedTaskId: number | null = null;
    sortOrder: string = 'asc';

    constructor ( private route: ActivatedRoute, private taskService: TaskService ) {
    }

    ngOnInit(): void {
        this.getTasks();

        this.route.queryParams.subscribe(params => {
            this.searchTerm = params['searchTerm'] || '';
                if(this.searchTerm) {
                    // console.log('searchTerm = true: ' + this.searchTerm);
                    this.applyFilter();
                } else {
                    // console.log('searchTerm = false: ' + this.searchTerm);
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
        this.taskItems = this.taskItems
            .sort((a, b) => {
                if (this.sortOrder === 'asc') {
                    return a.title.localeCompare(b.title);
                } else {
                    return b.title.localeCompare(a.title);
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
