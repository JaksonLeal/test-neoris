import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMovimientosComponent } from './crear-movimientos.component';

describe('CrearMovimientosComponent', () => {
  let component: CrearMovimientosComponent;
  let fixture: ComponentFixture<CrearMovimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearMovimientosComponent]
    });
    fixture = TestBed.createComponent(CrearMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
