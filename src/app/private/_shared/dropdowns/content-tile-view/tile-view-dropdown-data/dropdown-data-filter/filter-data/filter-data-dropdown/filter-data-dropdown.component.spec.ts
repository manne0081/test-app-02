import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDataDropdownComponent } from './filter-data-dropdown.component';

describe('FilterDataDropdownComponent', () => {
  let component: FilterDataDropdownComponent;
  let fixture: ComponentFixture<FilterDataDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDataDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterDataDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
