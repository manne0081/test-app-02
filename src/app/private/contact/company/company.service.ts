import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Company, COMPANY_MOCK } from './company';

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
        // this.selectedCompanySubject.next(company);
    }

    setSelectedCompany(company: Company): void {
        console.log('company.service - setSelectedCompany: ' + company.name);
        this.selectedCompanySubject.next(company);
    }

    getSelectedCompany(): Observable<Company | null> {
        return this.selectedCompany$;
    }
}
