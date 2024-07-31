import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDropdownContentLabelComponent } from './nested-dropdown-content-label.component';

describe('NestedDropdownContentLabelComponent', () => {
  let component: NestedDropdownContentLabelComponent;
  let fixture: ComponentFixture<NestedDropdownContentLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedDropdownContentLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedDropdownContentLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
