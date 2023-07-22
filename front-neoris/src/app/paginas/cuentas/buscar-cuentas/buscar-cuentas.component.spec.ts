import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCuentasComponent } from './buscar-cuentas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuscarCuentasComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BuscarCuentasComponent]
    });
  });
  it('should create BuscarCuentasComponent', () => {
    const fixture = TestBed.createComponent(BuscarCuentasComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
