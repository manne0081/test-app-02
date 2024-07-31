import { Component, OnInit, Input } from '@angular/core';
import { NestedDropdownButtonComponent } from '../nested-dropdown-button/nested-dropdown-button.component';
import { NestedDropdownContentLabelComponent } from '../nested-dropdown-content-label/nested-dropdown-content-label.component';

@Component({
    selector: 'app-nested-dropdown',
    standalone: true,
    imports: [
        NestedDropdownButtonComponent,
        NestedDropdownContentLabelComponent,
    ],
    templateUrl: './nested-dropdown.component.html',
    styleUrl: './nested-dropdown.component.scss'
})

export class NestedDropdownComponent implements OnInit {
    @Input()
    buttonCategorie: string = '';

    ngOnInit(): void {
        console.log('nestedDD - OnInit: ' + this.buttonCategorie);
    }

}
