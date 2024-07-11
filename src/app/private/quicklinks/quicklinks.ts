export interface Quicklinks {
    id: number;
    title: string;
    url: string;
}

export const QUICKLINKS_MOCK: Quicklinks[] = [
    { id: 0, title: 'Aufgaben', url: 'private/task/' },
    // { id: 1, title: 'Planner', url: 'private/planner/' },
    // { id: 2, title: 'Kampagnen', url: 'private/campagne/' },
    // { id: 3, title: 'E-Mail', url: 'private/email/' },
    { id: 4, title: 'Unternehmen', url: 'private/company/' },
    // { id: 5, title: 'Lieferanten', url: 'private/supplier/' },
    // { id: 6, title: 'Ansprechpartner', url: 'private/contact/' },
    // { id: 7, title: 'Benutzer', url: 'private/user/' },
    // { id: 8, title: 'Modulberechtigungen', url: 'private/module-auth/' },
    // { id: 9, title: 'Unternehmenswikis', url: 'private/company-wiki/' },
    // { id: 10, title: 'Debitor Daten', url: 'private/debitor-data/' },
    // { id: 11, title: 'Adressen', url: 'private/address/' },
    { id: 12, title: 'WIP / Gmbh-Name/desc ', url: 'private/company?searchTerm=gmbh&sortingTerm=name-desc' },
];

