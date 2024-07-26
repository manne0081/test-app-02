import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropContentObjectFilterComponent } from './drop-content-object-filter.component';

describe('DropContentObjectFilterComponent', () => {
  let component: DropContentObjectFilterComponent;
  let fixture: ComponentFixture<DropContentObjectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropContentObjectFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropContentObjectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
