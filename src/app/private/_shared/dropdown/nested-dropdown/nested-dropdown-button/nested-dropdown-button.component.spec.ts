import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDropdownButtonComponent } from './nested-dropdown-button.component';

describe('NestedDropdownButtonComponent', () => {
  let component: NestedDropdownButtonComponent;
  let fixture: ComponentFixture<NestedDropdownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedDropdownButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
