import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateService } from '../../../../private.service';
import { DropContentObjectFilterService } from './drop-content-object-filter.service';

@Component({
    selector: 'app-drop-content-object-filter',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './drop-content-object-filter.component.html',
    styleUrl: './drop-content-object-filter.component.scss'
})

export class DropContentObjectFilterComponent implements OnInit {
    showDropdown: boolean = false;
    filterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [];

    constructor(private privateService: PrivateService,
                private dropContentFilterService: DropContentObjectFilterService,
    ) {}

    ngOnInit(): void {
        this.privateService.clickedButtonId$.subscribe(item => {
            this.setShowDropdown(item)
        });

        this.getFilterConditions();
    }

    setShowDropdown(dropdownId: any): void {
        if (dropdownId === 'view-option-filter') {
            this.showDropdown = true;
        } else {
            this.showDropdown = false;
        }
    }

    getFilterConditions(): void {
        this.filterConditions = this.dropContentFilterService.getFilterConditions();
    }

    addCondition(event: Event): void {
        // console.log('Add condition clicked');
        event.stopPropagation();
        this.dropContentFilterService.addFilterCondition();
        this.getFilterConditions();
    }

    removeCondition(event: Event, index: number): void {
        event.stopPropagation();
        this.dropContentFilterService.removeFilter(index);
        this.getFilterConditions();
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;

        if (!target.closest('.drop-content-container')) {
            this.showDropdown = false;
        }
    }
}
