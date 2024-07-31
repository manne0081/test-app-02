import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponentOne } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponentOne;
  let fixture: ComponentFixture<DropdownComponentOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponentOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownComponentOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});