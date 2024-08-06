import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilterDataService {
    private clickedButton = new BehaviorSubject<any>(null);
    clickedButton$ = this.clickedButton.asObservable();

    constructor() {}

    setClickedButtonId(clickedButtonValue: string): void {
        this.clickedButton.next(clickedButtonValue);
        console.log('filter-data-service > setClickedButtonId: ' + clickedButtonValue);
    }
}
