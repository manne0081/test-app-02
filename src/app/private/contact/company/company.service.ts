import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Company } from './company';
import { COMPANY_MOCK } from './company.mock';

@Injectable({
    providedIn: 'root'
})

export class CompanyService {
    private selectedCompanySubject = new BehaviorSubject<Company | null>(null);
    selectedCompany$ = this.selectedCompanySubject.asObservable();

    constructor() { }

    getCompanies(): Observable<Company[]> {
        return of(COMPANY_MOCK);
    }

    onSelectCompany(company: Company ) {
        this.selectedCompanySubject.next(company);
    }
}
