import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuTest2Component } from './header-menu-test-2.component';

describe('HeaderMenuTest2Component', () => {
  let component: HeaderMenuTest2Component;
  let fixture: ComponentFixture<HeaderMenuTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMenuTest2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMenuTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
