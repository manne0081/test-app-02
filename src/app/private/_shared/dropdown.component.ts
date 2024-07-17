import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dropdown',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})

export class DropdownComponent {
    @Input() items: string[] = [];
    @Input() placeholder: string = 'Select an option';

    selectedItem: string | null = null;
    isOpen = false;

    toggleDropdown(event: Event) {
        event.stopPropagation(); // Verhindert das Schließen beim Klicken auf das Dropdown
        this.isOpen = !this.isOpen;
    }

    selectItem(item: string) {
        this.selectedItem = item;
        this.isOpen = false;
    }

    @HostListener('document:click', ['$event'])
    closeDropdown() {
        this.isOpen = false;
    }
}
