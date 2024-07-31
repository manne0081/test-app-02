import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropContentGroupComponent } from './drop-content-group.component';

describe('DropContentGroupComponent', () => {
  let component: DropContentGroupComponent;
  let fixture: ComponentFixture<DropContentGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropContentGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropContentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
