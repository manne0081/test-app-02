import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvPositionGroupComponent } from './inv-position-group.component';

describe('InvPositionGroupComponent', () => {
  let component: InvPositionGroupComponent;
  let fixture: ComponentFixture<InvPositionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvPositionGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvPositionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
