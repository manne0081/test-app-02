import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropContentSortComponent } from './drop-content-sort.component';

describe('DropContentObjectSortComponent', () => {
  let component: DropContentSortComponent;
  let fixture: ComponentFixture<DropContentSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropContentSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropContentSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
