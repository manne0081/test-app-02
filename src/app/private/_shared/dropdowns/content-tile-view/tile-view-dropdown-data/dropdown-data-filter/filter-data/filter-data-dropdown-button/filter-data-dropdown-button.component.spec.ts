import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDataDropdownButtonComponent } from './filter-data-dropdown-button.component';

describe('FilterDataDropdownButtonComponent', () => {
  let component: FilterDataDropdownButtonComponent;
  let fixture: ComponentFixture<FilterDataDropdownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDataDropdownButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterDataDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
