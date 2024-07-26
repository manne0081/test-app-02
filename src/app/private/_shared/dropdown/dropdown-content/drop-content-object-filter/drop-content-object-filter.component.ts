import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-drop-content-object-filter',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './drop-content-object-filter.component.html',
    styleUrl: './drop-content-object-filter.component.scss'
})

export class DropContentObjectFilterComponent {
    showDropdown: boolean = true;
}
