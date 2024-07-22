import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DropdownService {
    private openDropdownId = new BehaviorSubject<string | null>(null);
    private newFilterConditionIndex: number = 0;

    filterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [
        { index: 0, label: 'Where', name: 'Name', condition: 'Contains', value: 'Solution' },
    ];

    constructor() { }

    getFilterConditions(): any {
        return this.filterConditions;
    }

    getOpenDropdownId() {
        return this.openDropdownId.asObservable();
    }

    setOpenDropdownId(id: string | null) {
        this.openDropdownId.next(id);
    }

    addFilterCondition(): void {
        // let newIndex = this.filterConditions[this.filterConditions.length - 1].index + 1;    // Example -> Navigate to the last array entry
        this.newFilterConditionIndex++;
        this.filterConditions.push({ index: this.newFilterConditionIndex, label: 'and', name: '', condition: '', value: '' });
        console.log('newIndex: ', this.newFilterConditionIndex);
    }

    removeFilter(index: number): void {
        const arrayIndex = this.filterConditions.findIndex(filter => filter.index === index);
        if (arrayIndex !== -1) {
            this.filterConditions.splice(arrayIndex, 1);
        }
    }

    updateFilterCondition(index: number, name: string, condition: string, value: string): void {
        // this.filterConditions[index] = { label: index === 0 ? 'Where' : 'and', name, condition, value };
    }


}
