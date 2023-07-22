import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentasComponent } from './crear-cuentas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearCuentasComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CrearCuentasComponent]
    });
  });
  it('should create CrearCuentasComponent', () => {
    const fixture = TestBed.createComponent(CrearCuentasComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
