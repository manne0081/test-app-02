import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import { DropContentFilterComponent } from '../dropdown-content/drop-content-filter/drop-content-filter.component';
import { DropContentSortComponent } from '../dropdown-content/drop-content-sort/drop-content-sort.component';
import { DropContentGroupComponent } from '../dropdown-content/drop-content-group/drop-content-group.component';

import { PrivateService } from '../../../private.service';

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [
        CommonModule,
        DropdownButtonComponent,
        DropContentFilterComponent,
        DropContentSortComponent,
        DropContentGroupComponent,
    ],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})

export class DropdownComponent implements OnInit{
    @Input()
    buttonValue: string = '';

    @Input()
    buttonIcon: string = '';

    @Input()
    contentOption: string = '';    // object-filter, object-sort, object-group

    constructor() {}

    ngOnInit(): void {
        console.log('dropdown - buttonValue: ' + this.buttonValue);
    }
}
