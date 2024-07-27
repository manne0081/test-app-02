import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateService } from '../../../../private.service';

@Component({
    selector: 'app-drop-content-object-sort',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './drop-content-object-sort.component.html',
    styleUrl: './drop-content-object-sort.component.scss'
})

export class DropContentObjectSortComponent implements OnInit {
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
}
