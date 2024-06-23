import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsPdfComponent } from './documents-pdf.component';

describe('DocumentsPdfComponent', () => {
  let component: DocumentsPdfComponent;
  let fixture: ComponentFixture<DocumentsPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentsPdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentsPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
