import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';

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

    // private companySubscription!: Subscription;

    private subscriptions: Subscription[] = [];
    selectedValueFromMainMenu: string = '';
    quicklinksVisible?: boolean;
    addInfoVisible?: boolean;
    searchTerm: string = '';
    addInfoObject: any = '';

    menu2: boolean = true;
    menu3: boolean = false;

    constructor( private router: Router, private route: ActivatedRoute, private companyService: CompanyService ) {
    }

    ngOnInit(): void {
        this.toggleQuicklinkVisibility();
        this.toggleAddInfoVisibility();
        this.onMainMenuSelectionChanged('Dashboard');
        this.router.navigate(['private/dashboard']);

        // Subscribe the selectedCompany$ observable - gets the selected company and shows the additional-infos
        // ----------------------------------------------------------------------------------------------------
        // this.companySubscription = this.companyService.selectedCompany$.subscribe((company) => {
        //     if (company) {
        //         this.addInfoContent = company;
        //     } else {
        //         this.addInfoContent = '';
        //     }
        // });
    }

    toggelMenu():void {
        this.menu2 = !this.menu2
        this.menu3 = !this.menu3
    }

    ngOnDestroy(): void {
        // Unsubscribe to avoid memory leaks > KANN VERMUTLICH WEG, WENN ALLES UMGESTELLT IST
        // if (this.companySubscription) {
        //   this.companySubscription.unsubscribe();
        // }
    }

    onMainMenuSelectionChanged(selectedValue: string) {
        this.selectedValueFromMainMenu = selectedValue;
        this.addInfoObject = '';

        console.log('onMainMenuSelectionChanged - param : ' + selectedValue);
        this.unsubscribeAll();

        switch (selectedValue) {
            case 'companies':
                this.subscribeToObservable(this.companyService.getSelectedCompany());
                break;
            // Füge hier weitere Fälle für andere Objekte hinzu
            default:
                break;
        }
    }

    private subscribeToObservable(observable: Observable<any>): void {
        const subscription = observable.subscribe((data) => {
            this.addInfoObject = data ? data : '';
            console.log('subscribeToObservable - data: ' + data);
        });

        this.subscriptions.push(subscription);
    }

    private unsubscribeAll(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.subscriptions = [];
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
