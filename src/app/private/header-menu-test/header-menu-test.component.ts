import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MenuPositionX } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-header-menu-test',
    standalone: true,
    imports: [MatButtonModule,
              MatMenuModule,
              CommonModule,
              RouterModule,
            ],
    templateUrl: './header-menu-test.component.html',
    styleUrl: './header-menu-test.component.scss'
})

export class HeaderMenuTestComponent {
    @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('animalsTrigger') animalsTrigger!: MatMenuTrigger;

    menuItems: { name: string, title?: string, status?: string } [] = [
        { name: 'searching' },
        { name: 'favorites', status: 'pre-active'  },
        { name: 'dashboard', status: 'active' },
        { name: 'workspace', status: 'post-active'  },
        { name: 'contacts' },
        { name: 'placeholder' },
    ]

    constructor (private router: Router) {
    }

    ngOnInit(): void {
    }

}
