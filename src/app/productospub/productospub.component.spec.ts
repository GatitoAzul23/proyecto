import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductospubComponent } from './productospub.component';

describe('ProductospubComponent', () => {
  let component: ProductospubComponent;
  let fixture: ComponentFixture<ProductospubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductospubComponent]
    });
    fixture = TestBed.createComponent(ProductospubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
