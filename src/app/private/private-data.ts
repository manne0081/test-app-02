export interface Company {
    id: number;
    number: string;
    name: string;
    category: string;
}
export const COMPANY_MOCK: Company[] = [
    { id: 0, number: 'Knd-00001', name: 'Mu Transport AG', category: 'Transport' },
    { id: 1, number: 'Knd-00002', name: 'Gamma Industries KG', category: 'Industrie' },
    { id: 2, number: 'Knd-00003', name: 'Omikron Maschinenbau UG', category: 'Maschinenbau' },
    { id: 3, number: 'Knd-00004', name: 'Theta Immobilien AG', category: 'Immobilien' },
    { id: 4, number: 'Knd-00005', name: 'Delta Handels OHG', category: 'Handel' },
    { id: 5, number: 'Knd-00006', name: 'Iota Consulting GmbH', category: 'Beratung' },
    { id: 6, number: 'Knd-00007', name: 'Epsilon Software UG', category: 'Software' },
    { id: 7, number: 'Knd-00008', name: 'Beta Solutions AG', category: 'Lösungen' },
    { id: 8, number: 'Knd-00009', name: 'Xi Finanzdienstleistungen OHG', category: 'Finanzen' },
    { id: 9, number: 'Knd-00010', name: 'Alpha Technologie GmbH', category: 'Technologie' },
    { id: 10, number: 'Knd-00011', name: 'Pi Software Solutions GmbH', category: 'Software' },
    { id: 11, number: 'Knd-00012', name: 'Lambda Energie GmbH', category: 'Energie' },
    { id: 12, number: 'Knd-00013', name: 'Nu Medizintechnik KG', category: 'Medizintechnik' },
    { id: 13, number: 'Knd-00014', name: 'Zeta Bau GmbH & Co. KG', category: 'Bau' },
    { id: 14, number: 'Knd-00015', name: 'Eta Logistik GmbH', category: 'Logistik' },
    { id: 15, number: 'Knd-00016', name: 'Kappa Electronics SE', category: 'Elektronik' },
];


export interface Task {
    id: number;
    title: string;
}
export const TASK_MOCK: Task[] = [
    { id: 0, title: 'Projektplanung abschließen' },
    { id: 1, title: 'Kundengespräch vorbereiten' },
    { id: 2, title: 'Entwurf des neuen Layouts erstellen' },
    { id: 3, title: 'Marketingstrategie überarbeiten' },
    { id: 4, title: 'Finanzbericht für Q2 erstellen' },
    { id: 5, title: 'Teammeeting organisieren' },
    { id: 6, title: 'Neues CRM-System evaluieren' },
    { id: 7, title: 'Produktpräsentation vorbereiten' },
    { id: 8, title: 'Website-Inhalte aktualisieren' },
    { id: 9, title: 'Kundensupport-Schulung durchführen' },
    { id: 10, title: 'Jahresendfeier planen' },
    { id: 11, title: 'Vertriebsstrategie entwickeln' },
    { id: 12, title: 'Sicherheitsaudit durchführen' },
    { id: 13, title: 'Budget für nächstes Jahr erstellen' },
    { id: 14, title: 'Neue Mitarbeiter einarbeiten' },
    { id: 15, title: 'SEO-Optimierung der Website' },
    { id: 16, title: 'Produktfotoshoot organisieren' },
    { id: 17, title: 'Wartungsarbeiten am Server planen' },
    { id: 18, title: 'Analyse der Kundenzufriedenheit durchführen' },
    { id: 19, title: 'Jahresabschlussbericht vorbereiten' }
];
