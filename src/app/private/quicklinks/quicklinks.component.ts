import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
    selector: 'app-quicklinks',
    standalone: true,
    imports: [CommonModule,
              DragDropModule,
              ],
    templateUrl: './quicklinks.component.html',
    styleUrl: './quicklinks.component.scss'
})

export class QuicklinksComponent {
    quicklinksVisible:boolean = true;

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
