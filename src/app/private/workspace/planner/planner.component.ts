import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../../_test/shared/dropdown/dropdown.component';

@Component({
    selector: 'app-planner',
    standalone: true,
    templateUrl: './planner.component.html',
    styleUrl: './planner.component.scss',
    imports: [
        CommonModule,
        DropdownComponent,
    ]
})

export class PlannerComponent {

}
