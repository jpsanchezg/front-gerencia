import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionActoresComponent } from './comunicacion-actores.component';

describe('ComunicacionActoresComponent', () => {
  let component: ComunicacionActoresComponent;
  let fixture: ComponentFixture<ComunicacionActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComunicacionActoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
