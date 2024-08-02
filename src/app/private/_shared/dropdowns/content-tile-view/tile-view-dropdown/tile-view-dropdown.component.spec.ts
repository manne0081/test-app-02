import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileViewDropdownComponent } from './tile-view-dropdown.component';

describe('TileViewDropdownComponent', () => {
  let component: TileViewDropdownComponent;
  let fixture: ComponentFixture<TileViewDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileViewDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TileViewDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
