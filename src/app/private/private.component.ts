import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMenuTestComponent } from './header-menu-test/header-menu-test.component';
import { HeaderMenuTest2Component } from './header-menu-test-2/header-menu-test-2.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
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
    ],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss'
})

export class PrivateComponent {
    selectedValueFromMainMenu: string = '';
    quicklinksVisible?: boolean;
    addInfoVisible?: boolean;

    toggleMenuTitel?: string;
    menu1: boolean = false;
    menu2: boolean = true;
    menu3: boolean = false;

    constructor(private router: RouterModule) {
    }

    ngOnInit(): void {
        this.toggleQuicklinkVisibility();
        this.toggleAddInfoVisibility();
        this.onMainMenuSelectionChanged('Dashboard');
        this.setButtonTitle();
    }

    onMainMenuSelectionChanged(selectedValue: string) {
        this.selectedValueFromMainMenu = selectedValue;
    }

    toggleQuicklinkVisibility(): void {
        this.quicklinksVisible = !this.quicklinksVisible;
    }

    toggleAddInfoVisibility(): void {
        this.addInfoVisible = !this.addInfoVisible;
    }

    toggleMenu(): void {
        // this.menu1 = !this.menu1;
        this.menu2 = !this.menu2;
        this.menu3 = !this.menu3;

        this.setButtonTitle();
    }

    setButtonTitle(): void {
        if (this.menu3) {
            this.toggleMenuTitel = "Toggle menu to Menu-2";
        } else {
            this.toggleMenuTitel = "Toggle menu to Menu-3";
        }
    }

}
