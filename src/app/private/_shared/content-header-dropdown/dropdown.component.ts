import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DropdownService } from './dropdown.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dropdown-1',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})

export class DropdownComponentOne implements OnInit, OnDestroy{
    @Input() buttonText: string = '';
    @Input() dropdownId: string = '';

    private subscription: Subscription = new Subscription();

    showDropContent: boolean = false;

    showFieldSelect: boolean = false;
    showOperatorSelect: boolean = false;

    filterValue: string = '';

    filterConditions: { index: number, label: string, name: string, condition: string, value: string } [] = [];
    sortCondition: string[] = [];
    groupCondition: string[] = [];

    constructor(
        private dropdownService: DropdownService,
    ) {}

    ngOnInit(): void {
        this.subscription = this.dropdownService.getOpenDropdownId().subscribe(id => {
            this.showDropContent = this.dropdownId === id;
        });

        // For the first line
        this.getFilterConditions();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getFilterConditions(): void {
        this.filterConditions = this.dropdownService.getFilterConditions();
    }

    /**
     *
     * @param event
     */
    onClickItem(event: Event): void {
        event.stopPropagation();    // prevents the event from being propagated further upwards to the document:click (@HostListener)
        this.showDropContent = !this.showDropContent;
        this.dropdownService.setOpenDropdownId(this.showDropContent ? this.dropdownId : null);
    }

    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event): void {
        const target = event.target as HTMLElement;

        if (!target.closest('.drop-content-container')) {
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

    addCondition(event: Event): void {
        // console.log('Add condition clicked');
        event.stopPropagation();
        this.dropdownService.addFilterCondition();
        this.getFilterConditions();
    }

    removeCondition(event: Event, index: number): void {
        event.stopPropagation();
        this.dropdownService.removeFilter(index);
        this.getFilterConditions();
    }

    addConditionGroup(): void {
        console.log('Add condition-group clicked');
    }
}
