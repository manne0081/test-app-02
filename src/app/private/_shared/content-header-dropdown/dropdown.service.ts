import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DropdownService {
    private openDropdownId = new BehaviorSubject<string | null>(null);

    filterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [
        { index: 0, label: 'Where', name: 'Name', condition: 'contains', value: 'Solution' },
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
        // this.filterConditions[index] = { label: index === 0 ? 'Where' : 'and', name, condition, value };
    }

    addFilterCondition(): void {
        var newIndex: number = this.filterConditions.length;
        this.filterConditions.push({ index: newIndex, label: 'and', name: '', condition: '', value: '' });
    }
}
