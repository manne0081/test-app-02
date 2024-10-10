import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
    selector: 'app-company',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './company.component.html',
    styleUrl: './company.component.scss'
})

export class CompanyComponent implements OnInit {
    @Input() searchTerm: string = '';
    @Input() sortingTerm: string = '';
    companyItems: Company[] = [];

    selectedCompany!: Company;
    selectedCompanyId: number | null = null;

    constructor (
        private route: ActivatedRoute,
        private companyService: CompanyService ) {
    }

    ngOnInit(): void {
        this.getCompanies();

        this.route.queryParams.subscribe(params => {
            this.sortingTerm = (params['sortingTerm'] || 'name-asc');
            this.searchTerm = params['searchTerm'] || '';
            this.getCompanies();
        });
    }

    /**
     * Get all companies from mock-data and set them to the companyItems-array
     */
    getCompanies(): void {
        this.companyService.getCompanies().subscribe((data: Company[]) => {
            this.companyItems = data;

            this.sortCompanyItems();
            if (this.searchTerm) {
                this.applyFilter();
            }
        });
    }

    /**
     * Takes the companyItems and filter and sort them about the searchTerm variable
     */
    applyFilter(): void {
        this.companyItems = this.companyItems
            .filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        this.sortCompanyItems();
    }

    /**
     *
     */
    sortCompanyItems(): void {
        this.companyItems = this.companyItems.sort((a, b) => {
            if (this.sortingTerm === 'name-asc') {
                return a.name.localeCompare(b.name);
            } else if (this.sortingTerm === 'name-desc') {
                return b.name.localeCompare(a.name);
            } else if (this.sortingTerm === 'id-asc') {
                return a.id - b.id;
            } else if (this.sortingTerm === 'id-desc') {
                return b.id - a.id;
            } else {
                return 0; // Falls kein gültiger Sortierbegriff angegeben ist, bleibt die Reihenfolge unverändert
            }
        });
    }

    /**
     *
     * @param contact
     */
    onSelectCompany(company: Company): void {
        this.companyService.setSelectedCompany(company);
        this.selectedCompanyId = company.id;
    }
}
