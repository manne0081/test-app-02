import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-drop-content-object-sort',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './drop-content-object-sort.component.html',
    styleUrl: './drop-content-object-sort.component.scss'
})

export class DropContentObjectSortComponent {
    showDropdown: boolean = true;
}
