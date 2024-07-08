import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMenuTestComponent } from './header-menu-test/header-menu-test.component';
import { HeaderMenuTest2Component } from './header-menu-test-2/header-menu-test-2.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';

import { PrivateService } from './private.service';
import { CompanyService } from './contact/company/company.service';
import { AddInfoComponent } from './add-info/add-info.component';
import { Company } from './contact/company/company';

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderMenuComponent,
        HeaderMenuTestComponent,
        HeaderMenuTest2Component,
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
    addInfoObject: any = '';

    menu2: boolean = true;
    menu3: boolean = false;

    constructor( private router: Router,
                 private privateService: PrivateService,
                 private companyService: CompanyService ) {
    }

    ngOnInit(): void {
        this.toggleQuicklinkVisibility();
        this.toggleAddInfoVisibility();
        this.onMainMenuSelectionChanged('Dashboard');
        this.router.navigate(['private/dashboard']);

        this.companyService.selectedCompany$.subscribe({
            next: (company) => {
                this.selectedCompany = company;
                this.addInfoObject = company;
                // console.log('Company data received 1:', company);
            }
        });
    }

    toggelMenu():void {
        this.menu2 = !this.menu2
        this.menu3 = !this.menu3
    }

    onMainMenuSelectionChanged(menuItem: string) {
        // console.log(menuItem);
        this.privateService.selectMenu(menuItem);
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
        this.addInfoObject = '';
        this.searchTerm = '';
        this.updateRoute();
    }
}
