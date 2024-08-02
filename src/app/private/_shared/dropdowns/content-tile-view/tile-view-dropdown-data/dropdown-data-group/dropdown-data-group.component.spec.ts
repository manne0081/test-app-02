import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDataGroupComponent } from './dropdown-data-group.component';

describe('DropdownDataGroupComponent', () => {
  let component: DropdownDataGroupComponent;
  let fixture: ComponentFixture<DropdownDataGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownDataGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownDataGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
