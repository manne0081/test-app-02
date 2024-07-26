import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-drop-button',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './drop-button.component.html',
    styleUrl: './drop-button.component.scss'
})

export class DropButtonComponent implements OnInit {
    @Input()
    buttonKeyValue: string = '';
    @Input()
    buttonIcon: string = '';

    ngOnInit(): void {
        // console.log(this.buttonKeyValue);
    }
}
