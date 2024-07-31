import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropButtonComponent } from '../drop-button/drop-button.component';
import { DropContentObjectFilterComponent } from '../dropdown-content/drop-content-object-filter/drop-content-object-filter.component';
import { DropContentObjectSortComponent } from '../dropdown-content/drop-content-object-sort/drop-content-object-sort.component';
import { DropContentObjectGroupComponent } from '../dropdown-content/drop-content-object-group/drop-content-object-group.component';

import { PrivateService } from '../../../private.service';

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [
        CommonModule,
        DropButtonComponent,
        DropContentObjectFilterComponent,
        DropContentObjectSortComponent,
        DropContentObjectGroupComponent,
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
