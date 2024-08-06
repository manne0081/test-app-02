import { Component, Input } from '@angular/core';
import { FilterDataService } from '../filter-data.service';

@Component({
    selector: 'app-filter-data-dropdown-button',
    standalone: true,
    imports: [],
    templateUrl: './filter-data-dropdown-button.component.html',
    styleUrl: './filter-data-dropdown-button.component.scss'
})

export class FilterDataDropdownButtonComponent {
    @Input()
    buttonType: string = '';

    constructor(
        private filterDataService: FilterDataService,
    ) {}

    onClickButton(event: Event): void {
        event.stopPropagation();
        // console.log('filter-data-dropdown-button > onClickButton: ');
        this.filterDataService.setClickedButtonId(this.buttonType);
    }
}
