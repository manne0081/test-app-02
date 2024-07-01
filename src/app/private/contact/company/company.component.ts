import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

    contactItems: { id: number, title: string } [] = [
    ]

    searchItems:  { id: number, title: string } [] = []

    constructor ( private route: ActivatedRoute ) {
    }

    ngOnInit(): void {
        this.generateCompanyItems();

        this.route.queryParams.subscribe(params => {
            this.searchTerm = params['searchTerm'] || '';
            this.applyFilter();
        });
    }

    generateCompanyItems(): void {
        const numberCompanies: number = 15;
        const companies: string[] = [
            'Alpha Technologie GmbH',
            'Beta Solutions AG',
            'Gamma Industries KG',
            'Delta Handels OHG',
            'Epsilon Software UG',
            'Zeta Bau GmbH & Co. KG',
            'Eta Logistik GmbH',
            'Theta Immobilien AG',
            'Iota Consulting GmbH',
            'Kappa Electronics SE',
            'Lambda Energie GmbH',
            'Mu Transport AG',
            'Nu Medizintechnik KG',
            'Xi Finanzdienstleistungen OHG',
            'Omikron Maschinenbau UG'
        ];

        for (let i = 0; i < numberCompanies; i++) {
        const id = i + 1;
        const title = companies[Math.floor(Math.random() * companies.length)];
        this.contactItems.push({ id, title });
        }
    }

    applyFilter(): void {
        this.searchItems = this.contactItems.filter(item =>
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }



}
