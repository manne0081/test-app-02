import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, HostListener, ElementRef, ViewChild } from '@angular/core';
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

export class HeaderMenuTest2Component {
    @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('dropdownButtonFavorites') dropdownButtonFavorites!: ElementRef;
    @ViewChild('dropdownFavorites') dropdownFavorites!: ElementRef;
    @ViewChild('dropdownButtonWorkspace') dropdownButtonWorkspace!: ElementRef;
    @ViewChild('dropdownWorkspace') dropdownWorkspace!: ElementRef;
    @ViewChild('dropdownButtonContact') dropdownButtonContact!: ElementRef;
    @ViewChild('dropdownContact') dropdownContact!: ElementRef;
    @ViewChild('dropdownButtonOperations') dropdownButtonOperations!: ElementRef;
    @ViewChild('dropdownOperations') dropdownOperations!: ElementRef;
    @ViewChild('dropdownButtonOrderProcessing') dropdownButtonOrderProcessing!: ElementRef;
    @ViewChild('dropdownOrderProcessing') dropdownOrderProcessing!: ElementRef;
    @ViewChild('dropdownButtonAccounting') dropdownButtonAccounting!: ElementRef;
    @ViewChild('dropdownAccounting') dropdownAccounting!: ElementRef;
    @ViewChild('dropdownButtonProductManagement') dropdownButtonProductManagement!: ElementRef;
    @ViewChild('dropdownProductManagement') dropdownProductManagement!: ElementRef;
    @ViewChild('dropdownButtonContracting') dropdownButtonContracting!: ElementRef;
    @ViewChild('dropdownContracting') dropdownContracting!: ElementRef;
    @ViewChild('dropdownButtonToolsAssets') dropdownButtonToolsAssets!: ElementRef;
    @ViewChild('dropdownToolsAssets') dropdownToolsAssets!: ElementRef;
    @ViewChild('dropdownButtonStatisticsReporting') dropdownButtonStatisticsReporting!: ElementRef;
    @ViewChild('dropdownStatisticsReporting') dropdownStatisticsReporting!: ElementRef;
    @ViewChild('dropdownButtonTest') dropdownButtonTest!: ElementRef;
    @ViewChild('dropdownTest') dropdownTest!: ElementRef;

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

    menuItems: { name: string, hasIconOnly: boolean, iconClass: string, title: string, container1Class: string, } [] = [
        { name: 'searching', hasIconOnly: true, iconClass: 'icon-search', title: '', container1Class: 'classContacts' },
        { name: 'favorites', hasIconOnly: true, iconClass: 'icon-star favorite', title: '', container1Class: 'classFavorite' },
        { name: 'dashboard', hasIconOnly: false, iconClass: 'icon-grid menu-icon', title: 'Dashboard', container1Class: 'classDashboard' },
        { name: 'workspace', hasIconOnly: false, iconClass: 'icon-pencilwrench menu-icon', title: 'Workspace', container1Class: 'classWorkspace' },
        { name: 'contacts', hasIconOnly: false, iconClass: 'icon-group menu-icon', title: 'Kontakte', container1Class: 'classContacts' },
    ]

    menuSubItems: { name: string, title: string, class: string, url: string, favorite: boolean, hasDropdown: boolean, iconOnly: boolean } [] = [
        // Favorites
        // *********
        { name: "favorites", title: "Favorites", class: "/private/favorites", url: "/private/favorites", favorite: false, hasDropdown: true, iconOnly: true },

        // Dashboard
        // *********
        { name: "dashboard", title: "Dashboard", class: "/private/dashboard", url: "/private/dashbaord", favorite: false, hasDropdown: false, iconOnly: false },

        // Workspace
        // *********
        { name: "aufgaben", title: "", class: "/private/workspace", url: "/private/task", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "planner", title: "", class: "/private/workspace", url: "/private/planner", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "kampagnen", title: "", class: "/private/workspace", url: "/private/campagne", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "email", title: "", class: "/private/workspace", url: "/private/email", favorite: false, hasDropdown: true, iconOnly: false },

        // Contact (as Kontakte)
        // *********************
        { name: "unternehmen", title: "", class: "/private/contact", url: "/private/company", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "lieferanten", title: "", class: "/private/contact", url: "/private/supplier", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "ansprechpartner", title: "", class: "/private/contact", url: "/private/contact", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "benutzer", title: "", class: "/private/contact", url: "/private/user", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "modulberechtigungen", title: "", class: "/private/contact", url: "/private/module-auth", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "unternehmenswiki", title: "", class: "/private/contact", url: "/private/company-wiki", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "debitorDaten", title: "", class: "/private/contact", url: "/private/debitor-data", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "adressen", title: "", class: "/private/contact", url: "/private/address", favorite: false, hasDropdown: true, iconOnly: false },

        // operations (as Vorgänge & Belege)
        // *********************************
        { name: "verkaufsvorgänge", title: "", class: "/private/operations", url: "/private/sales-transaction", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "angebote", title: "", class: "/private/operations", url: "/private/offer", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "aufträge", title: "", class: "/private/operations", url: "/private/order", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "rechnungen", title: "", class: "/private/operations", url: "/private/invoice", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "teilaufträge", title: "", class: "/private/operations", url: "/private/partial-order", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "alleBelege", title: "", class: "/private/operations", url: "/private/document", favorite: false, hasDropdown: true, iconOnly: false },

        // orderProcessing (as Auftragsabwicklung)
        // ***************************************
        { name: "multipostings", title: "", class: "/private/orderProcessing", url: "/private/multiposting", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "postings", title: "", class: "/private/orderProcessing", url: "/private/posting", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "stellenanzeigen", title: "", class: "/private/orderProcessing", url: "/private/advertisements", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "print", title: "", class: "/private/orderProcessing", url: "/private/print", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "dienstleistungenSonstiges", title: "", class: "/private/orderProcessing", url: "/private/service", favorite: false, hasDropdown: true, iconOnly: false },

        // accounting (as Rechnungswesen)
        // ******************************
        { name: "ausgangsrechungen", title: "", class: "/private/accounting", url: "/private/invoice-out", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "rechnungspositionsgruppen", title: "", class: "/private/accounting", url: "/private/inv-position-group", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "auftragspositionen", title: "", class: "/private/accounting", url: "/private/order-position", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "belegsPDFs", title: "", class: "/private/accounting", url: "/private/documents-pdf", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "eingangsrechnungen", title: "", class: "/private/accounting", url: "/private/invoice-in", favorite: false, hasDropdown: true, iconOnly: false },

        // productManagement (as Produktverwaltung)
        // ****************************************
        { name: "produkte", title: "", class: "/private/productManagement", url: "/private/product", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "produktvarianten", title: "", class: "/private/productManagement", url: "/private/product-variant", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "produktgruppen", title: "", class: "/private/productManagement", url: "/private/product-group", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "pgvGruppen", title: "", class: "/private/productManagement", url: "/private/product-group-variant", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "positionsvorlagen", title: "", class: "/private/productManagement", url: "/private/position-template", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "übertragungswege", title: "", class: "/private/productManagement", url: "/private/trans-path", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "zusatzangaben", title: "", class: "/private/productManagement", url: "/private/additional-data", favorite: false, hasDropdown: true, iconOnly: false },

        // Vertragswesen (as contracting)
        // ******************************
        { name: "kundenverträge", title: "", class: "/private/contracting", url: "/private/customer-contract", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "lieferantenverträge", title: "", class: "/private/contracting", url: "/private/supplier-contract", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "partnerKonfiguration", title: "", class: "/private/contracting", url: "/private/partner-config", favorite: false, hasDropdown: true, iconOnly: false },

        // toolsAssets (as Tools & Assets)
        // *******************************
        { name: "smartTemplate", title: "", class: "/private/toolsAssets", url: "/private/smart-template", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "bewerbungsformulare", title: "", class: "/private/toolsAssets", url: "/private/job-form", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "schnittstellen", title: "", class: "/private/toolsAssets", url: "/private/interface", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "globalFonts", title: "", class: "/private/toolsAssets", url: "/private/global-font", favorite: false, hasDropdown: true, iconOnly: false },

        // statisticsReporting (as Statistik & Reporting)
        // **********************************************
        { name: "umsatzstatistik", title: "", class: "/private/statisticsReporting", url: "/private/sales-statistic", favorite: true, hasDropdown: true, iconOnly: false },
        { name: "teamstatistik", title: "", class: "/private/statisticsReporting", url: "/private/team-statistic", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "kpiReport", title: "", class: "/private/statisticsReporting", url: "/private/kpi-report", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "klickReport", title: "", class: "/private/statisticsReporting", url: "/private/click-report", favorite: false, hasDropdown: true, iconOnly: false },

        // TEST
        // ****
        { name: "TEST-1", title: "", class: "/private/placeholder", url: "/private/test-1", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "TEST-2", title: "", class: "/private/placeholder", url: "/private/test-2", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "TEST-3", title: "", class: "/private/placeholder", url: "/private/test-3", favorite: false, hasDropdown: true, iconOnly: false },
        { name: "TEST-4", title: "", class: "/private/placeholder", url: "/private/test-4", favorite: false, hasDropdown: true, iconOnly: false },
    ];

    constructor (private router: Router, private eRef: ElementRef) {
    }

    ngOnInit(): void {
        this.setItemClass("/private/dashboard");
        this.onSelectionChange('Dashboard');
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
    setItemClass(url: string): void {
        if (url == "/private/dashboard") {
            this.classFavorite = "pre-active";
            this.classDashboard = "active";
            this.classWorkspace = "post-active";
            this.classContacts = "";
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/workspace") {
            this.classFavorite = "";
            this.classDashboard = "pre-active";
            this.classWorkspace = "active";
            this.classContacts = "post-active";
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/contact") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = "pre-active"
            this.classContacts = "active"
            this.classOperations = "post-active";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/operations") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = "pre-active"
            this.classOperations = "active";
            this.classOrderProcessing = "post-active";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/orderProcessing") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "pre-active";
            this.classOrderProcessing = "active";
            this.classAccounting = "post-active";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/accounting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "pre-active";
            this.classAccounting = "active";
            this.classProductManagement = "post-active";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/productManagement") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "pre-active";
            this.classProductManagement = "active";
            this.classContracting = "post-active";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/contracting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "pre-active";
            this.classContracting = "active";
            this.classToolsAssets = "post-active";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/toolsAssets") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "pre-active";
            this.classToolsAssets = "active";
            this.classStatisticsReporting = "post-active";
            this.classPlaceholder = "";
        };
        if (url == "/private/statisticsReporting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "pre-active";
            this.classStatisticsReporting = "active";
            this.classPlaceholder = "post-active";
        };
    }

    /**
     *
     * @param event
     * @param name
     */
    openDropdown(event: Event, name: string): void {
        this.closeAllDropdowns();

        switch (name) {
            case 'favorites':
                this.showSubFavorites = !this.showSubFavorites;
                break;
            case 'workspace':
                this.showSubWorkspace = !this.showSubWorkspace;
                break;
            case 'contact':
                this.showSubContact = !this.showSubContact;
                break;
            case 'operations':
                this.showSubOperations = !this.showSubOperations;
                break;
            case 'orderProcessing':
                this.showSubOrderProcessing = !this.showSubOrderProcessing;
                break;
            case 'accounting':
                this.showSubAccounting = !this.showSubAccounting;
                break;
            case 'productManagement':
                this.showSubProductManagement = !this.showSubProductManagement;
                break;
            case 'contracting':
                this.showSubContracting = !this.showSubContracting;
                break;
            case 'toolsAssets':
                this.showSubToolsAssets = !this.showSubToolsAssets;
                break;
            case 'statisticsReporting':
                this.showSubStatisticsReporting = !this.showSubStatisticsReporting;
                break;
            case 'test':
                this.showSubTest = !this.showSubTest;
                break;
        }
    }

    /**
     *
     */
    closeAllDropdowns() {
        this.showSubFavorites = false;
        this.showSubWorkspace = false;
        this.showSubContact = false;
        this.showSubOperations = false;
        this.showSubOrderProcessing = false;
        this.showSubAccounting = false;
        this.showSubProductManagement = false;
        this.showSubContracting = false;
        this.showSubToolsAssets = false;
        this.showSubStatisticsReporting = false;
        this.showSubTest = false;
    }

    /**
     *
     * @param event
     */
    @HostListener('document:click', ['$event'])
    onClickOutsid(event: Event) {
        const target = event.target as HTMLElement;
        const elementId = target.id;
        const elementClasses = target.className;

        if (
            this.showSubFavorites &&
            !this.dropdownFavorites.nativeElement.contains(event.target) &&
            !this.dropdownButtonFavorites.nativeElement.contains(event.target)
        ) {
            this.showSubFavorites = false;
        }

        if (
            this.showSubWorkspace &&
            !this.dropdownWorkspace.nativeElement.contains(event.target) &&
            !this.dropdownButtonWorkspace.nativeElement.contains(event.target)
        ) {
            this.showSubWorkspace = false;
        }

        if (
            this.showSubContact &&
            !this.dropdownContact.nativeElement.contains(event.target) &&
            !this.dropdownButtonContact.nativeElement.contains(event.target)
        ) {
            this.showSubContact = false;
        }

        if (
            this.showSubOperations &&
            !this.dropdownOperations.nativeElement.contains(event.target) &&
            !this.dropdownButtonOperations.nativeElement.contains(event.target)
        ) {
            this.showSubOperations = false;
        }

        if (
            this.showSubOrderProcessing &&
            !this.dropdownOrderProcessing.nativeElement.contains(event.target) &&
            !this.dropdownButtonOrderProcessing.nativeElement.contains(event.target)
        ) {
            this.showSubOrderProcessing = false;
        }

        if (
            this.showSubAccounting &&
            !this.dropdownAccounting.nativeElement.contains(event.target) &&
            !this.dropdownButtonAccounting.nativeElement.contains(event.target)
        ) {
            this.showSubAccounting = false;
        }

        if (
            this.showSubProductManagement &&
            !this.dropdownProductManagement.nativeElement.contains(event.target) &&
            !this.dropdownButtonProductManagement.nativeElement.contains(event.target)
        ) {
            this.showSubProductManagement = false;
        }

        if (
            this.showSubContracting &&
            !this.dropdownContracting.nativeElement.contains(event.target) &&
            !this.dropdownButtonContracting.nativeElement.contains(event.target)
        ) {
            this.showSubContracting = false;
        }

        if (
            this.showSubToolsAssets &&
            !this.dropdownToolsAssets.nativeElement.contains(event.target) &&
            !this.dropdownButtonToolsAssets.nativeElement.contains(event.target)
        ) {
            this.showSubToolsAssets = false;
        }

        if (
            this.showSubStatisticsReporting &&
            !this.dropdownStatisticsReporting.nativeElement.contains(event.target) &&
            !this.dropdownButtonStatisticsReporting.nativeElement.contains(event.target)
        ) {
            this.showSubStatisticsReporting = false;
        }

        if (
            this.showSubTest &&
            !this.dropdownTest.nativeElement.contains(event.target) &&
            !this.dropdownButtonTest.nativeElement.contains(event.target)
        ) {
            this.showSubTest = false;
        }
    }

   /**
    * toggles the favorite-icon at the menu-items
    * @param item
    */
    toggleFavorite(item: any) {
        item.favorite = !item.favorite;
    }
}
