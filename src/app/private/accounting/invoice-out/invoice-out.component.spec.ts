import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceOutComponent } from './invoice-out.component';

describe('InvoiceOutComponent', () => {
  let component: InvoiceOutComponent;
  let fixture: ComponentFixture<InvoiceOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
