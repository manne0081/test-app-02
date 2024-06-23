import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransPathComponent } from './trans-path.component';

describe('TransPathComponent', () => {
  let component: TransPathComponent;
  let fixture: ComponentFixture<TransPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransPathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
