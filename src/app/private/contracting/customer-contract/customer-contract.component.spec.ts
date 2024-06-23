import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContractComponent } from './customer-contract.component';

describe('CustomerContractComponent', () => {
  let component: CustomerContractComponent;
  let fixture: ComponentFixture<CustomerContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerContractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
