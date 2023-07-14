import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMovimientosComponent } from './buscar-movimientos.component';

describe('BuscarMovimientosComponent', () => {
  let component: BuscarMovimientosComponent;
  let fixture: ComponentFixture<BuscarMovimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarMovimientosComponent]
    });
    fixture = TestBed.createComponent(BuscarMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
