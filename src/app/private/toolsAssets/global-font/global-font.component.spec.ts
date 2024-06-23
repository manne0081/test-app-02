import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFontComponent } from './global-font.component';

describe('GlobalFontComponent', () => {
  let component: GlobalFontComponent;
  let fixture: ComponentFixture<GlobalFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalFontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
