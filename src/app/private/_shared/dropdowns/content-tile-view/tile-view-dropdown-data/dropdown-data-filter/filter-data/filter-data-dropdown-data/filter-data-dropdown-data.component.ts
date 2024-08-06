import { Component, OnInit, Input } from '@angular/core';
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

    showDropContent: boolean = false;

    constructor(
        private filterDataService: FilterDataService,
    ) {}

    ngOnInit(): void {
        this.filterDataService.clickedButton$.subscribe(item  => {
            this.setShowDropdown(item);
        });
    }

    setShowDropdown(dropdownId: any): void {
        if (dropdownId === 'operator') {
            this.showDropContent = true;
        } else {
            this.showDropContent = false;
        }
    }
}
