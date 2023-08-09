import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadpubComponent } from './publicidadpub.component';

describe('PublicidadpubComponent', () => {
  let component: PublicidadpubComponent;
  let fixture: ComponentFixture<PublicidadpubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicidadpubComponent]
    });
    fixture = TestBed.createComponent(PublicidadpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
