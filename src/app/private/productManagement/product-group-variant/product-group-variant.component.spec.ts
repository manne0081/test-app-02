import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupVariantComponent } from './product-group-variant.component';

describe('ProductGroupVariantComponent', () => {
  let component: ProductGroupVariantComponent;
  let fixture: ComponentFixture<ProductGroupVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGroupVariantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductGroupVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
