import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateService } from '../../../../private.service';

@Component({
    selector: 'app-drop-content-sort',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './drop-content-sort.component.html',
    styleUrl: './drop-content-sort.component.scss'
})

export class DropContentSortComponent implements OnInit {
    showDropdown: boolean = false;

    constructor(private privateService: PrivateService) {}

    ngOnInit(): void {
        this.privateService.clickedButtonId$.subscribe(item => {
            this.setShowDropdown(item)
        });
    }

    setShowDropdown(dropdownId: any): void {
        if (dropdownId === 'view-option-sort') {
            this.showDropdown = true;
        } else {
            this.showDropdown = false;
        }
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;

        if (!target.closest('.drop-content-container')) {
            this.showDropdown = false;
        }
    }
}
