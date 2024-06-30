import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    contactItems: { id: number, title: string } [] = [
    ]

    ngOnInit(): void {
        this.generateCompanyItems();
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
}
