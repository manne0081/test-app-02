import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterDataService } from '../filter-data.service';

@Component({
    selector: 'app-filter-data-dropdown-button',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './filter-data-dropdown-button.component.html',
    styleUrl: './filter-data-dropdown-button.component.scss'
})

export class FilterDataDropdownButtonComponent {
    @Input()
    buttonType: string = '';

    @Input()
    dropdownUuidV4: string = '';

    constructor(
        private filterDataService: FilterDataService,
    ) {}

    ngOnInit(): void {
        // console.log('drop-button: ' + uuidv4());
    }

    onClickButton(event: Event): void {
        event.stopPropagation();
        // console.log('filter-data-dropdown-button > onClickButton: ');
        this.filterDataService.setClickedButtonUuid4(this.dropdownUuidV4);

    }
}
