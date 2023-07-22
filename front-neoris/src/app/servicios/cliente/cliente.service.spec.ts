import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ClienteService);
  });

  it('should create ClienteService', () => {
    expect(service.Url).toBe('http://localhost:8080/clientes');
  });

});



