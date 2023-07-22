import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClientesComponent } from './listar-clientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListarClientesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListarClientesComponent]
    });
  });
  it('should create ListarClientesComponent', () => {
    const fixture = TestBed.createComponent(ListarClientesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
