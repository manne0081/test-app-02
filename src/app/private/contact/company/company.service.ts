import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CompanyService {
    private selectedCompanySubject = new BehaviorSubject<{ id: number; title: string } | null>(null);
    selectedCompany$ = this.selectedCompanySubject.asObservable();

    constructor() { }

    onSelectCompany(company: { id: number; title: string }) {
        this.selectedCompanySubject.next(company);
    }
}
