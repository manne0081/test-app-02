import { Component, Input } from '@angular/core';

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

export class FilterDataDropdownComponent {
    @Input()
    buttonType: string = '';

}
