import { TestBed } from '@angular/core/testing';

import { MovimientoService } from './movimiento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovimientoService', () => {
  let service: MovimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(MovimientoService);
  });
  it('should create MovimientoService', () => {
    expect(service.Url).toBe('http://localhost:8080/movimientos');
  });
});
