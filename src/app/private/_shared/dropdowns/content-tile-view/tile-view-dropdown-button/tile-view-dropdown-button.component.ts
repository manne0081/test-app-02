import { Component, OnInit, Input } from '@angular/core';
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

export class TileViewDropdownButtonComponent implements OnInit {
    @Input()
    buttonValue: string = '';
    @Input()
    buttonIcon: string = '';

    haveFilterConditions: boolean = false;
    haveSortConditions: boolean = false;
    haveGroupConditions: boolean = false;

    constructor(
        private contentTileViewService: ContentTileViewService,
    ) {}

    ngOnInit(): void {
        this.contentTileViewService.numberFilterConditions$.subscribe(item => {
            if(item > 0) {
                this.haveFilterConditions = true;
            } else {
                this.haveFilterConditions = false;
            }
        });
    }

    onClickButton(event: Event): void {
        event.stopPropagation();
        this.contentTileViewService.setOpenedDropdownId(this.buttonValue);
    }
}
