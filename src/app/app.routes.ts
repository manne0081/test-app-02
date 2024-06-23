import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { HeaderMenuTest2Component } from './private/header-menu-test-2/header-menu-test-2.component';
import { TaskComponent } from './private/workspace/task/task.component';
import { PlannerComponent } from './private/workspace/planner/planner.component';
import { CampagneComponent } from './private/workspace/campagne/campagne.component';
import { EmailComponent } from './private/workspace/email/email.component';
import { CompanyComponent } from './private/contact/company/company.component';
import { SupplierComponent } from './private/contact/supplier/supplier.component';
import { ContactComponent } from './private/contact/contact/contact.component';
import { UserComponent } from './private/contact/user/user.component';
import { ModuleAuthComponent } from './private/contact/module-auth/module-auth.component';
import { CompanyWikiComponent } from './private/contact/company-wiki/company-wiki.component';
import { DebitorDataComponent } from './private/contact/debitor-data/debitor-data.component';
import { AddressComponent } from './private/contact/address/address.component';
import { SalesTransactionComponent } from './private/operations/sales-transaction/sales-transaction.component';
import { OfferComponent } from './private/operations/offer/offer.component';
import { OrderComponent } from './private/operations/order/order.component';
import { InvoiceComponent } from './private/operations/invoice/invoice.component';
import { PartialOrderComponent } from './private/operations/partial-order/partial-order.component';
import { DocumentComponent } from './private/operations/document/document.component';
import { MultipostingComponent } from './private/orderProcessing/multiposting/multiposting.component';
import { PostingComponent } from './private/orderProcessing/posting/posting.component';
import { AdvertisementsComponent } from './private/orderProcessing/advertisements/advertisements.component';
import { PrintComponent } from './private/orderProcessing/print/print.component';
import { ServiceComponent } from './private/orderProcessing/service/service.component';
import { InvoiceOutComponent } from './private/accounting/invoice-out/invoice-out.component';
import { InvPositionGroupComponent } from './private/accounting/inv-position-group/inv-position-group.component';
import { OrderPositionComponent } from './private/accounting/order-position/order-position.component';
import { DocumentsPdfComponent } from './private/accounting/documents-pdf/documents-pdf.component';
import { InvoiceInComponent } from './private/accounting/invoice-in/invoice-in.component';
import { ProductComponent } from './private/productManagement/product/product.component';
import { ProductVariantComponent } from './private/productManagement/product-variant/product-variant.component';
import { ProductGroupComponent } from './private/productManagement/product-group/product-group.component';
import { ProductGroupVariantComponent } from './private/productManagement/product-group-variant/product-group-variant.component';
import { PositionTemplateComponent } from './private/productManagement/position-template/position-template.component';
import { TransPathComponent } from './private/productManagement/trans-path/trans-path.component';
import { AdditionalDataComponent } from './private/productManagement/additional-data/additional-data.component';
import { CustomerContractComponent } from './private/contracting/customer-contract/customer-contract.component';
import { SupplierContractComponent } from './private/contracting/supplier-contract/supplier-contract.component';
import { PartnerConfigComponent } from './private/contracting/partner-config/partner-config.component';
import { SmartTemplateComponent } from './private/toolsAssets/smart-template/smart-template.component';
import { JobFormComponent } from './private/toolsAssets/job-form/job-form.component';
import { InterfaceComponent } from './private/toolsAssets/interface/interface.component';
import { GlobalFontComponent } from './private/toolsAssets/global-font/global-font.component';
import { SalesStatisticComponent } from './private/statisticReporting/sales-statistic/sales-statistic.component';
import { TeamStatisticComponent } from './private/statisticReporting/team-statistic/team-statistic.component';
import { KpiReportComponent } from './private/statisticReporting/kpi-report/kpi-report.component';
import { ClickReportComponent } from './private/statisticReporting/click-report/click-report.component';

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
            { path: 'task', component: TaskComponent },                         // (as Aufgaben)
            { path: 'planner', component: PlannerComponent },                 // (as Planner)
            { path: 'campagne', component: CampagneComponent },                // (as Kampagnen)
            { path: 'email', component: EmailComponent },                   // (as E-Mail)

            // contact (as Kontakte)
            // ---------------------
            { path: 'company', component: CompanyComponent },                 // (as Unternehmen)
            { path: 'supplier', component: SupplierComponent },                // (as Lieferanten)
            { path: 'contact', component: ContactComponent },                 // (as Ansprechpartner)
            { path: 'user', component: UserComponent },                    // (as Benutzer)
            { path: 'module-auth', component: ModuleAuthComponent },             // (as Modulberechtigungen)
            { path: 'company-wiki', component: CompanyWikiComponent },            // (as Unternehmenswikis)
            { path: 'debitor-data', component: DebitorDataComponent },            // (as Debitor Daten)
            { path: 'address', component: AddressComponent },                 // (as Adressen)

            // operations (as Vorgänge & Belege)
            // ---------------------------------
            { path: 'sales-transaction', component: SalesTransactionComponent },       // (as Verkaufsvorgänge)
            { path: 'offer', component: OfferComponent },                   // (as Angebote)
            { path: 'order', component: OrderComponent },                   // (as Aufträge)
            { path: 'invoice', component: InvoiceComponent },                 // (as Rechnungen)
            { path: 'partial-order', component: PartialOrderComponent },           // (as Teilaufträge)
            { path: 'document', component: DocumentComponent },                // (as Alle Belege)

            // orderProcessing (as Auftragsabwicklung)
            // ---------------------------------------
            { path: 'multiposting', component: MultipostingComponent },            // (as Multipostings)
            { path: 'posting', component: PostingComponent },                 // (as Postings)
            { path: 'advertisements', component: AdvertisementsComponent },          // (as Stellenanzeigen)
            { path: 'print', component: PrintComponent },                   // (as Print)
            { path: 'service', component: ServiceComponent },                 // (as Dienstleistungen & Sonstiges)

            // accounting (as Rechnungswesen)
            // ******************************
            { path: 'invoice-out', component: InvoiceOutComponent },             // (as Ausgangsrechnungen)
            { path: 'inv-position-group', component: InvPositionGroupComponent },      // (as Rechnungspositionsgruppen)
            { path: 'order-position', component: OrderPositionComponent },          // (as Auftragspositionen)
            { path: 'documents-pdf', component: DocumentsPdfComponent },           // (as Belegs-PDFs)
            { path: 'invoice-in', component: InvoiceInComponent },              // (as Eingangsrechnungen)

            // productManagement (as Produktverwaltung)
            // ****************************************
            { path: 'product', component: ProductComponent },                 // (as Produkte)
            { path: 'product-variant', component: ProductVariantComponent },         // (as Produktvarianten)
            { path: 'product-group', component: ProductGroupComponent },           // (as Produktgruppen)
            { path: 'product-group-variant', component: ProductGroupVariantComponent },   // (as PGV-Gruppen)
            { path: 'position-template', component: PositionTemplateComponent },       // (as Positionsvorlagen)
            { path: 'trans-path', component: TransPathComponent },              // (as Übertragungswege)
            { path: 'additional-data', component: AdditionalDataComponent },         // (as Zusatzangaben)

            // contracting (as Vertragswesen)
            // ******************************
            { path: 'customer-contract', component: CustomerContractComponent },       // (as Kundenverträge)
            { path: 'supplier-contract', component: SupplierContractComponent },       // (as Lieferantenverträge)
            { path: 'partner-config', component: PartnerConfigComponent },          // (as Partner-Konfiguration)

            // toolsAssets (as Tools & Assets)
            // *******************************
            { path: 'smart-template', component: SmartTemplateComponent },          // (as Smart-Template)
            { path: 'job-form', component: JobFormComponent },                // (as Bewerbungsformulare)
            { path: 'interface', component: InterfaceComponent },               // (as Schnittstellen)
            { path: 'global-font', component: GlobalFontComponent },             // (as Global-Fonts)

            // statisticsReporting (as Statistik & Reporting)
            // **********************************************
            { path: 'sales-statistic', component: SalesStatisticComponent },         // (as Umsatzstatistik)
            { path: 'team-statistic', component: TeamStatisticComponent },          // (as Teamstatistik)
            { path: 'kpi-report', component: KpiReportComponent },              // (as KPI-Report)
            { path: 'click-report', component: ClickReportComponent },            // (as Klick-Report)

            //todo
            //more routes

        ]
    },

    { path: '**', component: AppComponent },
];
