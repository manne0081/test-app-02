import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterDataService } from '../filter-data.service';

@Component({
    selector: 'app-filter-data-dropdown-data',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './filter-data-dropdown-data.component.html',
    styleUrl: './filter-data-dropdown-data.component.scss'
})

export class FilterDataDropdownDataComponent implements OnInit {
    @Input()
    dropdownContent: string = '';    // operator, fieldname, condition
    @Input()
    dropdownUuidV4: string = '';
    @Output()
    selectedOption = new EventEmitter<string>();

    showDropContent: boolean = false;

    operatorOptions: string[] = ['and', 'or'];
    fieldnameOptions: string[] = ['Firstname', 'Lastname', 'Postcode', 'Street'];
    conditionOptions: string[] = ['contains', 'does not contain', 'is', 'is not'];

    constructor(
        private filterDataService: FilterDataService,
    ) {}

    ngOnInit(): void {
        this.filterDataService.clickedButtonUuidV4$.subscribe(item => {
            this.setShowDropdown(item);
        })
    }

    /**
     * Shows the dropdown, if the uuid from the '@Input' and the clicked Button are the same
     * @param dropdownUuidV4
     */
    setShowDropdown(dropdownUuidV4: any): void {
        if (dropdownUuidV4 === this.dropdownUuidV4) {
            this.showDropContent = true;
        } else {
            this.showDropContent = false;
        }
    }

    /**
     *
     * @param selectedValue
     */
    setSelectedValue(selectedValue: string): void {
        this.filterDataService.setSelectedValue(selectedValue, this.dropdownUuidV4);
        if (selectedValue === 'and' || selectedValue === 'or') {
            this.selectedOption.emit(selectedValue);
        }
    }

    /**
     *
     * @param event
     */
    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;
        // console.log(target);

        if (!target.closest('.drop-content-container-nested')) {
            this.showDropContent = false;
        }
    }
}
