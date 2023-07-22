import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCuentasComponent } from './listar-cuentas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListarCuentasComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ListarCuentasComponent]
    });
  });

  it('should create listarCuentasComponent', () => {
    const fixture = TestBed.createComponent(ListarCuentasComponent);
    const listarCuentasComponent = fixture.componentInstance; 
    expect(listarCuentasComponent).toBeTruthy();  });
});
