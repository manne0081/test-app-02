import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DropdownService {
    private openDropdownId = new BehaviorSubject<string | null>(null);

    constructor() { }

    getOpenDropdownId() {
        return this.openDropdownId.asObservable();
    }

    setOpenDropdownId(id: string | null) {
        this.openDropdownId.next(id);
    }

}
