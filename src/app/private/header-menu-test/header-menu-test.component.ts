import { Component, OnInit, EventEmitter, Output, ViewChild, Input, HostListener, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-header-menu-test',
    standalone: true,
    imports: [CommonModule,
              RouterModule,
            ],
    templateUrl: './header-menu-test.component.html',
    styleUrl: './header-menu-test.component.scss'
})

export class HeaderMenuTestComponent implements AfterViewInit {
    @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @ViewChildren('dropdownButton') buttons!: QueryList<ElementRef>;
    @ViewChildren('dropdown') dropdowns!: QueryList<ElementRef>;

    menuItems: { name: string, iconClass: string, hasDropdown: boolean, hasTitle: boolean, title?: string, status?: string, showDropdown?: boolean, isFavorite?: boolean, buttonRef?: ElementRef, dropdownRef?: ElementRef } [] = [
        { name: 'searching', iconClass: 'icon-search', hasDropdown: true, showDropdown: false, hasTitle: false },
        { name: 'favorites', iconClass: 'icon-star', hasDropdown: true, showDropdown: false, hasTitle: false, status: 'pre-active', isFavorite: true },
        { name: 'dashboard', iconClass: 'icon-grid', hasDropdown: false, hasTitle: true, title: 'Dashboard', status: 'active' },
        { name: 'workspace', iconClass: 'icon-pencilwrench', hasDropdown: true, hasTitle: true, title: 'Workspace', showDropdown: false, status: 'post-active'  },
        { name: 'contacts', iconClass: 'icon-group', hasDropdown: true, hasTitle: true, title: 'Kontakte', showDropdown: false },
        { name: 'placeholder', iconClass: '', hasDropdown: true, showDropdown: false, hasTitle: false },
    ]

    menuSubItems: { parentName: string, name: string, title: string, isFavorite: boolean } [] = [
        { parentName: 'workspace', name: 'task', title: 'Aufgaben', isFavorite: false },
        { parentName: 'workspace', name: 'planner', title: 'Planner', isFavorite: false },
        { parentName: 'workspace', name: 'campagne', title: 'Kampagnen', isFavorite: false },
        { parentName: 'workspace', name: 'email', title: 'E-Mail', isFavorite: false },

        { parentName: 'contacts', name: 'company', title: 'Unternehmen', isFavorite: false },
        { parentName: 'contacts', name: 'supplier', title: 'Lieferanten', isFavorite: false },
        { parentName: 'contacts', name: 'contact', title: 'Ansprechpartner', isFavorite: false },
    ]

    constructor (private router: Router, private eRef: ElementRef) {
    }

    ngOnInit(): void {
        this.toggleFavorite('task');
        this.toggleFavorite('company');
    }

    ngAfterViewInit() {
        if (this.buttons && this.buttons.toArray().length > 0) {
            this.buttons.forEach((button, index) => {
                // console.log(`Assigning buttonRef for index ${index}`);
                this.menuItems[index].buttonRef = button;
            });
        } else {
            console.error('Buttons QueryList is not initialized or empty');
        }

        if (this.dropdowns && this.dropdowns.toArray().length > 0) {
            this.dropdowns.forEach((dropdown, index) => {
                // console.log(`Assigning dropdownRef for index ${index}`);
                this.menuItems[index].dropdownRef = dropdown;
            });
        } else {
            console.error('Dropdowns QueryList is not initialized or empty');
        }
    }

    /**
     * Open the dropdown by clicking the header-menu-buttons
     * @param name
     */
    openDropdown(name: string): void {
        this.closeAllDropdowns();

        this.menuItems.forEach((item, index) => {
            // console.log('openDropdown > menu-items: ' + item.name);
            if (item.name == name) {
                console.log('item.name: ' + item.name + '  -  name: ' + name);
                if (item.hasDropdown) {
                    item.showDropdown = true;
                }
            }
        });
    }

    /**
     * Closing all dropdowns from the header-menu
     */
    closeAllDropdowns() {
        this.menuItems.forEach(item => {
            item.showDropdown = false;
        });
    }

    /**
    * Toggles the favorites icon at the menu-sub-items
    * @param name
    */
    toggleFavorite(name: string) {
        this.menuSubItems.forEach(item => {
            if (item.name === name) {
                // Mark the subMenuItem
                item.isFavorite = !item.isFavorite;

                // Add the subMenuItem to the favorites-array
                if (item.isFavorite) {
                    const favoriteItem = {
                        parentName: 'favorites',
                        name: item.name,
                        title: item.title,
                        isFavorite: true
                    };
                    this.menuSubItems.push(favoriteItem);
                } else {
                    this.menuSubItems = this.menuSubItems.filter(subItem =>
                        !(subItem.parentName === 'favorites' && subItem.name === item.name)
                    );
                }
            }
        });
    }

    /**
     * Close the opened dropdowns when klicking outside of the dropdown
     * @param event
     */
    @HostListener('document:click', ['$event'])
    onClickOutsid(event: Event) {
        const target = event.target as HTMLElement;

        this.menuItems.forEach(item => {
            if (item.showDropdown &&
                item.dropdownRef &&
                item.buttonRef &&
                !item.dropdownRef.nativeElement.contains(target) &&
                !item.buttonRef.nativeElement.contains(target)) {
                item.showDropdown = false;
            }
        });
    }

}
