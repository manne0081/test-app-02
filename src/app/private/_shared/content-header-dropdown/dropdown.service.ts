import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DropdownService {
    private openedDropdownId = new BehaviorSubject<string | null>(null);
    private newFilterConditionIndex: number = 0;

    activeFilterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [
        { index: 0, label: 'Where', name: 'Bitte wählen...', condition: 'Bitte wählen...', value: 'Bitte eingeben...' },
    ];

    constructor() { }

    getFilterConditions(): any {
        return this.activeFilterConditions;
    }

    getOpenDropdownId() {
        return this.openedDropdownId.asObservable();
    }

    setOpenDropdownId(id: string | null) {
        this.openedDropdownId.next(id);
    }

    addFilterCondition(): void {
        // let newIndex = this.filterConditions[this.filterConditions.length - 1].index + 1;    // Example -> Navigate to the last array entry
        this.newFilterConditionIndex++;
        this.activeFilterConditions.push({ index: this.newFilterConditionIndex, label: 'and', name: '', condition: '', value: '' });
        console.log('newIndex: ', this.newFilterConditionIndex);
    }

    removeFilter(index: number): void {
        const arrayIndex = this.activeFilterConditions.findIndex(filter => filter.index === index);
        if (arrayIndex !== -1) {
            this.activeFilterConditions.splice(arrayIndex, 1);
        }
    }

    updateFilterCondition(index: number, name: string, condition: string, value: string): void {
        // this.filterConditions[index] = { label: index === 0 ? 'Where' : 'and', name, condition, value };
    }


}
