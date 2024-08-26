import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Company, COMPANY_MOCK,
         Task, TASK_MOCK, } from './private-data';

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    activeObject: any[] = [];

    getCompanies(): Observable<Company[]> {
        return of(COMPANY_MOCK);
    }

    getTasks(): Observable<Task[]> {
        return of(TASK_MOCK);
    }

    setActiveObject(activeObject: any) {
        this.activeObject = activeObject;

        console.log('private.service');
        console.log(activeObject);

        const fieldNames = Object.keys(activeObject[0]);
        console.log('Feldnamen:', fieldNames); // ['id', 'number', 'name', 'category']
    }

}

