import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropContentObjectGroupComponent } from './drop-content-object-group.component';

describe('DropContentObjectGroupComponent', () => {
  let component: DropContentObjectGroupComponent;
  let fixture: ComponentFixture<DropContentObjectGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropContentObjectGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropContentObjectGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
