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

    companyItems: Company[] = [];
    selectedCompany!: Company;

    selectedCompanyId: number | null = null;
    sortOrder: string = 'asc';

    constructor ( private route: ActivatedRoute, private companyService: CompanyService ) {
    }

    ngOnInit(): void {
        this.getCompanies();

        this.route.queryParams.subscribe(params => {
            this.searchTerm = params['searchTerm'] || '';
                if(this.searchTerm) {
                    // console.log('searchTerm = true: ' + this.searchTerm);
                    this.applyFilter();
                } else {
                    // console.log('searchTerm = false: ' + this.searchTerm);
                    this.getCompanies();
                }
        });
    }

    /**
     * Get all companies from mock-data and set them to the companyItems-array
     */
    getCompanies(): void {
        this.companyService.getCompanies().subscribe((data: Company[]) => {
            this.companyItems = data;
            this.sortCompanyItems();
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
        this.companyItems = this.companyItems
            .sort((a, b) => {
                if (this.sortOrder === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
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
