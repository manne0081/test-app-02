import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuTestComponent } from './header-menu-test.component';

describe('HeaderMenuTestComponent', () => {
  let component: HeaderMenuTestComponent;
  let fixture: ComponentFixture<HeaderMenuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMenuTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMenuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
