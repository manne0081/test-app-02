import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DropContentFilterService {
    activeFilterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [
        { index: 0, label: 'Where', name: 'Bitte wählen...', condition: 'Bitte wählen...', value: 'Bitte eingeben...' },
    ];
    private newFilterConditionIndex: number = 0;

    constructor() { }

    getFilterConditions(): any {
        return this.activeFilterConditions;
    }

    addFilterCondition(): void {
        // let newIndex = this.filterConditions[this.filterConditions.length - 1].index + 1;    // Example -> Navigate to the last array entry
        this.newFilterConditionIndex++;
        this.activeFilterConditions.push({ index: this.newFilterConditionIndex, label: 'and', name: '', condition: '', value: '' });
        // console.log('newIndex: ', this.newFilterConditionIndex);
    }

    removeFilter(index: number): void {
        const arrayIndex = this.activeFilterConditions.findIndex(filter => filter.index === index);
        if (arrayIndex !== -1) {
            this.activeFilterConditions.splice(arrayIndex, 1);
        }
    }
}
