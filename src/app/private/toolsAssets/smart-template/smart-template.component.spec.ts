import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTemplateComponent } from './smart-template.component';

describe('SmartTemplateComponent', () => {
  let component: SmartTemplateComponent;
  let fixture: ComponentFixture<SmartTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
