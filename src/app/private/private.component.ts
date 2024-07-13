import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownComponent } from './_test/shared/dropdown/dropdown.component';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { AddInfoComponent } from './add-info/add-info.component';

import { PrivateService } from './private.service';
import { Company } from './contact/company/company';
import { CompanyService } from './contact/company/company.service';
import { Task } from './workspace/task/task';
import { TaskService } from './workspace/task/task.service';
import { QuicklinksService } from './quicklinks/quicklinks.service';

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderMenuComponent,
        DropdownComponent,
        QuicklinksComponent,
        AddInfoComponent,
        FormsModule,
    ],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss'
})

export class PrivateComponent implements OnInit {
    selectedValueFromMainMenu: string | null = null;
    quicklinksVisible?: boolean;
    addInfoVisible?: boolean;

    searchTerm: string = '';
    sortingTerm: string = '';

    selectedCompany: Company | null = null;
    selectedTask: Task | null = null;
    addInfoObject: any = '';

    constructor( private router: Router,
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
        // console.log(this.selectedValueFromMainMenu);
        // this.setAddInfoObject();

        this.quicklinkService.selectedQuicklink$.subscribe(item => {
            this.onSelectQuicklink(item);
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
                console.log(log + 'case: Unternehmen');
                this.companyService.selectedCompany$.subscribe({
                    next: (company) => {
                        if (company) {
                            this.selectedCompany = company;
                            this.addInfoObject = company;
                            // console.log('Company data received 1:', company);
                        }
                    }
                });
                break;

            case 'Aufgaben':
                console.log(log + 'case: Aufgaben');
                this.taskService.selectedTask$.subscribe({
                    next: (task) => {
                        this.selectedTask = task;
                        this.addInfoObject = task;
                        // console.log('Company data received 1:', company);
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
    }

    onSelectQuicklink(item: any): void {
        this.selectedValueFromMainMenu = item.titel;
        this.addInfoVisible = true;
        this.setAddInfoObject(item.title);
        this.addInfoObject = '';
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
    // onSearchTermChanged(term: string) {
    onSearchTermChanged(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.searchTerm = inputElement.value;
        console.log(this.searchTerm);
        this.updateRoute2();
    }

    /**
     *
     * @param term
     */
    setSortingOrder(term: string) {
        this.sortingTerm = term;
        this.updateRoute();
        // console.log('private.component - setSortingOrder: ' + term);
    }

    /**
     *
     */
    updateRoute(): void {
        this.router.navigate([], {
            queryParams: { searchTerm: this.searchTerm, sortingTerm: this.sortingTerm },
            queryParamsHandling: 'merge',
        })
    }

    updateRoute2(): void {
        console.log('Navigating with:', {
            searchTerm: this.searchTerm,
            sortingTerm: this.sortingTerm
        });
        this.router.navigate([], {
            queryParams: { searchTerm: this.searchTerm, sortingTerm: this.sortingTerm },
            queryParamsHandling: 'merge',
        }).then(success => {
            if (success) {
                console.log('Navigation successful');
            } else {
                console.log('Navigation failed');
            }
        });
    }



    /**
     * removes the searching-term and the additional-informations
     */
    removeSearchTerm(): void {
        this.searchTerm = '';
        this.updateRoute();
    }
}
