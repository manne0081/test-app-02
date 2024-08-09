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

    /**
     * Subscribe the observable to open the dropdown by clicking the button
     */
    ngOnInit(): void {
        this.contentTileViewService.clickedButton$.subscribe(item => {
            this.setShowDropdown(item);
        });
    }

    /**
     * Gets the info from the observable when the button is clicked and opens the filter-dropdown
     * @param dropdownId
     */
    setShowDropdown(dropdownId: any): void {
        if (dropdownId === 'filter') {
            this.showDropContent = true;
        } else {
            this.showDropContent = false;
        }
    }

    /**
     * Calculates the new filter-array-index and push the new condition into the filter-array
     * @param event
     */
    addCondition(event: Event): void {
        event.stopPropagation();
        this.newFilterConditionIndex++;
        this.filterConditions.push({ index: this.newFilterConditionIndex, label: 'and', name: '', condition: '', value: '' });
        this.contentTileViewService.setNumberFilterConditions(this.filterConditions.length);
    }

    /**
     * Gets the filter-array-index and remove the from the filter-array
     * @param event
     * @param index
     */
    removeFilter(event: Event, index: number): void {
        event.stopPropagation();
        const arrayIndex = this.filterConditions.findIndex(filter => filter.index === index);
        if (arrayIndex !== -1) {
            this.filterConditions.splice(arrayIndex, 1);
        }
        this.contentTileViewService.setNumberFilterConditions(this.filterConditions.length);
    }

    /**
     * Checks all click-events over the whole document and closes the dropdown when clicking outside this
     * @param event
     */
    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;
        // console.log(target);

        if (!target.closest('.drop-content-container')) {
            this.showDropContent = false;
        }
    }
}
