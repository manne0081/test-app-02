import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { CompanyService } from '../contact/company/company.service';

@Component({
    selector: 'app-add-info',
    standalone: true,
    imports: [],
    templateUrl: './add-info.component.html',
    styleUrl: './add-info.component.scss'
})

export class AddInfoComponent implements OnInit {
    @Input() info: string | null = null;

    constructor(private companyService: CompanyService) {

    }

    ngOnInit(): void {

    }


}
