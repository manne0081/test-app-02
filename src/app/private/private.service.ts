import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    private clickedButtonId = new BehaviorSubject<any>(null);
    clickedButtonId$ = this.clickedButtonId.asObservable();

    setOpenedDropdownId(clickedButtonId: string): void {
        // console.log('ps - ElementID: ' + clickedButtonId);
        this.clickedButtonId.next(clickedButtonId);
    }
}
