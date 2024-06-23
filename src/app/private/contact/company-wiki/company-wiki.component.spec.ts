import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWikiComponent } from './company-wiki.component';

describe('CompanyWikiComponent', () => {
  let component: CompanyWikiComponent;
  let fixture: ComponentFixture<CompanyWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyWikiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
