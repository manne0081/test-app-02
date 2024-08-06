import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDataDropdownDataComponent } from './filter-data-dropdown-data.component';

describe('FilterDataDropdownDataComponent', () => {
  let component: FilterDataDropdownDataComponent;
  let fixture: ComponentFixture<FilterDataDropdownDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDataDropdownDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterDataDropdownDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
