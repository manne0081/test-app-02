import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerConfigComponent } from './partner-config.component';

describe('PartnerConfigComponent', () => {
  let component: PartnerConfigComponent;
  let fixture: ComponentFixture<PartnerConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
