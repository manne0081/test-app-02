import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, HostListener, ElementRef, QueryList, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-header-menu-test-2',
    standalone: true,
    imports: [
        RouterModule,
        CommonModule,
    ],
    templateUrl: './header-menu-test-2.component.html',
    styleUrl: './header-menu-test-2.component.scss'
})

export class HeaderMenuTest2Component implements AfterViewInit {
    @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @ViewChildren('dropdownButton') buttons!: QueryList<ElementRef>;
    @ViewChildren('dropdown') dropdowns!: QueryList<ElementRef>;

    // @ViewChild('dropdownButtonFavorites') dropdownButtonFavorites!: ElementRef;
    // @ViewChild('dropdownFavorites') dropdownFavorites!: ElementRef;
    // @ViewChild('dropdownButtonWorkspace') dropdownButtonWorkspace!: ElementRef;
    // @ViewChild('dropdownWorkspace') dropdownWorkspace!: ElementRef;
    // @ViewChild('dropdownButtonContact') dropdownButtonContact!: ElementRef;
    // @ViewChild('dropdownContact') dropdownContact!: ElementRef;
    // @ViewChild('dropdownButtonOperations') dropdownButtonOperations!: ElementRef;
    // @ViewChild('dropdownOperations') dropdownOperations!: ElementRef;
    // @ViewChild('dropdownButtonOrderProcessing') dropdownButtonOrderProcessing!: ElementRef;
    // @ViewChild('dropdownOrderProcessing') dropdownOrderProcessing!: ElementRef;
    // @ViewChild('dropdownButtonAccounting') dropdownButtonAccounting!: ElementRef;
    // @ViewChild('dropdownAccounting') dropdownAccounting!: ElementRef;
    // @ViewChild('dropdownButtonProductManagement') dropdownButtonProductManagement!: ElementRef;
    // @ViewChild('dropdownProductManagement') dropdownProductManagement!: ElementRef;
    // @ViewChild('dropdownButtonContracting') dropdownButtonContracting!: ElementRef;
    // @ViewChild('dropdownContracting') dropdownContracting!: ElementRef;
    // @ViewChild('dropdownButtonToolsAssets') dropdownButtonToolsAssets!: ElementRef;
    // @ViewChild('dropdownToolsAssets') dropdownToolsAssets!: ElementRef;
    // @ViewChild('dropdownButtonStatisticsReporting') dropdownButtonStatisticsReporting!: ElementRef;
    // @ViewChild('dropdownStatisticsReporting') dropdownStatisticsReporting!: ElementRef;
    // @ViewChild('dropdownButtonTest') dropdownButtonTest!: ElementRef;
    // @ViewChild('dropdownTest') dropdownTest!: ElementRef;

    classFavorite: string ="";
    classDashboard: string ="";
    classWorkspace: string ="";
    classContacts: string ="";
    classOperations: string ="";
    classOrderProcessing: string ="";
    classAccounting: string ="";
    classProductManagement: string ="";
    classContracting: string ="";
    classToolsAssets: string ="";
    classStatisticsReporting: string ="";
    classPlaceholder: string ="";

    // Alt > Kann weg, wenn die neue Art und Weise funktioniert
    showSubFavorites: boolean = false;
    showSubWorkspace: boolean = false;
    showSubContact: boolean = false;
    showSubOperations: boolean = false;
    showSubOrderProcessing: boolean = false;
    showSubAccounting: boolean = false;
    showSubProductManagement: boolean = false;
    showSubContracting: boolean = false;
    showSubToolsAssets: boolean = false;
    showSubStatisticsReporting: boolean = false;
    showSubTest: boolean = false;

    menuItems: { name: string,

                 hasIconOnly?: boolean,
                 iconClass?: string,
                 container1Class?: string,
                 title?: string,
                 class?: string,
                 showSubMenu?: boolean,
                 routerLink?: string,
                 buttonRef?: ElementRef,
                 dropdownRef?: ElementRef } [] = [

                    // { name: 'placeholder', hasIconOnly: false, iconClass: '' },

                    { name: 'searching', hasIconOnly: true, iconClass: 'icon-search',
                      class: '', showSubMenu: false },

                    { name: 'favorites', hasIconOnly: true, iconClass: 'icon-star favorite', container1Class: 'classFavorite',
                      class: 'pre-active', showSubMenu: false },

                    { name: 'dashboard', hasIconOnly: false, iconClass: 'icon-grid menu-icon', title: 'Dashboard', container1Class: 'classDashboard',
                      class: 'active', showSubMenu: false, routerLink: '/private/dashboard' },

                    { name: 'workspace', hasIconOnly: false, iconClass: 'icon-pencilwrench menu-icon', title: 'Workspace', container1Class: 'classWorkspace',
                      class: 'post-active', showSubMenu: false },

                    { name: 'contact', hasIconOnly: false, iconClass: 'icon-group menu-icon', title: 'Kontakte', container1Class: 'classContacts',
                      class: '', showSubMenu: false },

                    { name: 'placeholder', hasIconOnly: false, iconClass: '' },
    ]

    menuSubItems: { name: string, parentName?: string, title: string, class: string, url: string, favorite: boolean, hasDropdown: boolean } [] = [
        // Favorites
        // *********
        { parentName: 'favorites', name: "favorites", title: "Favorites", class: "/private/favorites", url: "/private/favorites", favorite: false, hasDropdown: true },

        // Dashboard
        // *********
        { name: "dashboard", title: "Dashboard", class: "/private/dashboard", url: "/private/dashbaord", favorite: false, hasDropdown: false },

        // Workspace
        // *********
        { name: "task", parentName: 'workspace', title: "Aufgaben", class: "/private/workspace", url: "/private/task", favorite: true, hasDropdown: true },
        { name: "planner", parentName: 'workspace', title: "Planner", class: "/private/workspace", url: "/private/planner", favorite: false, hasDropdown: true },
        { name: "campagne", parentName: 'workspace', title: "Kampangen", class: "/private/workspace", url: "/private/campagne", favorite: false, hasDropdown: true },
        { name: "email", parentName: 'workspace', title: "E-Mail", class: "/private/workspace", url: "/private/email", favorite: false, hasDropdown: true },

        // Contact (as Kontakte)
        // *********************
        { name: "company", parentName: 'contact', title: "Unternehmen", class: "/private/contact", url: "/private/company", favorite: true, hasDropdown: true },
        { name: "supplier", parentName: 'contact', title: "Lieferanten", class: "/private/contact", url: "/private/supplier", favorite: false, hasDropdown: true },
        { name: "contact", parentName: 'contact', title: "Ansprechpartner", class: "/private/contact", url: "/private/contact", favorite: false, hasDropdown: true },
        { name: "user", parentName: 'contact', title: "Benutzer", class: "/private/contact", url: "/private/user", favorite: false, hasDropdown: true },
        { name: "module-auth", parentName: 'contact', title: "Modulberechtigungen", class: "/private/contact", url: "/private/module-auth", favorite: false, hasDropdown: true },
        { name: "company-wiki", parentName: 'contact', title: "Unternehmens-Wiki", class: "/private/contact", url: "/private/company-wiki", favorite: false, hasDropdown: true },
        { name: "debitor-data", parentName: 'contact', title: "Debitor Daten", class: "/private/contact", url: "/private/debitor-data", favorite: false, hasDropdown: true },
        { name: "address", parentName: 'contact', title: "Adressen", class: "/private/contact", url: "/private/address", favorite: false, hasDropdown: true },

        // operations (as Vorgänge & Belege)
        // *********************************
        { name: "verkaufsvorgänge", parentName: 'operations', title: "", class: "/private/operations", url: "/private/sales-transaction", favorite: true, hasDropdown: true },
        { name: "angebote", parentName: 'operations', title: "", class: "/private/operations", url: "/private/offer", favorite: false, hasDropdown: true },
        { name: "aufträge", parentName: 'operations', title: "", class: "/private/operations", url: "/private/order", favorite: false, hasDropdown: true },
        { name: "rechnungen", parentName: 'operations', title: "", class: "/private/operations", url: "/private/invoice", favorite: false, hasDropdown: true },
        { name: "teilaufträge", parentName: 'operations', title: "", class: "/private/operations", url: "/private/partial-order", favorite: false, hasDropdown: true },
        { name: "alleBelege", parentName: 'operations', title: "", class: "/private/operations", url: "/private/document", favorite: false, hasDropdown: true },

        // orderProcessing (as Auftragsabwicklung)
        // ***************************************
        { name: "multipostings", title: "", class: "/private/orderProcessing", url: "/private/multiposting", favorite: true, hasDropdown: true },
        { name: "postings", title: "", class: "/private/orderProcessing", url: "/private/posting", favorite: false, hasDropdown: true },
        { name: "stellenanzeigen", title: "", class: "/private/orderProcessing", url: "/private/advertisements", favorite: false, hasDropdown: true },
        { name: "print", title: "", class: "/private/orderProcessing", url: "/private/print", favorite: false, hasDropdown: true },
        { name: "dienstleistungenSonstiges", title: "", class: "/private/orderProcessing", url: "/private/service", favorite: false, hasDropdown: true },

        // accounting (as Rechnungswesen)
        // ******************************
        { name: "ausgangsrechungen", title: "", class: "/private/accounting", url: "/private/invoice-out", favorite: true, hasDropdown: true },
        { name: "rechnungspositionsgruppen", title: "", class: "/private/accounting", url: "/private/inv-position-group", favorite: false, hasDropdown: true },
        { name: "auftragspositionen", title: "", class: "/private/accounting", url: "/private/order-position", favorite: false, hasDropdown: true },
        { name: "belegsPDFs", title: "", class: "/private/accounting", url: "/private/documents-pdf", favorite: false, hasDropdown: true },
        { name: "eingangsrechnungen", title: "", class: "/private/accounting", url: "/private/invoice-in", favorite: false, hasDropdown: true },

        // productManagement (as Produktverwaltung)
        // ****************************************
        { name: "produkte", title: "", class: "/private/productManagement", url: "/private/product", favorite: true, hasDropdown: true },
        { name: "produktvarianten", title: "", class: "/private/productManagement", url: "/private/product-variant", favorite: false, hasDropdown: true },
        { name: "produktgruppen", title: "", class: "/private/productManagement", url: "/private/product-group", favorite: false, hasDropdown: true },
        { name: "pgvGruppen", title: "", class: "/private/productManagement", url: "/private/product-group-variant", favorite: false, hasDropdown: true },
        { name: "positionsvorlagen", title: "", class: "/private/productManagement", url: "/private/position-template", favorite: false, hasDropdown: true },
        { name: "übertragungswege", title: "", class: "/private/productManagement", url: "/private/trans-path", favorite: false, hasDropdown: true },
        { name: "zusatzangaben", title: "", class: "/private/productManagement", url: "/private/additional-data", favorite: false, hasDropdown: true },

        // Vertragswesen (as contracting)
        // ******************************
        { name: "kundenverträge", title: "", class: "/private/contracting", url: "/private/customer-contract", favorite: true, hasDropdown: true },
        { name: "lieferantenverträge", title: "", class: "/private/contracting", url: "/private/supplier-contract", favorite: false, hasDropdown: true },
        { name: "partnerKonfiguration", title: "", class: "/private/contracting", url: "/private/partner-config", favorite: false, hasDropdown: true },

        // toolsAssets (as Tools & Assets)
        // *******************************
        { name: "smartTemplate", title: "", class: "/private/toolsAssets", url: "/private/smart-template", favorite: true, hasDropdown: true },
        { name: "bewerbungsformulare", title: "", class: "/private/toolsAssets", url: "/private/job-form", favorite: false, hasDropdown: true },
        { name: "schnittstellen", title: "", class: "/private/toolsAssets", url: "/private/interface", favorite: false, hasDropdown: true },
        { name: "globalFonts", title: "", class: "/private/toolsAssets", url: "/private/global-font", favorite: false, hasDropdown: true },

        // statisticsReporting (as Statistik & Reporting)
        // **********************************************
        { name: "umsatzstatistik", title: "", class: "/private/statisticsReporting", url: "/private/sales-statistic", favorite: true, hasDropdown: true },
        { name: "teamstatistik", title: "", class: "/private/statisticsReporting", url: "/private/team-statistic", favorite: false, hasDropdown: true },
        { name: "kpiReport", title: "", class: "/private/statisticsReporting", url: "/private/kpi-report", favorite: false, hasDropdown: true },
        { name: "klickReport", title: "", class: "/private/statisticsReporting", url: "/private/click-report", favorite: false, hasDropdown: true },

        // TEST
        // ****
        { name: "TEST-1", title: "", class: "/private/placeholder", url: "/private/test-1", favorite: false, hasDropdown: true },
        { name: "TEST-2", title: "", class: "/private/placeholder", url: "/private/test-2", favorite: false, hasDropdown: true },
        { name: "TEST-3", title: "", class: "/private/placeholder", url: "/private/test-3", favorite: false, hasDropdown: true },
        { name: "TEST-4", title: "", class: "/private/placeholder", url: "/private/test-4", favorite: false, hasDropdown: true },
    ];

    constructor (private router: Router, private eRef: ElementRef) {
    }

    ngOnInit(): void {
        // this.setItemClass("/private/dashboard");
        this.onSelectionChange('Dashboard');
    }

    ngAfterViewInit() {
        // if (this.buttons) {
        //     this.buttons.forEach((button, index) => {
        //         this.menuItems[index].buttonRef = button;
        //     });
        // } else {
        //     console.error('Buttons QueryList is not initialized');
        // }

        // console.log('ngAfterViewInit - Buttons QueryList:', this.buttons);

        if (this.buttons && this.buttons.toArray().length > 0) {
            this.buttons.forEach((button, index) => {
                // console.log(`Assigning buttonRef for index ${index}`);
                this.menuItems[index].buttonRef = button;
            });
        } else {
            console.error('Buttons QueryList is not initialized or empty');
        }

        if (this.dropdowns && this.dropdowns.toArray().length > 0) {
            this.dropdowns.forEach((dropdown, index) => {
                // console.log(`Assigning dropdownRef for index ${index}`);
                this.menuItems[index].dropdownRef = dropdown;
            });
        } else {
            console.error('Dropdowns QueryList is not initialized or empty');
        }
    }





    /**
     * Sends the name of the current selected menu-item to the parant (private) component to show the menu-name at the content title
     * @param selectedValue
     */
    onSelectionChange(selectedValue: string): void {
        this.selectionChanged.emit(selectedValue);
    }

    /**
     * Changes the CSS-Classes from the active / pre-active / post-active menu-item
     * @param url
     */
    setItemClass(name: string): void {

        if (name == 'searching') {
            console.log("Funktion wird unterbrochen.");
            return;
        }

        this.menuItems.forEach((item) => {
            item.class = '';
        });

        this.menuItems.forEach((item, index) => {

            if (item.name === name) {
                item.class = 'active';
                // console.log(`Item "${name}" found at index ${index}. Set to 'active'.`);

                // Set 'pre-active' for the previous item if it exists
                if (index > 0) {
                    this.menuItems[index - 1].class = 'pre-active';
                    // console.log(`Previous item at index ${index - 1} set to 'pre-active'.`);
                }

                // Set 'post-active' for the next item if it exists
                if (index < this.menuItems.length - 1) {
                    this.menuItems[index + 1].class = 'post-active';
                    // console.log(`Next item at index ${index + 1} set to 'post-active'.`);
                } else {
                    console.log(`Next item at index ${index + 1} does not exist.`);
                }
            }
        });



        // if (url == "/private/dashboard") {
        //     this.classFavorite = "pre-active";
        //     this.classDashboard = "active";
        //     this.classWorkspace = "post-active";
        //     this.classContacts = "";
        //     this.classOperations = "";
        //     this.classOrderProcessing = "";
        //     this.classAccounting = "";
        //     this.classProductManagement = "";
        //     this.classContracting = "";
        //     this.classToolsAssets = "";
        //     this.classStatisticsReporting = "";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/workspace") {
        //     this.classFavorite = "";
        //     this.classDashboard = "pre-active";
        //     this.classWorkspace = "active";
        //     this.classContacts = "post-active";
        //     this.classOperations = "";
        //     this.classOrderProcessing = "";
        //     this.classAccounting = "";
        //     this.classProductManagement = "";
        //     this.classContracting = "";
        //     this.classToolsAssets = "";
        //     this.classStatisticsReporting = "";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/contact") {

        //     console.log('url == /private/contact');

        //     this.classFavorite = "";
        //     this.classDashboard = "";
        //     this.classWorkspace = "pre-active"
        //     this.classContacts = "active"
        //     this.classOperations = "post-active";
        //     this.classOrderProcessing = "";
        //     this.classAccounting = "";
        //     this.classProductManagement = "";
        //     this.classContracting = "";
        //     this.classToolsAssets = "";
        //     this.classStatisticsReporting = "";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/operations") {
        //     this.classFavorite = "";
        //     this.classDashboard = "";
        //     this.classWorkspace = ""
        //     this.classContacts = "pre-active"
        //     this.classOperations = "active";
        //     this.classOrderProcessing = "post-active";
        //     this.classAccounting = "";
        //     this.classProductManagement = "";
        //     this.classContracting = "";
        //     this.classToolsAssets = "";
        //     this.classStatisticsReporting = "";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/orderProcessing") {
        //     this.classFavorite = "";
        //     this.classDashboard = "";
        //     this.classWorkspace = ""
        //     this.classContacts = ""
        //     this.classOperations = "pre-active";
        //     this.classOrderProcessing = "active";
        //     this.classAccounting = "post-active";
        //     this.classProductManagement = "";
        //     this.classContracting = "";
        //     this.classToolsAssets = "";
        //     this.classStatisticsReporting = "";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/accounting") {
        //     this.classFavorite = "";
        //     this.classDashboard = "";
        //     this.classWorkspace = ""
        //     this.classContacts = ""
        //     this.classOperations = "";
        //     this.classOrderProcessing = "pre-active";
        //     this.classAccounting = "active";
        //     this.classProductManagement = "post-active";
        //     this.classContracting = "";
        //     this.classToolsAssets = "";
        //     this.classStatisticsReporting = "";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/productManagement") {
        //     this.classFavorite = "";
        //     this.classDashboard = "";
        //     this.classWorkspace = ""
        //     this.classContacts = ""
        //     this.classOperations = "";
        //     this.classOrderProcessing = "";
        //     this.classAccounting = "pre-active";
        //     this.classProductManagement = "active";
        //     this.classContracting = "post-active";
        //     this.classToolsAssets = "";
        //     this.classStatisticsReporting = "";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/contracting") {
        //     this.classFavorite = "";
        //     this.classDashboard = "";
        //     this.classWorkspace = ""
        //     this.classContacts = ""
        //     this.classOperations = "";
        //     this.classOrderProcessing = "";
        //     this.classAccounting = "";
        //     this.classProductManagement = "pre-active";
        //     this.classContracting = "active";
        //     this.classToolsAssets = "post-active";
        //     this.classStatisticsReporting = "";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/toolsAssets") {
        //     this.classFavorite = "";
        //     this.classDashboard = "";
        //     this.classWorkspace = ""
        //     this.classContacts = ""
        //     this.classOperations = "";
        //     this.classOrderProcessing = "";
        //     this.classAccounting = "";
        //     this.classProductManagement = "";
        //     this.classContracting = "pre-active";
        //     this.classToolsAssets = "active";
        //     this.classStatisticsReporting = "post-active";
        //     this.classPlaceholder = "";
        // };
        // if (url == "/private/statisticsReporting") {
        //     this.classFavorite = "";
        //     this.classDashboard = "";
        //     this.classWorkspace = ""
        //     this.classContacts = ""
        //     this.classOperations = "";
        //     this.classOrderProcessing = "";
        //     this.classAccounting = "";
        //     this.classProductManagement = "";
        //     this.classContracting = "";
        //     this.classToolsAssets = "pre-active";
        //     this.classStatisticsReporting = "active";
        //     this.classPlaceholder = "post-active";
        // };
    }

    /**
     *
     * @param event
     * @param name
     */
    openDropdown(event: Event, name: string): void {
        this.closeAllDropdowns();

        this.menuItems.forEach((item, index) => {
            // console.log('openDropdown > menu-items: ' + item.name);
            if (item.name == name) {
                console.log('item.name: ' + item.name + '  -  name: ' + name);
                item.showSubMenu = true;
            }
        });

        // Alt, kann weg wenn das neue funktioniert
        // ########################################
        // switch (name) {
        //     case 'favorites':
        //         this.showSubFavorites = !this.showSubFavorites;
        //         break;
        //     case 'workspace':
        //         this.showSubWorkspace = !this.showSubWorkspace;
        //         break;
        //     case 'contact':
        //         console.log('openDropdown2: ' + name);
        //         this.showSubContact = !this.showSubContact;
        //         console.log('showSubContact: ' + this.showSubContact);
        //         break;
        //     case 'operations':
        //         this.showSubOperations = !this.showSubOperations;
        //         break;
        //     case 'orderProcessing':
        //         this.showSubOrderProcessing = !this.showSubOrderProcessing;
        //         break;
        //     case 'accounting':
        //         this.showSubAccounting = !this.showSubAccounting;
        //         break;
        //     case 'productManagement':
        //         this.showSubProductManagement = !this.showSubProductManagement;
        //         break;
        //     case 'contracting':
        //         this.showSubContracting = !this.showSubContracting;
        //         break;
        //     case 'toolsAssets':
        //         this.showSubToolsAssets = !this.showSubToolsAssets;
        //         break;
        //     case 'statisticsReporting':
        //         this.showSubStatisticsReporting = !this.showSubStatisticsReporting;
        //         break;
        //     case 'test':
        //         this.showSubTest = !this.showSubTest;
        //         break;
        // }
    }

    /**
     *
     */
    closeAllDropdowns() {
        this.menuItems.forEach(item => {
            item.showSubMenu = false;
        });

        // Alt, kann weg wenn das neue funktioniert
        // ########################################
        // this.showSubFavorites = false;
        // this.showSubWorkspace = false;
        // this.showSubContact = false;
        // this.showSubOperations = false;
        // this.showSubOrderProcessing = false;
        // this.showSubAccounting = false;
        // this.showSubProductManagement = false;
        // this.showSubContracting = false;
        // this.showSubToolsAssets = false;
        // this.showSubStatisticsReporting = false;
        // this.showSubTest = false;
    }

    /**
     *
     * @param event
     */
    @HostListener('document:click', ['$event'])
    onClickOutsid(event: Event) {

        const target = event.target as HTMLElement;
        this.menuItems.forEach(item => {
            if (item.showSubMenu &&
                item.dropdownRef &&
                item.buttonRef &&
                !item.dropdownRef.nativeElement.contains(target) &&
                !item.buttonRef.nativeElement.contains(target)) {
                item.showSubMenu = false;
            }
        });


        // Alt > Kann weg, wenn das neu funktioniert...
        // const target = event.target as HTMLElement;
        // const elementId = target.id;
        // const elementClasses = target.className;

        // if (
        //     this.showSubFavorites &&
        //     !this.dropdownFavorites.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonFavorites.nativeElement.contains(event.target)
        // ) {
        //     this.showSubFavorites = false;
        // }

        // if (
        //     this.showSubWorkspace &&
        //     !this.dropdownWorkspace.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonWorkspace.nativeElement.contains(event.target)
        // ) {
        //     this.showSubWorkspace = false;
        // }

        // if (
        //     this.showSubContact &&
        //     !this.dropdownContact.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonContact.nativeElement.contains(event.target)
        // ) {
        //     this.showSubContact = false;
        // }

        // if (
        //     this.showSubOperations &&
        //     !this.dropdownOperations.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonOperations.nativeElement.contains(event.target)
        // ) {
        //     this.showSubOperations = false;
        // }

        // if (
        //     this.showSubOrderProcessing &&
        //     !this.dropdownOrderProcessing.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonOrderProcessing.nativeElement.contains(event.target)
        // ) {
        //     this.showSubOrderProcessing = false;
        // }

        // if (
        //     this.showSubAccounting &&
        //     !this.dropdownAccounting.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonAccounting.nativeElement.contains(event.target)
        // ) {
        //     this.showSubAccounting = false;
        // }

        // if (
        //     this.showSubProductManagement &&
        //     !this.dropdownProductManagement.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonProductManagement.nativeElement.contains(event.target)
        // ) {
        //     this.showSubProductManagement = false;
        // }

        // if (
        //     this.showSubContracting &&
        //     !this.dropdownContracting.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonContracting.nativeElement.contains(event.target)
        // ) {
        //     this.showSubContracting = false;
        // }

        // if (
        //     this.showSubToolsAssets &&
        //     !this.dropdownToolsAssets.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonToolsAssets.nativeElement.contains(event.target)
        // ) {
        //     this.showSubToolsAssets = false;
        // }

        // if (
        //     this.showSubStatisticsReporting &&
        //     !this.dropdownStatisticsReporting.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonStatisticsReporting.nativeElement.contains(event.target)
        // ) {
        //     this.showSubStatisticsReporting = false;
        // }

        // if (
        //     this.showSubTest &&
        //     !this.dropdownTest.nativeElement.contains(event.target) &&
        //     !this.dropdownButtonTest.nativeElement.contains(event.target)
        // ) {
        //     this.showSubTest = false;
        // }
    }

   /**
    * toggles the favorite-icon at the menu-items
    * @param item
    */
    toggleFavorite(item: any) {
        item.favorite = !item.favorite;
    }
}
