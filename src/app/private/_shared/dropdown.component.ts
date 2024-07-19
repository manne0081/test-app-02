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

    filterCondition: { name: string, label: string } [] = [
        { name: 'Name', label: 'Where' },
        { name: 'Test', label: 'and' },
    ];
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
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
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
        if (type === 'field') {
            this.showFieldSelect = !this.showFieldSelect;
            this.showOperatorSelect = false;
        } else if (type === 'operator') {
            this.showOperatorSelect = !this.showOperatorSelect;
            this.showFieldSelect = false;
        }
    }

    selectField(field: string): void {
        this.showFieldSelect = false;
        console.log('Selected field:', field);
    }

    selectOperator(operator: string): void {
        this.showOperatorSelect = false;
        console.log('Selected operator:', operator);
    }

    addCondition(): void {
        console.log('Add condition clicked');
    }

    addConditionGroup(): void {
        console.log('Add condition group clicked');
    }



}
