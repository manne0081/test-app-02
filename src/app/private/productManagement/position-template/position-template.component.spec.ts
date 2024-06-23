import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTemplateComponent } from './position-template.component';

describe('PositionTemplateComponent', () => {
  let component: PositionTemplateComponent;
  let fixture: ComponentFixture<PositionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
