import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentTileViewService } from '../../content-tile-view.service';

@Component({
    selector: 'app-dropdown-data-filter',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './dropdown-data-filter.component.html',
    styleUrl: './dropdown-data-filter.component.scss'
})

export class DropdownDataFilterComponent implements OnInit {
    showDropContent: boolean = false;

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
        // this.dropContentFilterService.addFilterCondition();
        // this.getFilterConditions();
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;

        if (!target.closest('.drop-content-container')) {
            this.showDropContent = false;
        }
    }

}
