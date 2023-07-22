import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMovimientosComponent } from './listar-movimientos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListarMovimientosComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListarMovimientosComponent]
    });
  });
  it('should create ListarMovimientosComponent', () => {
    const fixture = TestBed.createComponent(ListarMovimientosComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
