import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarClientesComponent } from './buscar-clientes.component';

describe('BuscarClientesComponent', () => {
  let component: BuscarClientesComponent;
  let fixture: ComponentFixture<BuscarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarClientesComponent]
    });
    fixture = TestBed.createComponent(BuscarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
