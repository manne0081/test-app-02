export interface Quicklinks {
    id: number;
    title: string;
    url: string;
    parent: string;
}

export const QUICKLINKS_MOCK: Quicklinks[] = [
    { id: 0, title: 'Aufgaben', url: 'private/task/', parent: 'workspace' },
    // { id: 1, title: 'Planner', url: 'private/planner/', parent: 'workspace' },
    // { id: 2, title: 'Kampagnen', url: 'private/campagne/', parent: 'workspace' },
    // { id: 3, title: 'E-Mail', url: 'private/email/', parent: 'workspace' },
    { id: 4, title: 'Unternehmen', url: 'private/company/', parent: 'contacts' },
    // { id: 5, title: 'Lieferanten', url: 'private/supplier/', parent: 'contacts' },
    // { id: 6, title: 'Ansprechpartner', url: 'private/contact/', parent: 'contacts' },
    // { id: 7, title: 'Benutzer', url: 'private/user/', parent: 'contacts' },
    // { id: 8, title: 'Modulberechtigungen', url: 'private/module-auth/', parent: 'contacts' },
    // { id: 9, title: 'Unternehmenswikis', url: 'private/company-wiki/', parent: 'contacts' },
    // { id: 10, title: 'Debitor Daten', url: 'private/debitor-data/', parent: 'contacts' },
    // { id: 11, title: 'Adressen', url: 'private/address/', parent: 'contacts' },
    { id: 12, title: 'WIP / Gmbh-Name/desc ', url: 'private/company?searchTerm=gmbh&sortingTerm=name-desc', parent: 'contacts' },
];

