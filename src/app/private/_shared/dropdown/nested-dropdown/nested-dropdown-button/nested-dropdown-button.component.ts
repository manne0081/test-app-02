import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nested-dropdown-button',
    standalone: true,
    imports: [],
    templateUrl: './nested-dropdown-button.component.html',
    styleUrl: './nested-dropdown-button.component.scss'
})

export class NestedDropdownButtonComponent {
    @Input()
    buttonCategory: string = '';
}
