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
        'Alpha Corp', 'Beta LLC', 'Gamma Inc', 'Delta Ltd', 'Epsilon PLC',
        'Zeta Group', 'Eta Co', 'Theta Enterprises', 'Iota Partners', 'Kappa Holdings'
        ];

        for (let i = 0; i < numberCompanies; i++) {
        const id = i + 1;
        const title = companies[Math.floor(Math.random() * companies.length)];
        this.contactItems.push({ id, title });
        }
    }
}
