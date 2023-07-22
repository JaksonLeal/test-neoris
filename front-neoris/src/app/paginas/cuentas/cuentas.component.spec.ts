import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CuentasComponent } from './cuentas.component';
import { BuscarCuentasComponent } from './buscar-cuentas/buscar-cuentas.component';
import { ListarCuentasComponent } from './listar-cuentas/listar-cuentas.component';
import { CrearCuentasComponent } from './crear-cuentas/crear-cuentas.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CuentasComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CuentasComponent, BuscarCuentasComponent, ListarCuentasComponent, CrearCuentasComponent]
    });
  });

  it('should create CuentasComponent', () => {
    const fixture = TestBed.createComponent(CuentasComponent);
    const cuentasComponent = fixture.componentInstance; 
    expect(cuentasComponent).toBeTruthy();
  });
});
