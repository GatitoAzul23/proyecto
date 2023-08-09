import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPaComponent } from './registro-pa.component';

describe('RegistroPaComponent', () => {
  let component: RegistroPaComponent;
  let fixture: ComponentFixture<RegistroPaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPaComponent]
    });
    fixture = TestBed.createComponent(RegistroPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
