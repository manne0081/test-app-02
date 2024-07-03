import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Company } from './company';
import { COMPANY_MOCK } from './company.mock';

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

    getCompanies(): Observable<Company[]> {
        return of(COMPANY_MOCK);
    }
}
