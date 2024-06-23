import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatisticComponent } from './sales-statistic.component';

describe('SalesStatisticComponent', () => {
  let component: SalesStatisticComponent;
  let fixture: ComponentFixture<SalesStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesStatisticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
