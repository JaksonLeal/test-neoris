import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarClientesComponent } from './buscar-clientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BuscarClientesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BuscarClientesComponent]
    });
  });
  it('should create BuscarClientesComponent', () => {
    const fixture = TestBed.createComponent(BuscarClientesComponent);
    const component = fixture.componentInstance; 
    expect(component).toBeTruthy();
  });
});
