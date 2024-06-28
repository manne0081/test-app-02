import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-header-menu-test',
    standalone: true,
    imports: [CommonModule,
              RouterModule,
            ],
    templateUrl: './header-menu-test.component.html',
    styleUrl: './header-menu-test.component.scss'
})

export class HeaderMenuTestComponent implements OnInit {
    @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();

    menuItems: { name: string, iconClass: string, hasDropdown: boolean, title?: string, status?: string, showDropdown?: boolean } [] = [
        { name: 'searching', iconClass: 'icon-search', hasDropdown: true, showDropdown: false },
        { name: 'favorites', iconClass: 'icon-star', hasDropdown: true, showDropdown: false, status: 'pre-active'  },
        { name: 'dashboard', iconClass: 'icon-grid', hasDropdown: false, status: 'active' },
        { name: 'workspace', iconClass: 'icon-pencilwrench', hasDropdown: true, showDropdown: true, status: 'post-active'  },
        { name: 'contacts', iconClass: 'icon-group', hasDropdown: true, showDropdown: false },
        { name: 'placeholder', iconClass: '', hasDropdown: true, showDropdown: false },
    ]

    menuSubItems: {parentName: string, name: string, title: string} [] = [
        {parentName: 'workspace', name: 'task', title: 'Aufgaben'},
        {parentName: 'workspace', name: 'planner', title: 'Planner'},
        {parentName: 'workspace', name: 'campagne', title: 'Kampagnen'},
        {parentName: 'workspace', name: 'email', title: 'E-Mail'},
    ]




    constructor (private router: Router) {
    }

    ngOnInit(): void {
    }

}
