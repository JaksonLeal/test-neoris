import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesComponent } from './reportes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReportesComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ReportesComponent]
    });
  });
  it('should create ReportesComponent', () => {
    const fixture = TestBed.createComponent(ReportesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
