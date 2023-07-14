import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCuentasComponent } from './buscar-cuentas.component';

describe('BuscarCuentasComponent', () => {
  let component: BuscarCuentasComponent;
  let fixture: ComponentFixture<BuscarCuentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarCuentasComponent]
    });
    fixture = TestBed.createComponent(BuscarCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
