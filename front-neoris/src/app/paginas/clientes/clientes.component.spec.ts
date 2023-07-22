import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesComponent } from './clientes.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { BuscarClientesComponent } from './buscar-clientes/buscar-clientes.component';
import { CrearClientesComponent } from './crear-clientes/crear-clientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClientesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ClientesComponent, ListarClientesComponent, BuscarClientesComponent, CrearClientesComponent]
    });
  });

  it('should create ClientesComponent', () => {
    const fixture = TestBed.createComponent(ClientesComponent);
    const clientesComponent = fixture.componentInstance; 
    expect(clientesComponent).toBeTruthy();
  });
});


