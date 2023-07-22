import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClientesComponent } from './crear-clientes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearClientesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CrearClientesComponent]
    });

  });
  it('should create CrearClientesComponent', () => {
    const fixture = TestBed.createComponent(CrearClientesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
