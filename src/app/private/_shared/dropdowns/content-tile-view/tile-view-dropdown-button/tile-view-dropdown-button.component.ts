import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTileViewService } from '../content-tile-view.service';

@Component({
    selector: 'app-tile-view-dropdown-button',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './tile-view-dropdown-button.component.html',
    styleUrl: './tile-view-dropdown-button.component.scss'
})

export class TileViewDropdownButtonComponent {
    @Input()
    buttonValue: string = '';
    @Input()
    buttonIcon: string = '';

    buttonClicked: boolean = false;

    constructor(
        private contentTileViewService: ContentTileViewService,
    ) {}

    onClickButton(event: Event): void {
        event.stopPropagation();
        // const clickedButtonId: string = (event.currentTarget as HTMLElement).id;
        this.contentTileViewService.setOpenedDropdownId(this.buttonValue);
        this.buttonClicked = true;
    }
}
