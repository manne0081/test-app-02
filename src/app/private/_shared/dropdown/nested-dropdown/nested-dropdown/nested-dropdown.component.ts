import { Component } from '@angular/core';
import { NestedDropdownButtonComponent } from '../nested-dropdown-button/nested-dropdown-button.component';

@Component({
    selector: 'app-nested-dropdown',
    standalone: true,
    imports: [
        NestedDropdownButtonComponent,
    ],
    templateUrl: './nested-dropdown.component.html',
    styleUrl: './nested-dropdown.component.scss'
})

export class NestedDropdownComponent {

}
