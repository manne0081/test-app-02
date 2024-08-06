import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilterDataService {
    private clickedButtonUuidV4 = new BehaviorSubject<any>(null);
    clickedButtonUuidV4$ = this.clickedButtonUuidV4.asObservable();

    constructor() {}


    setClickedButtonUuid4(clickedButtonID: string): void {
        this.clickedButtonUuidV4.next(clickedButtonID);
    }

}
