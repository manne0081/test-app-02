import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-drop-content-object-group',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './drop-content-object-group.component.html',
    styleUrl: './drop-content-object-group.component.scss'
})

export class DropContentObjectGroupComponent {
    showDropdown: boolean = true;
}
