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

    selectedOption!: string;

    constructor(
        private filterDataService: FilterDataService,
    ) {}

    ngOnInit(): void {
        this.filterDataService.selectedValue$.subscribe(item => {
            if (item) {
                if (Array.isArray(item) && item.length === 2) {
                    const [leftPart, rightPart] = item;
                    if (rightPart === this.dropdownUuidV4) {
                        this.selectedOption = leftPart;
                    }
                } else {
                    console.error("Der Wert ist kein String und das Array hat nicht die erwartete Länge von 2:", item);
                }
            } else {
                if (this.buttonType === 'operator') {
                    this.selectedOption = 'and';
                }
                if (this.buttonType === 'fieldname') {
                    this.selectedOption = 'Firstname';
                }
                if (this.buttonType === 'condition') {
                    this.selectedOption = 'contains';
                }
            }
        });
    }

    onClickButton(event: Event): void {
        event.stopPropagation();
        this.filterDataService.setClickedButtonUuid4(this.dropdownUuidV4);
    }
}
