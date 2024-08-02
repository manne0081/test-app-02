import { Component, Input } from '@angular/core';
import { TileViewDropdownButtonComponent } from '../tile-view-dropdown-button/tile-view-dropdown-button.component';

@Component({
    selector: 'app-tile-view-dropdown',
    standalone: true,
    imports: [
        TileViewDropdownButtonComponent,
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
    contentOption: string = '';
}
