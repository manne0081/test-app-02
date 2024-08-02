import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dropdown-data-filter',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './dropdown-data-filter.component.html',
    styleUrl: './dropdown-data-filter.component.scss'
})

export class DropdownDataFilterComponent {
    showDropContent: boolean = false;

}
