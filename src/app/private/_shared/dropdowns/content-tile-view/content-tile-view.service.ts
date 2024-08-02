import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ContentTileViewService {
    private clickedButton = new BehaviorSubject<any>(null);
    clickedButton$ = this.clickedButton.asObservable();

    constructor() { }

    setOpenedDropdownId(clickedButtonValue: string): void {
        this.clickedButton.next(clickedButtonValue);
        console.log('ContentTileViewService - setOpenedDropdownId: ' + clickedButtonValue);
    }
}
