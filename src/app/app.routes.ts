import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private/private.component';

export const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'private', component: PrivateComponent },

    { path: '**', component: AppComponent },
];
