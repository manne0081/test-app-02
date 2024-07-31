import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateService } from '../../../../private.service';
import { DropContentFilterService } from './drop-content-filter.service';

import { NestedDropdownComponent } from '../../nested-dropdown/nested-dropdown/nested-dropdown.component';

@Component({
    selector: 'app-drop-content-filter',
    standalone: true,
    imports: [
        CommonModule,
        NestedDropdownComponent,
    ],
    templateUrl: './drop-content-filter.component.html',
    styleUrl: './drop-content-filter.component.scss'
})

export class DropContentFilterComponent implements OnInit {
    showDropdown: boolean = false;
    filterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [];

    constructor(
        private privateService: PrivateService,
        private dropContentFilterService: DropContentFilterService,
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
