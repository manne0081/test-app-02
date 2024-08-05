import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentTileViewService } from '../../content-tile-view.service';

@Component({
    selector: 'app-dropdown-data-sort',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './dropdown-data-sort.component.html',
    styleUrl: './dropdown-data-sort.component.scss'
})

export class DropdownDataSortComponent {
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
        if (dropdownId === 'sort') {
            this.showDropContent = true;
        } else {
            this.showDropContent = false;
        }
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;

        if (!target.closest('.drop-content-container')) {
            this.showDropContent = false;
        }
    }
}
