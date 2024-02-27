import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [RouterModule, HeaderMenuComponent],
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss'
})

export class PrivateComponent {

}
