import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropContentObjectSortComponent } from './drop-content-object-sort.component';

describe('DropContentObjectSortComponent', () => {
  let component: DropContentObjectSortComponent;
  let fixture: ComponentFixture<DropContentObjectSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropContentObjectSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropContentObjectSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
