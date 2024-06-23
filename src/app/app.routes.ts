import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { HeaderMenuTest2Component } from './private/header-menu-test-2/header-menu-test-2.component';

export const routes: Routes = [
    // { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: '',   redirectTo: 'private/dashboard', pathMatch: 'full' },

    { path: 'nav-test', component: HeaderMenuTest2Component },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'private', component: PrivateComponent,
        children: [
            // dashboard (as Dashboard)
            // ------------------------
            { path: 'dashboard', component: DashboardComponent },

            // workspace (as Workspace)
            // ------------------------
            { path: 'task', component: DashboardComponent },                    // (as Aufgaben)
            { path: 'planner', component: DashboardComponent },                 // (as Planner)
            { path: 'campagne', component: DashboardComponent },                // (as Kampagnen)
            { path: 'email', component: DashboardComponent },                   // (as E-Mail)

            // contact (as Kontakte)
            // ---------------------
            { path: 'company', component: DashboardComponent },                 // (as Unternehmen)
            { path: 'supplier', component: DashboardComponent },                // (as Lieferanten)
            { path: 'contact', component: DashboardComponent },                 // (as Ansprechpartner)
            { path: 'user', component: DashboardComponent },                    // (as Benutzer)
            { path: 'module-auth', component: DashboardComponent },             // (as Modulberechtigungen)
            { path: 'company-wiki', component: DashboardComponent },            // (as Unternehmenswikis)
            { path: 'debitor-data', component: DashboardComponent },            // (as Debitor Daten)
            { path: 'address', component: DashboardComponent },                 // (as Adressen)

            // operations (as Vorgänge & Belege)
            // ---------------------------------
            { path: 'sales-transaction', component: DashboardComponent },       // (as Verkaufsvorgänge)
            { path: 'offer', component: DashboardComponent },                   // (as Angebote)
            { path: 'order', component: DashboardComponent },                   // (as Aufträge)
            { path: 'invoice', component: DashboardComponent },                 // (as Rechnungen)
            { path: 'partial-order', component: DashboardComponent },           // (as Teilaufträge)
            { path: 'document', component: DashboardComponent },                // (as Alle Belege)

            // orderProcessing (as Auftragsabwicklung)
            // ---------------------------------------
            { path: 'multiposting', component: DashboardComponent },            // (as Multipostings)
            { path: 'posting', component: DashboardComponent },                 // (as Postings)
            { path: 'advertisements', component: DashboardComponent },          // (as Stellenanzeigen)
            { path: 'print', component: DashboardComponent },                   // (as Print)
            { path: 'service', component: DashboardComponent },                 // (as Dienstleistungen & Sonstiges)

            // accounting (as Rechnungswesen)
            // ******************************
            { path: 'invoice-out', component: DashboardComponent },             // (as Ausgangsrechnungen)
            { path: 'inv-position-group', component: DashboardComponent },      // (as Rechnungspositionsgruppen)
            { path: 'order-position', component: DashboardComponent },          // (as Auftragspositionen)
            { path: 'documents-pdf', component: DashboardComponent },           // (as Belegs-PDFs)
            { path: 'invoice-in', component: DashboardComponent },              // (as Eingangsrechnungen)

            // productManagement (as Produktverwaltung)
            // ****************************************
            { path: 'product', component: DashboardComponent },                 // (as Produkte)
            { path: 'product-variant', component: DashboardComponent },         // (as Produktvarianten)
            { path: 'product-group', component: DashboardComponent },           // (as Produktgruppen)
            { path: 'product-group-variant', component: DashboardComponent },   // (as PGV-Gruppen)
            { path: 'position-template', component: DashboardComponent },       // (as Positionsvorlagen)
            { path: 'trans-path', component: DashboardComponent },              // (as Übertragungswege)
            { path: 'additional-data', component: DashboardComponent },         // (as Zusatzangaben)

            // contracting (as Vertragswesen)
            // ******************************
            { path: 'customer-contract', component: DashboardComponent },       // (as Kundenverträge)
            { path: 'supplier-contract', component: DashboardComponent },       // (as Lieferantenverträge)
            { path: 'partner-config', component: DashboardComponent },          // (as Partner-Konfiguration)

            // toolsAssets (as Tools & Assets)
            // *******************************
            { path: 'smart-template', component: DashboardComponent },          // (as Smart-Template)
            { path: 'job-form', component: DashboardComponent },                // (as Bewerbungsformulare)
            { path: 'interface', component: DashboardComponent },               // (as Schnittstellen)
            { path: 'global-font', component: DashboardComponent },             // (as Global-Fonts)

            // statisticsReporting (as Statistik & Reporting)
            // **********************************************
            { path: 'sales-statistic', component: DashboardComponent },         // (as Umsatzstatistik)
            { path: 'team-statistic', component: DashboardComponent },          // (as Teamstatistik)
            { path: 'kpi-report', component: DashboardComponent },              // (as KPI-Report)
            { path: 'click-report', component: DashboardComponent },            // (as Klick-Report)



            //todo
            //more routes

        ]
    },

    { path: '**', component: AppComponent },
];
