import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipostingComponent } from './multiposting.component';

describe('MultipostingComponent', () => {
  let component: MultipostingComponent;
  let fixture: ComponentFixture<MultipostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
