import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentTileViewService } from '../../content-tile-view.service';
import { FilterDataDropdownComponent } from './filter-data/filter-data-dropdown/filter-data-dropdown.component';

@Component({
    selector: 'app-dropdown-data-filter',
    standalone: true,
    imports: [
        CommonModule,
        FilterDataDropdownComponent,
    ],
    templateUrl: './dropdown-data-filter.component.html',
    styleUrl: './dropdown-data-filter.component.scss'
})

export class DropdownDataFilterComponent implements OnInit {
    showDropContent: boolean = false;
    filterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [];
    private newFilterConditionIndex: number = 0;

    constructor(
        private contentTileViewService: ContentTileViewService,
    ) {}

    ngOnInit(): void {
        this.contentTileViewService.clickedButton$.subscribe(item => {
            this.setShowDropdown(item);
        });
    }

    setShowDropdown(dropdownId: any): void {
        if (dropdownId === 'filter') {
            this.showDropContent = true;
        } else {
            this.showDropContent = false;
        }
    }

    addCondition(event: Event): void {
        console.log('dropdown-data-filter > add condition clicked');
        event.stopPropagation();
        this.newFilterConditionIndex++;
        this.filterConditions.push({ index: this.newFilterConditionIndex, label: 'and', name: '', condition: '', value: '' });
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;

        if (!target.closest('.drop-content-container')) {
            this.showDropContent = false;
        }
    }
}
