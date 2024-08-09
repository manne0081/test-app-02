import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-planner',
    standalone: true,
    templateUrl: './planner.component.html',
    styleUrl: './planner.component.scss',
    imports: [
        CommonModule,
        FormsModule,
    ]
})

export class PlannerComponent {
    dropdownContent: string = 'fieldname';
    showDropContent: boolean = true;
    dropdownContentOperator: any = '';
}
