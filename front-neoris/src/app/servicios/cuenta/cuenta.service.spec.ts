import { TestBed } from '@angular/core/testing';

import { CuentaService } from './cuenta.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CuentaService', () => {
  let service: CuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CuentaService);
  });
  it('should create CuentaService', () => {
    expect(service.Url).toBe('http://localhost:8080/cuentas');
  });
});
