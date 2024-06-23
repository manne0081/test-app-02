import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAuthComponent } from './module-auth.component';

describe('ModuleAuthComponent', () => {
  let component: ModuleAuthComponent;
  let fixture: ComponentFixture<ModuleAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
