import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Quicklinks } from './quicklinks';
import { QuicklinksService } from './quicklinks.service';

@Component({
    selector: 'app-quicklinks',
    standalone: true,
    imports: [
        CommonModule,
        DragDropModule,
        FormsModule,
    ],
    templateUrl: './quicklinks.component.html',
    styleUrl: './quicklinks.component.scss'
})

export class QuicklinksComponent implements OnInit {
    @Output() onSelectQuicklink: EventEmitter<Quicklinks> = new EventEmitter<Quicklinks>();

    quicklinkItems: Quicklinks[] = [];
    quicklinksVisible:boolean = true;
    searchTerm: string = '';
    selectedQuicklink!: Quicklinks;

    constructor(
        private router: Router,
        private quicklinkService: QuicklinksService, ) {
    }

    ngOnInit(): void {
        this.getQuicklinks();
    }

    getQuicklinks(): void {
        this.quicklinkService.getQuicklinks().subscribe((data: Quicklinks[]) => {
            this.quicklinkItems = data;
        });
    }

    get filteredQuicklinks() {
        return this.quicklinkItems.filter(link =>
            link.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    truncateText(text: string, maxLength: number): string {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength - 3) + '...';
    }

    removeSearchTerm(): void {
        this.searchTerm = '';
    }

    moveDropdown(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.quicklinkItems, event.previousIndex, event.currentIndex);
    }

    openQuicklink(item: any): void {
        window.alert(item.title + " clicked!");
        // this.router.navigate([item.url]);
    }

    test(item: any): Observable<Quicklinks[]> {
        return of(item);
    }

    test2(item: any): void {
        this.selectedQuicklink = item;
        // console.log(item);
    }

    test3(item: Quicklinks): void {
        // this.router.navigate([item.url]);
        // this.onSelectQuicklink.emit(item);

        const urlParts = item.url.split('?');
        const path = urlParts[0];
        const queryParamsString = urlParts[1];

        console.log('item: ' + item);
        console.log('urlParts: ' + urlParts);
        console.log('path: ' + path);
        console.log('queryParamsString: ' + queryParamsString);

        let queryParams = {};
        if (queryParamsString) {
            queryParams = queryParamsString.split('&').reduce((params, param) => {
                const [key, value] = param.split('=');
                // todo
                // params[key] = value;
                return params;
            }, {});
        }

        this.router.navigate([path], { queryParams });

        // For sharing the selected Quicklink-Item with the private.component, to show the add-info-container
        // and to show the Content-Header and the Actions Container
        this.onSelectQuicklink.emit(item);
    }

    openContext(item: any): void {
        window.alert("3P-Menu " + item.title + " clicked!");
    }
}
