import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ContentTileViewService {
    private clickedButton = new BehaviorSubject<any>(null);
    clickedButton$ = this.clickedButton.asObservable();

    constructor() {}

    setOpenedDropdownId(clickedButtonValue: string): void {
        console.log('ContentTileViewService - setOpenedDropdownId: ' + clickedButtonValue);
        this.clickedButton.next(clickedButtonValue);
    }
}
