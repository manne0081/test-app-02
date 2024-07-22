import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { AddInfoComponent } from './add-info/add-info.component';

import { PrivateService } from './private.service';
import { Company } from './contact/company/company';
import { CompanyService } from './contact/company/company.service';
import { Task } from './workspace/task/task';
import { TaskService } from './workspace/task/task.service';
import { QuicklinksService } from './quicklinks/quicklinks.service';

import { DropdownComponent } from './_shared/content-header-dropdown/dropdown.component';

interface FilterItem {
    id: number | string;
    name: string;
}

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HeaderMenuComponent,
        QuicklinksComponent,
        AddInfoComponent,
        DropdownComponent,
    ],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss'
})

export class PrivateComponent implements OnInit {
    selectedValueFromMainMenu: string | null = null;
    quicklinksVisible?: boolean;
    addInfoVisible?: boolean;

    selectedCompany: Company | null = null;
    selectedTask: Task | null = null;
    addInfoObject: any = '';

    searchTerm: string = '';
    sortingTerm: string = '';

    filterItems: FilterItem[] = [
        // { id: 0, name: 'wip-1' },
        // { id: 1, name: 'wip-2' },
    ];
    idFilterItemSearchValue: number = 0;

    constructor( private router: Router,
                 private route: ActivatedRoute,
                 private privateService: PrivateService,
                 private companyService: CompanyService,
                 private taskService: TaskService,
                 private quicklinkService: QuicklinksService,
                ) {
    }

    ngOnInit(): void {
        this.toggleQuicklinkVisibility();
        this.toggleAddInfoVisibility();
        this.onSelectMenuItem('Dashboard');
        this.router.navigate(['private/dashboard']);

        this.quicklinkService.selectedQuicklink$.subscribe(item => {
            this.onSelectQuicklink(item);
        });

        this.route.queryParams.subscribe(params => {
            this.searchTerm = params['searchTerm'] || '';
        });
    }

    /**
     *
     * @param menuItem
     */
    setAddInfoObject(menuItem?: string): void {
        var log: string = 'private.component - setAddInfoObject - ';
        switch (menuItem) {
            case 'Unternehmen':
                // console.log(log + 'case: Unternehmen');
                this.companyService.selectedCompany$.subscribe({
                    next: (company) => {
                        if (company) {
                            this.selectedCompany = company;
                            this.addInfoObject = company;
                        }
                    }
                });
                break;
            case 'Aufgaben':
                // console.log(log + 'case: Aufgaben');
                this.taskService.selectedTask$.subscribe({
                    next: (task) => {
                        this.selectedTask = task;
                        this.addInfoObject = task;
                    }
                });
                break;
            default:
                // console.log(log + 'case: default');
                break;
        }
    }

    /**
     *
     * @param menuItem
     */
    onSelectMenuItem(menuItem: string) {
        this.privateService.selectMenu(menuItem);
        this.selectedValueFromMainMenu = menuItem;
        if (menuItem === 'Dashboard') {
            this.addInfoVisible = false;
        } else {
            this.addInfoVisible = true;
        }
        this.setAddInfoObject(menuItem);
        this.addInfoObject = '';
        this.removeAllFilterItems();
    }

    /**
     *
     * @param item
     */
    onSelectQuicklink(item: any): void {
        this.selectedValueFromMainMenu = item.menuTitle;
        this.addInfoVisible = true;
        this.setAddInfoObject(item.title);
        this.addInfoObject = '';
        this.removeAllFilterItems();
        this.filterItems.push({ id: 'searchTerm', name: item.title });
    }

    /**
     *
     */
    toggleQuicklinkVisibility(): void {
        this.quicklinksVisible = !this.quicklinksVisible;
    }

    /**
     *
     */
    toggleAddInfoVisibility(): void {
        this.addInfoVisible = !this.addInfoVisible;
    }

    /**
     * Sets the searching-term for searching and showing the companies
     * @param event
     */
    onSearchTermChanged(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.searchTerm = inputElement.value;
        this.handleSearchTermChange(event);
        this.updateRoute();
    }

    /**
     *
     * @param event
     */
    handleSearchTermChange(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        const searchTerm = inputElement.value.trim();
        const searchTermItem = this.filterItems.find(item => item.id === 'searchTerm');

        if (searchTerm) {
            if (searchTermItem) {
                // Update the existing searchTerm item
                searchTermItem.name = searchTerm;
            } else {
                // Add a new searchTerm item
                this.filterItems.push({ id: 'searchTerm', name: searchTerm });
            }
        } else if (searchTermItem) {
            // Remove the searchTerm item if the input is empty
            this.filterItems = this.filterItems.filter(item => item.id !== 'searchTerm');
        }
    }

    /**
     *
     * @param index
     */
    removeFilterItem(item: FilterItem): void {
        this.filterItems = this.filterItems.filter(filterItem => item.id !== filterItem.id);
        this.searchTerm = '';
        this.updateRoute();
    }

    /**
     *
     */
    removeAllFilterItems(): void {
        this.filterItems = [];
    }

    /**
     *
     * @param term
     */
    setSortingOrder(term: string) {
        this.sortingTerm = term;
        this.updateRoute();
    }

    /**
     *
     */
    updateRoute(): void {
        console.log('Navigating with:', {
            searchTerm: this.searchTerm,
            sortingTerm: this.sortingTerm
        });
        this.router.navigate([], {
            queryParams: { searchTerm: this.searchTerm, sortingTerm: this.sortingTerm },
            queryParamsHandling: 'merge',
        }).then(success => {
            if (success) {
                // console.log('Navigation successful');
            } else {
                // console.log('Navigation failed');
            }
        });
    }

    /**
     * removes the searching-term and the additional-informations
     */
    removeSearchTerm(): void {
        this.searchTerm = '';
        this.filterItems = this.filterItems.filter(item => item.id !== 'searchTerm');
        this.updateRoute();
    }
}
