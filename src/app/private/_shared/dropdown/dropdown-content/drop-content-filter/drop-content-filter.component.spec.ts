import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropContentFilterComponent } from './drop-content-filter.component';

describe('DropContentObjectFilterComponent', () => {
  let component: DropContentFilterComponent;
  let fixture: ComponentFixture<DropContentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropContentFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropContentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
