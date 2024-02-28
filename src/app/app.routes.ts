import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },

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



        ]
    },

    { path: '**', component: AppComponent },
];
