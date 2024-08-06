import { Component, OnInit, Input, HostListener } from '@angular/core';
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

    showDropContent: boolean = false;

    constructor(
        private filterDataService: FilterDataService,
    ) {}

    ngOnInit(): void {
        this.filterDataService.clickedButtonUuidV4$.subscribe(item => {
            this.setShowDropdown(item);
        })
    }

    setShowDropdown(dropdownUuidV4: any): void {
        if (dropdownUuidV4 === this.dropdownUuidV4) {
            this.showDropContent = true;
        } else {
            this.showDropContent = false;
        }
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;
        console.log('FilterDataDropdownDataComponent: ' + target);

        if (!target.closest('.drop-content-container-nested')) {
            this.showDropContent = false;
        }
    }

}
