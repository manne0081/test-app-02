import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceInComponent } from './invoice-in.component';

describe('InvoiceInComponent', () => {
  let component: InvoiceInComponent;
  let fixture: ComponentFixture<InvoiceInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
