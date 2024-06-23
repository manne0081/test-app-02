import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitorDataComponent } from './debitor-data.component';

describe('DebitorDataComponent', () => {
  let component: DebitorDataComponent;
  let fixture: ComponentFixture<DebitorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitorDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebitorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
