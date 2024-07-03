import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-add-info',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './add-info.component.html',
    styleUrl: './add-info.component.scss'
})

export class AddInfoComponent implements OnInit {
    @Input() info: string | null = null;

    constructor() {
    }

    ngOnInit(): void {
    }
}