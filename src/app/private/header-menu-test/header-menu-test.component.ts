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

    menuItems: { name: string, iconClass: string, hasDropdown: boolean, hasTitle: boolean, title?: string, status?: string, showDropdown?: boolean, isFavorite?: boolean, buttonRef?: ElementRef, dropdownRef?: ElementRef, hasLink: boolean, route?: string } [] = [
        { name: 'searching', iconClass: 'icon-search', hasDropdown: true, showDropdown: false, hasTitle: false, hasLink: false },
        { name: 'favorites', iconClass: 'icon-star', hasDropdown: true, showDropdown: false, hasTitle: false, status: 'pre-active', isFavorite: true, hasLink: false },
        { name: 'dashboard', iconClass: 'icon-grid', hasDropdown: false, hasTitle: true, title: 'Dashboard', status: 'active', hasLink: true, route: '/private/dashboard' },
        { name: 'workspace', iconClass: 'icon-pencilwrench', hasDropdown: true, hasTitle: true, title: 'Workspace', showDropdown: false, status: 'post-active', hasLink: false },
        { name: 'contacts', iconClass: 'icon-group', hasDropdown: true, hasTitle: true, title: 'Kontakte', showDropdown: false, hasLink: false },
        { name: 'placeholder', iconClass: '', hasDropdown: true, showDropdown: false, hasTitle: false, hasLink: false },
    ]

    menuSubItems: { parentName: string, name: string, title: string, isFavorite: boolean, route: string } [] = [
        { parentName: 'workspace', name: 'task', title: 'Aufgaben', isFavorite: false, route: '/private/task' },
        { parentName: 'workspace', name: 'planner', title: 'Planner', isFavorite: false, route: '/private/planner' },
        { parentName: 'workspace', name: 'campagne', title: 'Kampagnen', isFavorite: false, route: '/private/campagne' },
        { parentName: 'workspace', name: 'email', title: 'E-Mail', isFavorite: false, route: '/private/email' },

        { parentName: 'contacts', name: 'company', title: 'Unternehmen', isFavorite: false, route: '/private/company' },
        { parentName: 'contacts', name: 'supplier', title: 'Lieferanten', isFavorite: false, route: '/private/supplier' },
        { parentName: 'contacts', name: 'contact', title: 'Ansprechpartner', isFavorite: false, route: '/private/contact' },
        { parentName: 'contacts', name: 'user', title: 'Benutzer', isFavorite: false, route: '/private/user' },
        { parentName: 'contacts', name: 'module-auth', title: 'Modulberechtigungen', isFavorite: false, route: '/private/module-auth' },
        { parentName: 'contacts', name: 'company-wiki', title: 'Unternehmens-Wiki', isFavorite: false, route: '/private/company-wiki' },
        { parentName: 'contacts', name: 'debitor-data', title: 'Debitor Daten', isFavorite: false, route: '/private/debitor-data' },
        { parentName: 'contacts', name: 'address', title: 'Adressen', isFavorite: false, route: '/private/address' },
    ]

    constructor (private router: Router, private eRef: ElementRef) {
    }

    ngOnInit(): void {
        // Add some items to favorite for testing
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
                        isFavorite: true,
                        route: item.route,
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

    /**
     * Changes the CSS-Classes from the active / pre-active / post-active menu-item
     * @param url
     */
    setItemClass(name: string): void {

        if (name == 'searching') {
            console.log("Funktion wird unterbrochen.");
            return;
        }

        this.menuItems.forEach((item) => {
            item.status = '';
        });

        this.menuItems.forEach((item, index) => {

            if (item.name === name) {
                item.status = 'active';

                // Set 'pre-active' for the previous item if it exists
                if (index > 0) {
                    this.menuItems[index - 1].status = 'pre-active';
                    // console.log(`Previous item at index ${index - 1} set to 'pre-active'.`);
                }

                // Set 'post-active' for the next item if it exists
                if (index < this.menuItems.length - 1) {
                    this.menuItems[index + 1].status = 'post-active';
                    // console.log(`Next item at index ${index + 1} set to 'post-active'.`);
                } else {
                    console.log(`Next item at index ${index + 1} does not exist.`);
                }
            }
        });
    }

}
