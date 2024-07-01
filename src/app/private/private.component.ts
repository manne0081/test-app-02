import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMenuTestComponent } from './header-menu-test/header-menu-test.component';
import { HeaderMenuTest2Component } from './header-menu-test-2/header-menu-test-2.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';

import { CompanyService } from './contact/company/company.service';

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
        FormsModule,
    ],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss'
})

export class PrivateComponent implements OnInit {
    selectedValueFromMainMenu: string = '';
    quicklinksVisible?: boolean;
    addInfoVisible?: boolean;
    searchTerm: string = '';
    addInfoContent: string = '';

    private companySubscription!: Subscription;

    toggleMenuTitel?: string;
    menu1: boolean = false;
    menu2: boolean = true;
    menu3: boolean = false;

    constructor( private router: Router, private route: ActivatedRoute, private companyService: CompanyService ) {
    }

    ngOnInit(): void {
        this.toggleQuicklinkVisibility();
        this.toggleAddInfoVisibility();
        this.onMainMenuSelectionChanged('Dashboard');

        // Abonniere den selectedCompany$ Observable
        this.companySubscription = this.companyService.selectedCompany$.subscribe((company) => {
            if (company) {
                this.addInfoContent = company.title;
            } else {
                this.addInfoContent = '';
            }
        });

        // testing toggl header menu
        this.setButtonTitle();
    }

    ngOnDestroy(): void {
        // Unsubscribe to avoid memory leaks
        if (this.companySubscription) {
          this.companySubscription.unsubscribe();
        }
      }

    onMainMenuSelectionChanged(selectedValue: string) {
        this.selectedValueFromMainMenu = selectedValue;
    }

    toggleQuicklinkVisibility(): void {
        this.quicklinksVisible = !this.quicklinksVisible;
    }

    toggleAddInfoVisibility(): void {
        this.addInfoVisible = !this.addInfoVisible;
    }

    toggleMenu(): void {
        // this.menu1 = !this.menu1;
        this.menu2 = !this.menu2;
        this.menu3 = !this.menu3;

        this.setButtonTitle();
    }

    setButtonTitle(): void {
        if (this.menu3) {
            this.toggleMenuTitel = "Toggle menu to Menu-2";
        } else {
            this.toggleMenuTitel = "Toggle menu to Menu-3";
        }
    }

    onSearchTermChanged(term: string) {
        this.searchTerm = term;
        this.updateRoute();
    }

    removeSearchTerm(): void {
        this.searchTerm = '';
        this.updateRoute();
    }

    updateRoute(): void {
        this.router.navigate([], {
            queryParams: { searchTerm: this.searchTerm },
            queryParamsHandling: 'merge',
        })
    }

    receiveCompanyInfo(company: { id: number, title: string }): void {
        console.log('Received company: ', company);
        // Hier kannst du die Eigenschaften des Unternehmens verwenden
        // this.addInfoContent = `Company Name: ${company.title}, ID: ${company.id}`;
    }
}
