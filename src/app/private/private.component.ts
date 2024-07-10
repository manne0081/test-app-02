import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownComponent } from './_test/shared/dropdown/dropdown.component';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMenuTestComponent } from './header-menu-test/header-menu-test.component';
import { HeaderMenuTest2Component } from './header-menu-test-2/header-menu-test-2.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { AddInfoComponent } from './add-info/add-info.component';

import { PrivateService } from './private.service';
import { Company } from './contact/company/company';
import { CompanyService } from './contact/company/company.service';
import { Task } from './workspace/task/task';
import { TaskService } from './workspace/task/task.service';

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderMenuComponent,
        HeaderMenuTestComponent,
        HeaderMenuTest2Component,
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

    selectedCompany: Company | null = null;
    selectedTask: Task | null = null;
    addInfoObject: any = '';

    menu2: boolean = true;
    menu3: boolean = false;

    constructor( private router: Router,
                 private privateService: PrivateService,
                 private companyService: CompanyService,
                 private taskService: TaskService ) {
    }

    ngOnInit(): void {
        this.toggleQuicklinkVisibility();
        this.toggleAddInfoVisibility();
        this.onMainMenuSelectionChanged('Dashboard');
        this.router.navigate(['private/dashboard']);
        console.log(this.selectedValueFromMainMenu);
        // this.setAddInfoObject();
    }

    setAddInfoObject(menuItem?: string): void {
        var log: string = 'private.component - setAddInfoObject - ';
        switch (menuItem) {
            case 'Unternehmen':
                console.log(log + 'case: Unternehmen');
                this.companyService.selectedCompany$.subscribe({
                    next: (company) => {
                        this.selectedCompany = company;
                        this.addInfoObject = company;
                        // console.log('Company data received 1:', company);
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
                console.log(log + 'case: default');
                break;
        }
    }

    toggelMenu():void {
        this.menu2 = !this.menu2
        this.menu3 = !this.menu3
    }

    onMainMenuSelectionChanged(menuItem: string) {
        this.privateService.selectMenu(menuItem);
        this.selectedValueFromMainMenu = menuItem;
        this.setAddInfoObject(menuItem);
        this.addInfoObject = '';
    }

    toggleQuicklinkVisibility(): void {
        this.quicklinksVisible = !this.quicklinksVisible;
    }

    toggleAddInfoVisibility(): void {
        this.addInfoVisible = !this.addInfoVisible;
    }

    /**
     * Sets the searching-term for searching and showing the companies
     * @param term
     */
    onSearchTermChanged(term: string) {
        this.searchTerm = term;
        this.updateRoute();
    }

    /**
     *
     */
    updateRoute(): void {
        this.router.navigate([], {
            queryParams: { searchTerm: this.searchTerm },
            queryParamsHandling: 'merge',
        })
    }

    /**
     * removes the searching-term and the additional-informations
     */
    removeSearchTerm(): void {
        this.searchTerm = '';
        this.updateRoute();
    }
}
