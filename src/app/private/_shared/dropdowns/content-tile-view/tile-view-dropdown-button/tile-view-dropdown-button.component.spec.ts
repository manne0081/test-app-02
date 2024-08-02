import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileViewDropdownButtonComponent } from './tile-view-dropdown-button.component';

describe('TileViewDropdownButtonComponent', () => {
  let component: TileViewDropdownButtonComponent;
  let fixture: ComponentFixture<TileViewDropdownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileViewDropdownButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TileViewDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
