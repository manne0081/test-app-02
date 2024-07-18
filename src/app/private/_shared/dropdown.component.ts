import { Component, OnInit, OnDestroy, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DropdownService } from './dropdown.service';

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})

export class DropdownComponent implements OnInit, OnDestroy{
    @Input() buttonText: string = '';
    @Input() dropdownId: string = '';

    showDropContent: boolean = false;
    private subscription: Subscription = new Subscription();

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
}
