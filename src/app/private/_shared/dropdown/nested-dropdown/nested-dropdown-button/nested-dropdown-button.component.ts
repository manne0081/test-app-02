import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nested-dropdown-button',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './nested-dropdown-button.component.html',
    styleUrl: './nested-dropdown-button.component.scss'
})

export class NestedDropdownButtonComponent {
    @Input()
    buttonCategory: string = '';
}
