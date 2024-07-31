import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dropdown-button',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './dropdown-button.component.html',
    styleUrl: './dropdown-button.component.scss'
})

export class DropdownButtonComponent implements OnInit{
    @Input()
    buttonValue: string = '';
    @Input()
    buttonIcon: string = '';

    ngOnInit(): void {
        // console.log('ddb - OnInit: ' + this.buttonKeyValue);
    }
}
