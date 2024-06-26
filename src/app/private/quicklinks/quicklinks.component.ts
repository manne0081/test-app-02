import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-quicklinks',
    standalone: true,
    imports: [CommonModule,
              DragDropModule,
              FormsModule,
              ],
    templateUrl: './quicklinks.component.html',
    styleUrl: './quicklinks.component.scss'
})

export class QuicklinksComponent implements OnInit {
    quicklinksVisible:boolean = true;
    searchTerm: string = '';

    quicklinks: string[] = [
        "First Quicklink",
        "Lampe",
        "Buch",
        "Tasse",
        "Handy",
        "Blumentopf",
        "Schlüsselbund",
        "Sonnenbrille",
        "Notizbuch",
        "Kaffeetasse",
        "Fernseher",
        "Schere",
        "Rucksack",
        "Uhren",
        "Kissen",
        "Kerze",
        "Kugelschreiber",
        "Kleidung",
        "Kühlschrank",
        "Schuhe",
        "Laptop",
        "Regenschirm",
        "Brille",
        "Taschenlampe",
        "Batterie",
        "Fahrrad",
        "Schlüssel",
        "Fotoapparat",
        "Kopfhörer",
        "Last Quicklink",
    ];

    constructor() {}

    ngOnInit(): void {
        // this.searchTerm = 'tas';
    }

    get filteredQuicklinks() {
        return this.quicklinks.filter(link =>
            link.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    removeFilterTerm(): void {
        this.searchTerm = '';
    }

    moveDropdown(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.quicklinks, event.previousIndex, event.currentIndex);
    }

    openQuicklink(item: any): void {
        window.alert(item + " clicked!");
    }

    openContext(item: any): void {
        window.alert("Context " + item + " clicked!");
    }
}
