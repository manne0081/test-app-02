import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMenuTestComponent } from './header-menu-test/header-menu-test.component';
import { HeaderMenuTest2Component } from './header-menu-test-2/header-menu-test-2.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';

import { CompanyService } from './contact/company/company.service';
import { AddInfoComponent } from './add-info/add-info.component';

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

export class PrivateComponent implements OnInit, OnDestroy {
    selectedValueFromMainMenu: string = '';
    quicklinksVisible?: boolean;
    addInfoVisible?: boolean;
    searchTerm: string = '';
    addInfoContent: string = '';
    private companySubscription!: Subscription;

    menu2: boolean = true;
    menu3: boolean = false;

    constructor( private router: Router, private route: ActivatedRoute, private companyService: CompanyService ) {
    }

    ngOnInit(): void {
        this.toggleQuicklinkVisibility();
        this.toggleAddInfoVisibility();
        this.onMainMenuSelectionChanged('Dashboard');
        this.router.navigate(['private/dashboard']);

        // Subscribe the selectedCompany$ observable
        this.companySubscription = this.companyService.selectedCompany$.subscribe((company) => {
            if (company) {
                this.addInfoContent = company.title;
            } else {
                this.addInfoContent = '';
            }
        });
    }

    toggelMenu():void {
        this.menu2 = !this.menu2
        this.menu3 = !this.menu3
    }

    ngOnDestroy(): void {
        // Unsubscribe to avoid memory leaks
        if (this.companySubscription) {
          this.companySubscription.unsubscribe();
        }
    }

    onMainMenuSelectionChanged(selectedValue: string) {
        this.selectedValueFromMainMenu = selectedValue;
        this.addInfoContent = '';
    }

    toggleQuicklinkVisibility(): void {
        this.quicklinksVisible = !this.quicklinksVisible;
    }

    toggleAddInfoVisibility(): void {
        this.addInfoVisible = !this.addInfoVisible;
    }

    onSearchTermChanged(term: string) {
        this.searchTerm = term;
        this.updateRoute();
    }

    removeSearchTerm(): void {
        this.searchTerm = '';
        this.updateRoute();
        this.addInfoContent = '';
    }

    updateRoute(): void {
        this.router.navigate([], {
            queryParams: { searchTerm: this.searchTerm },
            queryParamsHandling: 'merge',
        })
    }
}
