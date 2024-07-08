import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PrivateService {
    private selectedMenuSubject = new BehaviorSubject<string | null>(null);
    selectedMenu$ = this.selectedMenuSubject.asObservable();

    private selectedObjectSubject = new BehaviorSubject<any>(null);
    selectedObject$ = this.selectedObjectSubject.asObservable();

    selectMenu(menu: string | null) {
        // console.log('privateService - selectMenu: ' + menu);
        this.selectedMenuSubject.next(menu);
    }

    selectObject(obj: any) {
        // console.log('privateService - selectObject: ' + obj);
        this.selectedObjectSubject.next(obj);
    }
}
