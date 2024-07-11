import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Quicklinks, QUICKLINKS_MOCK } from './quicklinks';

@Injectable({
    providedIn: 'root'
})
export class QuicklinksService {
    // private selectedCompanySubject = new BehaviorSubject<Quicklinks | null>(null);
    // selectedCompany$ = this.selectedCompanySubject.asObservable();

    constructor() { }

    getQuicklinks(): Observable<Quicklinks[]> {
        return of(QUICKLINKS_MOCK);
    }
}
