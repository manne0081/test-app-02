import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Company, COMPANY_MOCK,
         Task, TASK_MOCK, } from './private-data';

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    companyItems: any[] = [];

    getCompanies(): Observable<Company[]> {
        return of(COMPANY_MOCK);
    }

    getTasks(): Observable<Task[]> {
        return of(TASK_MOCK);
    }



}

