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

    sortOrder: string = 'asc';

    // filteredItems: { id: number, title: string } [] = []
    companyItems: Company[] = [];
    filteredItems: Company[] = [];
    selectedCompanyId: number | null = null;

    constructor ( private route: ActivatedRoute, private companyService: CompanyService ) {
        // this.generateCompanyItems();
    }

    ngOnInit(): void {
        this.companyService.getCompanies().subscribe((data: Company[]) => {
            this.filteredItems = data;
            console.log('data: ', this.filteredItems);
        });

        if(this.route.queryParams) {
            console.log('params = true');

            // this.route.queryParams.subscribe(params => {
            //     this.searchTerm = params['searchTerm'] || '';
            //     this.applyFilter();
            // });
        }
    }

    /**
     *
     */
    // generateCompanyItems(): void {
    //     const numberCompanies: number = 17;
    //     const companies: string[] = [
    //         'Alpha Technologie GmbH',
    //         'Beta Solutions AG',
    //         'Gamma Industries KG',
    //         'Delta Handels OHG',
    //         'Epsilon Software UG',
    //         'Zeta Bau GmbH & Co. KG',
    //         'Eta Logistik GmbH',
    //         'Theta Immobilien AG',
    //         'Iota Consulting GmbH',
    //         'Kappa Electronics SE',
    //         'Lambda Energie GmbH',
    //         'Mu Transport AG',
    //         'Nu Medizintechnik KG',
    //         'Xi Finanzdienstleistungen OHG',
    //         'Omikron Maschinenbau UG',
    //         'Pi Software Solutions GmbH',
    //         'Rho Finance GmbH',
    //     ];

    //     const shuffledCompanies = companies.sort(() => Math.random() - 0.5);

    //     for (let i = 0; i < numberCompanies; i++) {
    //         const id = i + 1;
    //         const title = shuffledCompanies[i];
    //         this.companyItems.push({ id, title });
    //     }
    // }

    /**
     *
     */
    applyFilter(): void {
        this.filteredItems = this.companyItems
            .filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
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
    onSelectCompany( company: { id: number, title: string } ): void {
        this.companyService.onSelectCompany(company);
        this.selectedCompanyId = company.id;
    }

}
