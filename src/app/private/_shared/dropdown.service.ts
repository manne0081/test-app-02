import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DropdownService {
    private openDropdownId = new BehaviorSubject<string | null>(null);

    filterConditions: { label: string, name: string, condition: string, value: string } [] = [
        { label: 'Where', name: 'Name', condition: 'contains', value: 'Solution' },
    ];

    constructor() { }

    getOpenDropdownId() {
        return this.openDropdownId.asObservable();
    }

    getFilterConditions(): any {
        return this.filterConditions;
    }

    setOpenDropdownId(id: string | null) {
        this.openDropdownId.next(id);
    }

    setFilterCondition(index: number, name: string, condition: string, value: string): void {
        this.filterConditions[index] = { label: index === 0 ? 'Where' : 'and', name, condition, value };
    }

    addFilterCondition(): void {
        this.filterConditions.push({ label: 'and', name: '', condition: '', value: '' });
    }
}
