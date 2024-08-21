import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { FilterDataDropdownButtonComponent } from '../filter-data-dropdown-button/filter-data-dropdown-button.component';
import { FilterDataDropdownDataComponent } from '../filter-data-dropdown-data/filter-data-dropdown-data.component';

@Component({
    selector: 'app-filter-data-dropdown',
    standalone: true,
    imports: [
        FilterDataDropdownButtonComponent,
        FilterDataDropdownDataComponent,
    ],
    templateUrl: './filter-data-dropdown.component.html',
    styleUrl: './filter-data-dropdown.component.scss'
})

export class FilterDataDropdownComponent implements OnInit {
    @Input()
    buttonType: string = '';

    @Output()
    selectedOperator = new EventEmitter<string>();

    receivedMessage!: string;

    dropdownUuidV4: string = uuidv4();


    constructor() {}

    ngOnInit(): void {
    }

    getSelectedOperator(message: string) {
        this.receivedMessage = message;
        this.selectedOperator.emit(message);
    }
}
