import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DropdownService } from './dropdown.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})

export class DropdownComponent implements OnInit, OnDestroy{
    @Input() buttonText: string = '';
    @Input() dropdownId: string = '';

    showDropContent: boolean = false;

    showFieldSelect: boolean = false;
    showOperatorSelect: boolean = false;
    filterValue: string = '';

    filterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [];

    sortCondition: string[] = [];
    groupCondition: string[] = [];

    private subscription: Subscription = new Subscription();

    private static openedDropdownId: string | null = null;

    constructor(
        private dropdownService: DropdownService,
    ) {}

    ngOnInit(): void {
        this.subscription = this.dropdownService.getOpenDropdownId().subscribe(id => {
            this.showDropContent = this.dropdownId === id;
        });
        this.getFilterConditions();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getFilterConditions(): void {
        this.filterConditions = this.dropdownService.getFilterConditions();
    }

    onClickItem(event: Event): void {
        event.stopPropagation();
        this.showDropContent = !this.showDropContent;
        this.dropdownService.setOpenDropdownId(this.showDropContent ? this.dropdownId : null);
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown')) {
            this.showDropContent = false;
            this.dropdownService.setOpenDropdownId(null);
        }
    }

    openSelect(type: string): void {
        // if (type === 'field') {
        //     this.showFieldSelect = !this.showFieldSelect;
        //     this.showOperatorSelect = false;
        // } else if (type === 'operator') {
        //     this.showOperatorSelect = !this.showOperatorSelect;
        //     this.showFieldSelect = false;
        // }
    }

    selectField(field: string, index: number): void {
        // this.showFieldSelect = false;
        // console.log('Selected field:', field);

        // this.dropdownService.setFilterCondition(index, field, this.filterConditions[index].condition, this.filterConditions[index].value);
        // this.showFieldSelect = false;
    }

    selectOperator(operator: string): void {
        // this.showOperatorSelect = false;
        // console.log('Selected operator:', operator);
    }

    addCondition(): void {
        // console.log('Add condition clicked');
        this.dropdownService.addFilterCondition();
        this.getFilterConditions();
    }

    removeCondition(event: Event, index: number): void {
        event.stopPropagation();
        this.filterConditions.splice(index, 1);
        // Update service's filterConditions if needed
    }

    addConditionGroup(): void {
        console.log('Add condition-group clicked');
    }
}
