import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileViewDropdownButtonComponent } from '../tile-view-dropdown-button/tile-view-dropdown-button.component';
import { DropdownDataFilterComponent } from '../tile-view-dropdown-data/dropdown-data-filter/dropdown-data-filter.component';
import { DropdownDataSortComponent } from '../tile-view-dropdown-data/dropdown-data-sort/dropdown-data-sort.component';
import { DropdownDataGroupComponent } from '../tile-view-dropdown-data/dropdown-data-group/dropdown-data-group.component';

@Component({
    selector: 'app-tile-view-dropdown',
    standalone: true,
    imports: [
        CommonModule,
        TileViewDropdownButtonComponent,
        DropdownDataFilterComponent,
        DropdownDataSortComponent,
        DropdownDataGroupComponent,
    ],
    templateUrl: './tile-view-dropdown.component.html',
    styleUrl: './tile-view-dropdown.component.scss'
})

export class TileViewDropdownComponent {
    @Input()
    buttonValue: string = '';

    @Input()
    buttonIcon: string = '';

    @Input()
    dropdownContent: string = '';    // filter, sort, group
}
